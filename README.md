# MERN Site

A modern, responsive **4-page MERN Stack website** built as a full-stack learning and deployment project.

The project demonstrates how a React + Vite frontend communicates with a Node.js + Express backend and stores contact-form submissions in MongoDB Atlas.

The application is structured as separate frontend and backend applications inside a single GitHub repository.

---

## 🚀 Live Project

**Repository:**
https://github.com/enkidu-technologies/mern-site

**Frontend:**
GitHub Pages deployment

**Backend:**
Node.js + Express deployment planned on Hostinger

**Database:**
MongoDB Atlas

---

## 📌 Project Overview

This project is a simple but professional business website consisting of four main pages:

* Home
* About Us
* Services
* Contact Us

The primary full-stack functionality is the Contact Us form.

When a visitor submits the form:

```text
React Contact Form
       ↓
      Axios
       ↓
Express REST API
       ↓
   Mongoose
       ↓
 MongoDB Atlas
```

The submitted contact information is stored securely in MongoDB.

---

## 🛠️ Technology Stack

### Frontend

* React
* Vite
* React Router
* Tailwind CSS
* Axios
* JavaScript / JSX

### Backend

* Node.js
* Express.js
* Mongoose
* CORS
* dotenv

### Database

* MongoDB Atlas

### Deployment

* GitHub
* GitHub Pages
* GitHub Actions
* Hostinger
* MongoDB Atlas

---

## 📁 Project Structure

```text
mern-site/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── client/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PageHeader.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── server/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── contactController.js
│   │
│   ├── models/
│   │   └── Contact.js
│   │
│   ├── routes/
│   │   └── contactRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── .gitignore
├── folder-structure.md
├── plan.md
└── README.md
```

---

# 🌐 Frontend

The frontend is built with **React + Vite** and styled using **Tailwind CSS**.

## Pages

### Home

The homepage introduces the website and provides:

* Hero section
* Business introduction
* Service highlights
* Call-to-action sections
* Navigation to other pages

### About Us

Provides information about:

* Company introduction
* Mission
* Vision
* Core values
* Business approach

### Services

Displays the major services offered by the website, including:

* Web Development
* Software Solutions
* UI/UX Design
* Digital Solutions

### Contact Us

Provides:

* Contact information
* Contact form
* Form validation
* Submission status
* API integration

---

# ⚛️ React Architecture

The application uses React Router for client-side navigation.

Main routes:

```text
/           → Home
/about      → About Us
/services   → Services
/contact    → Contact Us
```

Reusable components include:

```text
Navbar
Footer
PageHeader
```

This keeps the UI consistent and makes the project easier to maintain.

---

# 🔌 API Architecture

The frontend communicates with the Express backend through Axios.

The API service is located at:

```text
client/src/services/api.js
```

The contact endpoint is:

```text
POST /api/contact
```

Example request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "subject": "Website Development",
  "message": "I would like to discuss a website project."
}
```

---

# 🖥️ Backend

The backend is built using:

* Node.js
* Express.js
* Mongoose
* MongoDB
* CORS
* dotenv

The main server file is:

```text
server/server.js
```

The backend provides the REST API used by the React frontend.

---

# 📬 Contact Form

The Contact Us form follows this flow:

```text
User
 │
 │ fills contact form
 ▼
React
 │
 │ Axios POST request
 ▼
Express API
 │
 │ validates request
 ▼
Contact Controller
 │
 ▼
Mongoose Model
 │
 ▼
MongoDB Atlas
 │
 ▼
Contact submission stored
```

The backend separates responsibilities into:

```text
Routes
   ↓
Controllers
   ↓
Models
   ↓
Database
```

This structure makes the backend easier to extend later.

---

# 🗄️ MongoDB

The project uses **MongoDB Atlas** as its cloud database.

The contact collection stores:

```text
name
email
phone
subject
message
createdAt
updatedAt
```

Mongoose automatically manages the timestamp fields through:

```js
timestamps: true
```

---

# 🔐 Environment Variables

The backend requires environment variables.

Create:

```text
server/.env
```

Example:

```env
PORT=5000

MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/mern_website?retryWrites=true&w=majority

CLIENT_URL=http://localhost:5173
```

### Important

Never commit `.env` to GitHub.

The `.gitignore` file should contain:

```text
node_modules
.env
dist
```

For production, environment variables should be configured through the hosting provider rather than committed to the repository.

---

# 💻 Local Development

## Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git
* MongoDB Atlas account

---

## 1. Clone the repository

```bash
git clone https://github.com/enkidu-technologies/mern-site.git
```

Move into the project:

```bash
cd mern-site
```

---

# 🎨 Run the Frontend

Move into the client:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL similar to:

```text
http://localhost:5173
```

---

# 🖥️ Run the Backend

Open another terminal.

Move into the server:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create:

```text
server/.env
```

Add your MongoDB Atlas connection string.

Then start the backend:

```bash
npm run dev
```

The backend normally runs on:

```text
http://localhost:5000
```

You can test the API using:

```text
http://localhost:5000/
```

Expected response:

```json
{
  "success": true,
  "message": "MERN Website API is running"
}
```

---

# 📦 Production Build

To create a production build of the React application:

```bash
cd client
npm run build
```

Vite creates:

```text
client/dist/
```

The `dist` directory contains the optimized production frontend.

To preview the production build locally:

```bash
npm run preview
```

---

# 🚀 Deployment Architecture

The project is designed to deploy the frontend and backend separately.

```text
                    GitHub Repository
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
          client/                    server/
              │                         │
              ▼                         ▼
       GitHub Actions              Hostinger
              │                         │
              ▼                         ▼
       GitHub Pages              Express API
                                        │
                                        ▼
                                 MongoDB Atlas
```

---

# 🌍 Frontend Deployment — GitHub Pages

The React frontend is deployed using **GitHub Actions**.

The workflow is located at:

```text
.github/workflows/deploy-client.yml
```

The workflow:

1. Checks out the repository
2. Sets up Node.js
3. Installs client dependencies
4. Builds the React application
5. Creates a GitHub Pages artifact
6. Deploys the artifact to GitHub Pages

The workflow runs automatically when changes are pushed to the `main` branch.

GitHub Pages should be configured with:

```text
Settings
   ↓
Pages
   ↓
Build and deployment
   ↓
Source
   ↓
GitHub Actions
```

For a repository-based GitHub Pages URL, Vite requires the corresponding repository path in the `base` configuration. For this repository:

```js
base: "/mern-site/"
```

This follows Vite's recommended GitHub Pages deployment configuration.

---

# 🔄 Continuous Deployment

Once GitHub Actions is configured, the normal workflow becomes:

```text
Edit React code
      ↓
git add .
      ↓
git commit
      ↓
git push origin main
      ↓
GitHub Actions
      ↓
npm install
      ↓
npm run build
      ↓
GitHub Pages deployment
```

This means the frontend can be updated automatically after every push to `main`.

GitHub's Pages deployment workflow is designed to automate publishing after pushes to the default branch.

---

# 🖥️ Backend Deployment — Hostinger

The backend is intended to run separately as a Node.js application on Hostinger.

The production architecture will be:

```text
React Frontend
      │
      │ HTTPS API Request
      ▼
Hostinger
Node.js + Express
      │
      │ MONGO_URI
      ▼
