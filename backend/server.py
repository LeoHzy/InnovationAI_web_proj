from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

OPENAI_API_KEY = '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'

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    prompt = data.get('prompt')
    print(f'Received prompt: {prompt}')  # Log received prompt

    try:
        response = requests.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            headers={
                'Authorization': f'Bearer {OPENAI_API_KEY}',
                'Content-Type': 'application/json'
            },
            json={
                'prompt': prompt,
                'max_tokens': 150,
                'n': 1,
                'stop': None,
                'temperature': 0.9
            }
        )

        response_data = response.json()
        print(f'Response from OpenAI: {response_data}')  # Log API response
        return jsonify({'text': response_data['choices'][0]['text'].strip()})
    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'error': 'An error occurred while processing your request.'}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)