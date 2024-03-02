from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS) to allow requests from the frontend

# Load the job matching model
model = joblib.load('job_matching_model.joblib')

# Load the tokenized data
data = pd.read_csv('tokenized.csv')

# Calculate similarity function
def calculate_similarity(user_skills_input):
    vectorizer = CountVectorizer()
    skills_matrix = vectorizer.fit_transform(data['tokenized_skills'])
    user_skills_matrix = vectorizer.transform([user_skills_input])
    similarity_scores = cosine_similarity(user_skills_matrix, skills_matrix).flatten()
    return similarity_scores

# Route for getting recommended jobs
@app.route('/recommend-jobs', methods=['POST'])
def recommend_jobs():
    user_skills_input = request.json['user_skills']
    similarity_scores = calculate_similarity(user_skills_input)
    cluster_labels = model.predict([similarity_scores])
    cluster_id = cluster_labels[0]
    cluster_jobs = data.loc[cluster_labels == cluster_id]
    cluster_jobs['similarity'] = similarity_scores[cluster_labels == cluster_id]
    cluster_jobs = cluster_jobs.sort_values(by='similarity', ascending=False).head(3)
    recommended_jobs = cluster_jobs[['Job Title', 'Company', 'location', 'Salary Range', 'Job Posting Date', 'Job Portal', 'similarity']]
    return jsonify(recommended_jobs.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
