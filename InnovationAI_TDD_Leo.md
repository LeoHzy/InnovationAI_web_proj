Introduction

Purpose: Design a website for Innovation AI. This website will utilize a full-stack technology and databases. The key feature is to integrate a customer service chat bot that is connected to OpenAI’s API.

Scope: This document covers the design of both the front-end and back-end of the website, including the integration of the chatbot, database design, API endpoints, and user interface design.

Definitions, Acronyms, and Abbreviations: 

	API: Application Programming Interface

		TDD: Technical Design Document

		UI: User Interface

		DB: Database

References:

OpenAI API: https://platform.openai.com/docs/api-reference/introduction

React: https://react.dev/

Flask: https://flask.palletsprojects.com/en/3.0.x/

System Overview

Description:

The system is a tech company website featuring various informational pages and a customer service chatbot powered by OpenAI. Users can navigate the website to learn about the company and interact with the chatbot for assistance.

Major Components:

Front-end: Developed using React.

Back-end: Developed using Flask.

Chatbot: Integrated using OpenAI’s API.

Database: MongoDB for storing user information and interaction logs

Design Considerations

Assumptions and Dependencies: 

The OpenAI’s API is functional

User will have access to the internet

Constraints:

Having a valid URL might cost extra fee (deploy to local first)

Design Goals:

Have a fully functional website that contains all the necessary information. Also, the chat bot can answer all the general question about the company.

Architectural Design

System Architecture:

The architecture consists of a React front-end, a Flask back-end, and a MongoDB database. The OpenAI API is used for the chatbot functionality.

Component Diagram:

Back-end:





Front-end:



Detailed Design

Database Design:
Users:

user_id (Primary Key)

username (Unique)

password (Hashed)

email (Unique)

created_at (Timestamp)

Interactions:

		interaction_id (Primary Key)

user_id (Foreign Key)

question

	response

timestamp

API/Backend Design:

1. /register: Handles user registration.

2. /login: Handles user authentication.

3. /askQuestion: Handles user queries using the OpenAI API.

Frontend Design:

The front-end will be developed using React, providing a seamless user interface for interaction with the chatbot and user management.



Components:

Home: Displays an overview of the company.

		About: Shows detailed information about the company.

		Services: Lists the services offered by the company.

		Chatbot: Provides an interactive chat interface for user queries.

		Login: Allows users to log in to their accounts.

		Register: Allows new users to create an account.





















Interface Design

User Interface

	Home Page: Overview of the company and navigation bar



	About us Page: Detailed information about the company.

Contact us Page: contact information and blanks to fill your information.

	Chatbot: Interactive chat interface for customer service.



	User dashboard (optional): a place to see all the user information and the service

External Interfaces

MongoDB database and OpenAI API

Data Flow

Data Flow Diagram

User Registration and Login:

	•User inputs registration/login details.

	•Front-end sends data to the back-end.

	•Back-end processes the request and interacts with the database.

	•The back-end returns a response to the front-end.

User Asks a Question:

	•User inputs a question in the chat box.

	•Front-end sends the question to the back-end.

	•Back-end sends the question to the OpenAI API.

	•OpenAI API returns the response to the back-end.

	•Back-end returns the response to the front-end.

Sequence Diagrams

User Registration:

User -> Front-end: Enters registration details

Front-end -> Back-end: Sends registration details

Back-end -> Database: Stores user details

Database -> Back-end: Confirms storage

Back-end -> Front-end: Returns success message

Front-end -> User: Displays success message

		User Login:

User -> Front-end: Enters login details

Front-end -> Back-end: Sends login details

Back-end -> Database: Validates user credentials

Database -> Back-end: Returns validation result

Back-end -> Front-end: Returns JWT token or error message

Front-end -> User: Displays login success or error message

User Asked a Question:

User -> Front-end: Enters question

Front-end -> Back-end: Sends question

Back-end -> OpenAI API: Forwards question

OpenAI API -> Back-end: Returns generated response

Back-end -> Front-end: Returns response

Front-end -> User: Displays response



Security

Authentication:

User authentication using JWT tokens

Authorization:

Role-based access control for admin and regular users

Data Protection:

Use HTTPS for secure communication.

Encrypt sensitive data in the database.

Performance

Performance Requirements:

The system should handle 1000 requests per minute.

The chatbot should respond within 2 seconds.

Scalability:

Use load balancing for the back-end.

Implement caching for frequently accessed data.

Error Handling

Error Logging:

Use a logging framework to capture and store error logs.

Monitor logs for recurring issues.

User Notifications

Display user-friendly error messages.

Implement retry mechanisms for transient errors.

Testing

Unit Testing:

Test individual component and functions in isolation

Integration Testing:

Test interaction between different component like back-end and database

System Testing:

End-to-end testing the entire system

Deployment

Environment Setup:

Set up development, staging, and production environments.

Use Docker for containerization.

Deployment Strategy:

Continuous Integration/Continuous Deployment (CI/CD) pipeline.

Rollback mechanisms in case of deployment failures (Git).

Maintenance

Monitoring:

Use monitoring tools to track system performance and uptime.

Updates and Patches:

Regularly update dependencies and apply security patches.

Schedule maintenance windows for system updates.