MongoDB Atlas
```

The backend will eventually use a production API URL similar to:

```text
https://api.example.com
```

The exact domain will depend on the production domain configuration.

---

# 🔗 Frontend ↔ Backend

During local development, the frontend communicates with:

```text
http://localhost:5000/api
```

After production deployment, the Axios base URL will be changed to the live backend API:

```text
https://api.example.com/api
```

The Express server will also use CORS to allow requests from the deployed frontend.

---

# 🛡️ Security Considerations

The project follows some basic security practices:

* MongoDB credentials are stored in environment variables
* `.env` is excluded from Git
* Database credentials are not hard-coded
* CORS is configured on the backend
* MongoDB access is handled through Mongoose
* Production secrets should be stored in the hosting provider's environment variables

Future production improvements may include:

* Helmet
* Rate limiting
* Stronger request validation
* Email validation
* Spam protection
* CAPTCHA
* API authentication where required
* Request logging
* Centralized error handling

---

# 🧪 Testing Checklist

Before considering a deployment complete, verify:

### Frontend

* [ ] Home page loads
* [ ] About page loads
* [ ] Services page loads
* [ ] Contact page loads
* [ ] Navbar works
* [ ] Mobile navigation works
* [ ] Footer links work
* [ ] Responsive layout works

### Backend

* [ ] API server starts
* [ ] MongoDB connects
* [ ] Root API responds
* [ ] Contact API accepts POST requests
* [ ] Validation works
* [ ] Errors are handled correctly

### Database

* [ ] MongoDB Atlas cluster is accessible
* [ ] Contact submissions are stored
* [ ] Data appears correctly in MongoDB

### Production

* [ ] GitHub Actions succeeds
* [ ] GitHub Pages loads
* [ ] Backend is accessible
* [ ] CORS is configured correctly
* [ ] Contact form submits successfully
* [ ] MongoDB receives production submissions

---

# 📚 Learning Goals

This project is being developed as a practical MERN Stack learning project.

The main goals are to understand:

* React fundamentals
* React Router
* Component-based architecture
* Tailwind CSS
* REST APIs
* Axios
* Express.js
* Node.js
* MongoDB
* Mongoose
* Environment variables
* CORS
* Git and GitHub
* GitHub Actions
* CI/CD
* GitHub Pages
* Cloud deployment
* Frontend/backend separation

---

# 🗺️ Future Improvements

Possible future improvements include:

### Frontend

* Advanced UI/UX
* Animations
* Dark mode
* SEO optimization
* Open Graph metadata
* Favicon and branding
* Accessibility improvements
* Loading states
* Better form validation

### Backend

* Centralized error handling
* Advanced validation
* Rate limiting
* Security middleware
* Authentication
* Admin dashboard
* Contact management API
* Email notifications

### Deployment

* Custom frontend domain
* API subdomain
* HTTPS
* Production environment variables
* Automated backend deployment
* Monitoring and logging

---

# 📌 Current Status

### Completed

* [x] MERN project structure
* [x] React + Vite frontend
* [x] React Router
* [x] Tailwind CSS
* [x] Responsive navigation
* [x] Home page
* [x] About Us page
* [x] Services page
* [x] Contact Us page
* [x] Express backend
* [x] MongoDB Atlas connection
* [x] Mongoose Contact model
* [x] Contact API
* [x] Contact form integration
* [x] Local end-to-end testing
* [x] GitHub repository
* [x] GitHub Actions deployment workflow

### In Progress

* [ ] GitHub Pages production deployment
* [ ] Hostinger backend deployment
* [ ] Production CORS configuration
* [ ] Production API integration
* [ ] Live Contact form testing

---

# 👨‍💻 Project Structure Philosophy

This project intentionally keeps the frontend and backend separate while maintaining them inside one repository.

```text
One Repository
      │
      ├── React Frontend
      │
      └── Express Backend
```

This provides a simple monorepo-style structure while allowing each application to be deployed independently.

---

# 📄 License

This project is currently intended as a learning and demonstration project.

Add an appropriate open-source license here if the project is later intended to be distributed as open-source software.

---

## ⭐ Acknowledgements

Built as a practical project for learning and implementing the **MERN Stack** with modern frontend development, REST APIs, cloud databases, GitHub Actions, and cloud deployment.

---

**Built with React ⚛️ + Node.js 🟢 + Express 🚀 + MongoDB 🍃**
