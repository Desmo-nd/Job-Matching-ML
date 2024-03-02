from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import logging

app = Flask(__name__)
CORS(app)

# Load the job matching model
model = joblib.load('job_matching_model.joblib')

# Load the tokenized data
data = pd.read_csv('tokenized.csv')

# Calculate similarity function
def calculate_similarity(user_skills_input):
    vectorizer = TfidfVectorizer()
    skills_matrix = vectorizer.fit_transform(data['tokenized_skills'])
    user_skills_matrix = vectorizer.transform([user_skills_input])
    similarity_scores = cosine_similarity(user_skills_matrix, skills_matrix).flatten()
    return similarity_scores

# Route for getting recommended jobs
@app.route('/recommend-jobs', methods=['POST'])
def recommend_jobs():
    user_skills_input = request.json.get('user_skills', '')
    if not user_skills_input:
        return jsonify({'error': 'No user skills provided'}), 400

    similarity_scores = calculate_similarity(user_skills_input)
    if len(similarity_scores) == 0:
        return jsonify({'error': 'No similarity scores calculated'}), 500

    # Find the top 3 most similar jobs
    top_indices = similarity_scores.argsort()[-3:][::-1]
    recommended_jobs = data.iloc[top_indices][['Job Title', 'Company', 'location', 'Salary Range', 'Job Posting Date', 'Job Portal']]
    recommended_jobs['similarity'] = similarity_scores[top_indices]

    return jsonify(recommended_jobs.to_dict(orient='records'))



# Route for getting most in-demand jobs
@app.route('/most-in-demand-jobs', methods=['GET'])
def most_in_demand_jobs():
    cluster_counts = data['cluster'].value_counts()
    most_in_demand_cluster = cluster_counts.idxmax()
    most_in_demand_jobs = data[data['cluster'] == most_in_demand_cluster][['Job Title', 'Company', 'location', 'Salary Range', 'Job Posting Date', 'Job Portal']]
    return jsonify(most_in_demand_jobs.to_dict(orient='records'))

if __name__ == '__main__':
    logging.basicConfig(format='%(asctime)s - %(levelname)s - %(message)s', level=logging.INFO)
    app.run(host='192.168.0.109', port=5000)
