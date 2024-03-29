from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import logging
from sklearn.cluster import KMeans

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


@app.route('/most-in-demand-jobs', methods=['GET'])
def most_in_demand_jobs():
    # Feature extraction using TF-IDF
    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(data['Job Title'])

    n_clusters = 6
    kmeans = KMeans(n_clusters=n_clusters, random_state=10)
    kmeans.fit(X)

    joblib.dump(kmeans, 'demand_kmeans_model.joblib')

    data['cluster'] = kmeans.labels_

    # Identify the cluster with the highest count (assuming the index corresponds to the cluster label)
    high_demand_cluster = data['cluster'].value_counts().idxmax()
    # Group job titles by cluster
    clusters = {}
    for cluster_label in range(kmeans.n_clusters):
        cluster_data = data[data['cluster'] == cluster_label]
        job_info = []
        for index, row in cluster_data.iterrows():
            if len(job_info) >= 10:
                break
            job_info.append({
                'Job Title': row['Job Title'],
                'Salary Range': row['Salary Range'],  
                'Job Posting Date': row['Job Posting Date'],      
                'Salary Range': row['Salary Range'],
                'Job Description'	:row['Job Description']  
            })
        clusters[cluster_label] = job_info

    # Flatten the clusters and get the top 10 unique jobs
        top_jobs = clusters[high_demand_cluster]


    return jsonify({'jobs': top_jobs})

if __name__ == '__main__':
    logging.basicConfig(format='%(asctime)s - %(levelname)s - %(message)s', level=logging.INFO)
    app.run(host='0.0.0.0', port=5000)
