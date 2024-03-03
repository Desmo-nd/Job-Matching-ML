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
kmeans = joblib.load('demand_kmeans_model.joblib')
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

# Feature extraction using TF-IDF
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(data['Job Title'])

@app.route('/most-in-demand-jobs', methods=['GET'])
def most_in_demand_jobs():
    # Group job titles by cluster
    clusters = {}
    for cluster_label in range(kmeans.n_clusters):
        cluster_data = data[data['cluster'] == cluster_label]
        job_info = []
        for index, row in cluster_data.iterrows():
            if len(job_info) >= 5:
                break
            job_info.append({
                'Job Title': row['Job Title'],
                'Salary Range': row['Salary Range'],  # Assuming you have this column
                'Job Posting Date': row['Job Posting Date'],      # Assuming you have this column
                'Salary Range': row['Salary Range'],
                'Job Description'	:row['Job Description']  # Assuming you have this column
            })
        clusters[cluster_label] = job_info

    # Flatten the clusters and get the top 10 unique jobs
    all_job_info = [job_info for cluster_job_info in clusters.values() for job_info in cluster_job_info]
    top_jobs = all_job_info[:10]

    return jsonify({'jobs': top_jobs})

if __name__ == '__main__':
    logging.basicConfig(format='%(asctime)s - %(levelname)s - %(message)s', level=logging.INFO)
    app.run(host='192.168.0.109', port=5000)
