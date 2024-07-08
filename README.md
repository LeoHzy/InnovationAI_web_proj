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

4. The `package.json` file in the `frontend` directory includes the following dependencies:

    ```json
    {
      "name": "frontend",
      "version": "0.1.0",
      "private": true,
      "proxy": "http://127.0.0.1:5000",
      "dependencies": {
        "@chatscope/chat-ui-kit-react": "^2.0.3",
        "@fortawesome/fontawesome-free": "^6.5.2",
        "@testing-library/jest-dom": "^5.11.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^12.1.10",
        "axios": "^1.7.2",
        "bootstrap": "^5.3.3",
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
        "eject": "react-scripts eject"
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
      },
      "devDependencies": {
        "@babel/plugin-proposal-private-property-in-object": "^7.18.6",
        "eslint": "^7.32.0",
        "eslint-config-airbnb": "^18.2.1",
        "eslint-config-react-app": "^6.0.0",
        "eslint-plugin-import": "^2.25.2",
        "eslint-plugin-jsx-a11y": "^6.4.1",
        "eslint-plugin-react": "^7.26.1",
        "eslint-plugin-react-hooks": "^4.2.0"
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
    pip install
    pip install flask
    pip install Flask-Mail
    
    ```

4. Create a `.env` file in the `backend` directory and add your environment variables:
    ```
    MAIL_USERNAME= xxx@xxmail.com
    MAIL_PASSWORD= xxxxxx (this should be the app specified password instead of your password to the email)
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


© 2024 Innovation AI. All rights reserved.

