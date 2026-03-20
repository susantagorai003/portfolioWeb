# 🚀 Personal Portfolio Website — MERN Stack

A modern, responsive full-stack portfolio website built with **MongoDB**, **Express.js**, **React.js**, and **Node.js**, styled with **Tailwind CSS**.

---

## 📋 Features

- **Hero Section** — Professional landing with name, role, profile image, and CTAs
- **About Me** — Detailed bio, interests, and career goals
- **Skills** — Technical skills (icons + progress bars) and soft skills
- **Projects** — Card grid with images, tech badges, GitHub/live links (API-driven)
- **Certificates** — Image grid with hover overlay and verification links (API-driven)
- **Achievements** — Coding platform stats — LeetCode, CodeChef, HackerRank (API-driven)
- **Extracurricular** — Timeline of activities, clubs, hackathons
- **Education** — Timeline with degree, institution, grades
- **Resume** — One-click PDF download
- **Contact** — Info cards + form that saves messages to MongoDB
- **Responsive** — Fully mobile-friendly
- **Dark Theme** — Premium dark UI with glassmorphism and gradient effects

---

## 🛠 Tech Stack

| Layer     | Technology                     |
|-----------|--------------------------------|
| Frontend  | React 18, Vite, Tailwind CSS 3 |
| Backend   | Node.js, Express.js            |
| Database  | MongoDB, Mongoose             |
| Icons     | react-icons                   |
| HTTP      | Axios                         |
| Upload    | Multer                        |

---

## 📁 Project Structure

```
Portfolio website/
├── backend/
│   ├── config/          # DB connection
│   ├── controllers/     # Route handlers
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── uploads/         # Uploaded images
│   ├── server.js        # Entry point
│   └── .env             # Environment variables
└── frontend/
    ├── public/          # Static assets
    └── src/
        ├── api/         # Axios helpers
        ├── components/  # React components (12)
        ├── data/        # Static fallback data
        ├── App.jsx      # Root component
        ├── main.jsx     # Entry point
        └── index.css    # Tailwind + custom styles
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ ([nodejs.org](https://nodejs.org))
- **MongoDB** running locally or a [MongoDB Atlas](https://www.mongodb.com/atlas) connection string

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd "Portfolio website"
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Edit `.env` to set your MongoDB connection string:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
```

Start the backend server:

```bash
npm start        # or: npm run dev (with nodemon auto-reload)
```

The API will be available at `http://localhost:5000/api`.

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🔗 API Endpoints

| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| GET    | `/api/projects`      | Get all projects      |
| POST   | `/api/projects`      | Create a project      |
| PUT    | `/api/projects/:id`  | Update a project      |
| DELETE | `/api/projects/:id`  | Delete a project      |
| GET    | `/api/certificates`  | Get all certificates  |
| POST   | `/api/certificates`  | Create a certificate  |
| GET    | `/api/achievements`  | Get all achievements  |
| POST   | `/api/achievements`  | Create an achievement |
| GET    | `/api/education`     | Get all education     |
| POST   | `/api/education`     | Create education      |
| POST   | `/api/contact`       | Submit contact form   |
| GET    | `/api/health`        | Health check          |

---

## ✏️ Customization

1. **Personal Info**: Edit `frontend/src/data/staticData.js` — update name, email, LinkedIn, GitHub, etc.
2. **Profile Image**: Replace the placeholder in `Hero.jsx` or add a `profile.jpg` to `frontend/src/assets/`
3. **Resume**: Place your PDF at `frontend/public/resume.pdf`
4. **Projects/Certificates/Achievements**: Add via API or edit `staticData.js` defaults

---

## 📦 NPM Packages

### Backend
- `express` — Web framework
- `mongoose` — MongoDB ODM
- `cors` — Cross-origin resource sharing
- `dotenv` — Environment variables
- `multer` — File upload handling

### Frontend
- `react` + `react-dom` — UI library
- `axios` — HTTP client
- `react-icons` — Icon library
- `tailwindcss` — Utility-first CSS
- `vite` — Build tool + dev server
- `@vitejs/plugin-react` — Vite React plugin
- `autoprefixer` + `postcss` — CSS processing

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
