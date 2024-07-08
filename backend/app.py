from flask import Flask, request, jsonify, send_from_directory
from flask_mail import Mail, Message
from flask_cors import CORS
from dotenv import load_dotenv
import os
from pymongo import MongoClient, DESCENDING
import certifi

load_dotenv()

app = Flask(__name__, static_folder='../frontend/build')

CORS(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')

mail = Mail(app)

# MongoDB setup
client = MongoClient(os.getenv('MONGODB_URI'), tlsCAFile=certifi.where())
db = client.innovationai_blogdb
blogs_collection = db.blogs

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    user_email = data.get('email')
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    phone = data.get('phone')
    subject = data.get('subject')
    message = data.get('message')

    msg = Message('We have received your inquiry', recipients=[user_email])
    msg.body = f"Dear {first_name},\n\nWe have received your inquiry and will get back to you shortly.\n\nBest regards,\nInnovation AI"
    mail.send(msg)

    customer_service_email = os.getenv('MAIL_USERNAME')
    msg = Message('New Inquiry Received', recipients=[customer_service_email])
    msg.body = f"New inquiry received from {first_name} {last_name}.\n\nEmail: {user_email}\nPhone: {phone}\nSubject: {subject}\nMessage: {message}"
    mail.send(msg)

    return jsonify({'message': 'Emails sent successfully'})

@app.route('/blogs', methods=['GET'])
def get_blogs():
    try:
        blogs = list(blogs_collection.find({}, {'_id': 0, 'articleId': 1, 'date': 1, 'text': 1}).sort('articleId', DESCENDING).limit(5))
        return jsonify(blogs)
    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({'error': 'An error occurred while fetching blogs.'}), 500
    
@app.route('/blog/<int:articleId>', methods=['GET'])
def get_blog(articleId):
    blog = blogs_collection.find_one({'articleId': articleId}, {'_id': 0, 'articleId': 1, 'date': 1, 'text': 1, 'content': 1})
    if blog:
        return jsonify(blog)
    else:
        return jsonify({'error': 'Blog not found'}), 404

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)