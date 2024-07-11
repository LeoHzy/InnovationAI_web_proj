# Innovation AI Web Project

This project contains both the frontend and backend components of the Innovation AI web application. The project is set up to allow for easy development, testing, and deployment.

## Table of Contents

- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Running the Application](#running-the-application)
- [Selenium Testing](#selenium-testing)
  - [Setup](#setup)
  - [Running the Tests](#running-the-tests)
- [MongoDB Setup](#mongodb-setup)
- [Heroku Deployment](#heroku-deployment)
- [Contact](#contact)

## Requirements

- Node.js (v14.x or later)
- Python (v3.6 or later)
- pip (Python package installer)
- Google Chrome browser
- ChromeDriver

## Setup Instructions

### Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `frontend` directory and add your OpenAI API key:
    ```
    REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
    ```

4. Here is a copy of the current package.json
    ```sh
    {
    "name": "frontend",
    "version": "0.1.0",
    "private": true,
    "proxy": "http://127.0.0.1:5000",
    "engines": {
        "node": "20.x",
        "npm": "10.x"
    },
    "dependencies": {
        "@babel/plugin-proposal-private-property-in-object": "^7.18.6",
        "@chatscope/chat-ui-kit-react": "^2.0.3",
        "@fortawesome/fontawesome-free": "^6.5.2",
        "@testing-library/jest-dom": "^5.11.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^12.1.10",
        "axios": "^1.7.2",
        "bootstrap": "^5.3.3",
        "eslint-config-react-app": "^6.0.0",
        "react": "^18.3.1",
        "react-bootstrap": "^2.10.3",
        "react-dom": "^18.3.1",
        "react-icons": "^4.3.1",
        "react-router-dom": "^6.24.0",
        "react-scripts": "^5.0.1",
        "react-scroll": "^1.9.0",
        "web-vitals": "^1.0.1"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "heroku-postbuild": "npm install --prefix frontend && npm run build --prefix frontend"
    },
    "eslintConfig": {
        "extends": "react-app"
    },
    "browserslist": {
        "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
        ],
        "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
        ]
    }
    }

    ```

### Backend

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Create a virtual environment (optional but recommended):
    ```sh
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the dependencies:
    ```sh
    pip install -r requirements.txt
    ```

    or manually add such file include the following (or manually pip install all package needed)
    ```sh
    blinker==1.8.2
    certifi==2024.7.4
    charset-normalizer==3.3.2
    click==8.1.7
    dnspython==2.6.1
    Flask==3.0.3
    Flask-Cors==4.0.1
    Flask-Mail==0.10.0
    Flask-SQLAlchemy==3.1.1
    gunicorn==22.0.0
    idna==3.7
    itsdangerous==2.2.0
    Jinja2==3.1.4
    MarkupSafe==2.1.5
    packaging==24.1
    pymongo==4.8.0
    python-dotenv==1.0.1
    requests==2.32.3
    SQLAlchemy==2.0.30
    typing_extensions==4.12.1
    urllib3==2.2.1
    Werkzeug==3.0.3
    ```


4. Create a `.env` file in the `backend` directory and add your environment variables:
    ```
    MAIL_USERNAME= xxx@xxmail.com
    MAIL_PASSWORD= xxxxxx (this should be the app specified password instead of your password to the email)
    MONGODB_URI=your_mongodb_uri
    ```

### Running the Application

#### Running the Backend

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Start the Flask server:
    ```sh
    python app.py
    ```

#### Running the Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Start the React development server:
    ```sh
    npm start
    ```

## Selenium Testing

### Setup

1. Ensure that you have Google Chrome installed.
2. Install the `webdriver_manager` package:
    ```sh
    pip install selenium   
    pip install webdriver_manager
    ```

### Running the Tests

1. Ensure the frontend server is running on `http://localhost:3000`.
2. Navigate to the `test` directory:
    ```sh
    cd test
    ```

3. Run the Selenium tests:
    ```sh
    python frontend_test.py
    ```

The test script will open the Chrome browser, navigate through the web application, and verify that the links and chatbot functionality work correctly. It will also test the contact form and check for the alert message.

### MongoDB Setup

1. **Create a MongoDB Atlas account and set up a cluster**.
2. **Create a database named `innovationai_blogdb` and a collection named `blogs`**.
3. **Insert the following sample documents into the `blogs` collection**:
    ```json
    [
      {
        "articleId": 1,
        "date": "2024-07-09",
        "text": "Exploring the Future of AI in Healthcare",
        "content": "Artificial Intelligence (AI) is revolutionizing the healthcare industry. From diagnosis to treatment, AI algorithms are being integrated into medical systems, providing unprecedented accuracy and efficiency. \n\nOne major area where AI is making a significant impact is in the early detection of diseases. Machine learning models are capable of analyzing medical images with high precision, often surpassing human capabilities. This not only speeds up the diagnosis process but also reduces the margin for error. \n\nMoreover, AI-powered predictive analytics are helping healthcare providers to anticipate patient needs and personalize treatment plans. By analyzing vast amounts of data, these systems can identify patterns and suggest interventions that could prevent health issues before they become severe."
      },
      {
        "articleId": 2,
        "date": "2024-07-08",
        "text": "AI in Finance: Transforming the Industry",
        "content": "The finance sector has always been at the forefront of adopting new technologies, and AI is no exception. Financial institutions are leveraging AI to improve customer service, detect fraud, and optimize trading strategies. \n\nAI chatbots are now commonplace in customer service, providing quick and accurate responses to queries. This not only enhances customer satisfaction but also frees up human agents to handle more complex issues. \n\nIn trading, AI algorithms analyze market data in real-time, identifying trends and making split-second decisions. These systems can process information far faster than human traders, giving them a significant edge in the market. Additionally, AI is playing a crucial role in fraud detection, where machine learning models can identify suspicious transactions and flag them for further investigation."
      }
    ]
    ```
### Heroku Deployment
1. Ensure there is a valid heroku app
2. Add Build package for node and python in setting->Buildpacks
3. Add all environment variable in the setting->Config Vars 
4. Make sure there is a Procfile in the root directory and contains
```sh
web: gunicorn backend.app:app
```
5. Make sure there is a requirement.txt in the root directory and contains
```sh
blinker==1.8.2
certifi==2024.7.4
charset-normalizer==3.3.2
click==8.1.7
dnspython==2.6.1
Flask==3.0.3
Flask-Cors==4.0.1
Flask-Mail==0.10.0
Flask-SQLAlchemy==3.1.1
gunicorn==22.0.0
idna==3.7
itsdangerous==2.2.0
Jinja2==3.1.4
MarkupSafe==2.1.5
packaging==24.1
pymongo==4.8.0
python-dotenv==1.0.1
requests==2.32.3
SQLAlchemy==2.0.30
typing_extensions==4.12.1
urllib3==2.2.1
Werkzeug==3.0.3
```
6. Make sure there is a package.json in the root directory and contains
```sh
"scripts": {
    "heroku-postbuild": "npm install --prefix frontend && npm run build --prefix frontend"
}
```

7. Push all the code to the git repo can connect your git repo with heroku follow the setup instruction in heroku->Deploy
8. Finally, choose the right branch to deploy in manual deploy section. (Read the log if there is a deployment issue)

© 2024 Innovation AI. All rights reserved.

