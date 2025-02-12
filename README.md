# Expense Tracker Frontend

This is the frontend for the Expense Tracker application. Built with React and Material UI, this application allows users to register, log in, and manage their expenses with features such as adding, editing, and deleting expenses. It also supports a dark/light mode toggle and integrates with the backend API.

## Live Demo

[Expense Tracker Frontend](https://expense-tracker-frontend.example.com)  
*(Replace the link with your deployed Vercel URL)*

## Features

- **User Authentication:** Register and log in with email and password.
- **Expense Management:** Add, edit, delete, and list expenses.
- **Export to PDF:** Generate a PDF report of expenses.
- **Dark/Light Mode:** Toggle between a beautiful light mode (with a background image) and a dark mode.
- **Responsive UI:** Built using Material UI for a modern, responsive design.

## Project Structure
expense-tracker-demo/
├── client/                     # Frontend React application
│   ├── public/
│   │   ├── index.html          # HTML template
│   │   ├── manifest.json       # PWA manifest file
│   │   └── logo192.png         # App icon (ensure this is valid)
│   ├── src/
│   │   ├── api.js              # Axios API helper functions
│   │   ├── App.js              # Main application and routing
│   │   ├── index.js            # React entry point
│   │   ├── context/            
│   │   │   ├── AuthContext.jsx # Context for user authentication
│   │   │   └── ThemeContext.jsx# Context for dark/light mode theming
│   │   └── components/
│   │       ├── Auth/           # Authentication components
│   │       │   ├── Login.jsx   # Login page
│   │       │   └── Register.jsx# Registration page
│   │       ├── Dashboard.jsx   # Dashboard for expense management
│   │       ├── ExpenseForm.jsx # Form for adding expenses
│   │       ├── ExpenseList.jsx # List of expenses with edit & delete
│   │       ├── EditExpenseDialog.jsx # Modal for editing an expense
│   │       ├── NavBar.jsx      # Navigation bar with dark mode toggle
│   │       └── HomePage.jsx    # Landing/home page for new users
│   └── package.json            # Frontend package configuration
│
├── server/                     # Backend Express API
│   ├── config/
│   │   └── db.js               # MongoDB connection configuration
│   ├── controllers/
│   │   ├── authController.js   # Handlers for user authentication
│   │   └── expenseController.js# Handlers for expense management
│   ├── middleware/
│   │   └── auth.js             # JWT authentication middleware
│   ├── models/
│   │   ├── User.js             # User schema/model
│   │   └── Expense.js          # Expense schema/model
│   ├── routes/
│   │   ├── auth.js             # Authentication routes (mounted at /api/auth)
│   │   └── expenses.js         # Expense routes (mounted at /api/expenses)
│   ├── .env                    # Environment variables (do not commit sensitive info)
│   ├── app.js                  # Main Express application file
│   └── package.json            # Backend package configuration
│
└── README.md                   # Project documentation and instructions


## Getting Started

### Prerequisites

- **Node.js:** v14 or higher is recommended.
- **npm** or **yarn**

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/expense-tracker-frontend.git
expense-tracker-frontend.git
Navigate to the project folder:

bash
Copy
Edit
cd expense-tracker-frontend
Install dependencies:

bash
Copy
Edit
npm install
or, if you prefer Yarn:

bash
Copy
Edit
yarn install
Configure Environment Variables:

Create a .env file in the root directory and add:

dotenv
Copy
Edit
REACT_APP_API_URL=https://expense-tracker-backend-lma3.onrender.com/api
Note: Ensure the API URL includes the /api prefix since the backend mounts routes under /api.

Start the Development Server:

bash
Copy
Edit
npm start
The app should now be running at http://localhost:3000.

Deployment
The frontend is deployed on Vercel. When configuring your project on Vercel, ensure you add the environment variable:

Key: REACT_APP_API_URL
Value: https://expense-tracker-backend-lma3.onrender.com/api
Vercel will automatically build and deploy your React app. For more details, see Vercel documentation.

Screenshots
Frontend - Light Mode


Frontend - Dark Mode


Note: Replace the placeholder images in the assets/ folder with your actual screenshots.

Technologies Used
React.js – JavaScript library for building user interfaces
Material UI – UI framework for React
Axios – HTTP client for API calls
React Router – Declarative routing for React
Troubleshooting
API 404 Errors:
Make sure that the environment variable REACT_APP_API_URL includes the /api prefix so that endpoints resolve correctly (e.g., https://expense-tracker-backend-lma3.onrender.com/api/auth/register).

Manifest Icon Issues:
If you see errors related to logo192.png, verify that the file exists in your public folder and is a valid image.
