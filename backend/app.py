from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
from dotenv import load_dotenv
import os
load_dotenv()

app = Flask(__name__)

CORS(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')

mail = Mail(app)

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

if __name__ == '__main__':
    app.run(debug=True)