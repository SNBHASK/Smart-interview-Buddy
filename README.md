Smart Interview Buddy 

A simple and effective web app for AI-powered interview question generation.

Features:
- Enter any job role and company name
- Generates realistic interview questions using Hugging Face API
- Clean and responsive UI
- Optionally extendable with AI feedback, PDF download, or login features

Tech Stack:
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- AI: Hugging Face API for question generation

Setup Instructions:

1. Clone the repository:
   git clone <your-repo-url>
   cd <your-repo-folder>

2. Backend setup:
   cd backend
   npm install

3. Create a .env file inside the backend folder with your Hugging Face API token:
   HUGGINGFACE_API_TOKEN=your_huggingface_api_token_here

4. Start the backend server:
   npm start

5. Frontend setup:
   Open the frontend folder.
   Open index.html in your browser or serve it using any static server.

Usage:

- Enter the job role and company name on the homepage.
- Submit the form to generate interview questions powered by AI.
- (Optional) Extend functionality by adding features like AI feedback on answers, PDF export, or user login.

Notes:

- Make sure your Hugging Face API token has enough quota.
- You can customize the backend to use different Hugging Face models.
- This app currently works best online due to API dependency but can be adapted for offline usage with local models.

Contribution:

Feel free to fork and contribute! Please raise issues or pull requests for improvements.

License:

MIT License
