(a test is beign done)
---


# 🎥 Video Platform Backend

A fully-featured **Node.js backend** for a YouTube-style video platform. Supports **user registration**, **authentication**, **profile customization**, and **watch history**, with image uploads using Cloudinary.

---

## 🚀 Features

- ✅ User registration with avatar and cover image uploads  
- 🔐 Secure login/logout using JWT (access & refresh tokens)
- 🔄 Refresh token flow & session handling (cookie-based)
- 🖼️ Upload files using Multer & Cloudinary
- 👤 Fetch user channel profile
- 📜 Track watch history using MongoDB aggregations
- 🔄 Change password and update profile info
- 🧱 Clean, modular codebase

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT** (Access + Refresh Tokens)
- **Cloudinary** (Image upload)
- **Multer** (File handling)
- **Cookie-parser**
- **Dotenv**

---

## 📚 API Endpoints

| Method | Endpoint                             | Description                                |
|--------|--------------------------------------|--------------------------------------------|
| POST   | `/api/v1/users/register`             | Register user with avatar & cover image    |
| POST   | `/api/v1/users/login`                | Login with username or email               |
| POST   | `/api/v1/users/logout`               | Logout user (clears cookies)               |
| POST   | `/api/v1/users/refresh-token`        | Refresh access token                       |
| GET    | `/api/v1/users/current-user`         | Get currently logged-in user               |
| PATCH  | `/api/v1/users/update-account`       | Update user’s email or full name           |
| PATCH  | `/api/v1/users/avatar`               | Update avatar image                        |
| PATCH  | `/api/v1/users/cover-image`          | Update cover image                         |
| GET    | `/api/v1/users/c/:username`          | Get user channel profile by username       |
| GET    | `/api/v1/users/history`              | Get user's watch history                   |

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/video-platform-backend.git
cd video-platform-backend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root directory with the following:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

CORS_ORIGIN=http://localhost:3000
```

> 🔒 Make sure to add `.env` to your `.gitignore` file.

### 4. Run the Server

```bash
npm run dev
```

The API will be running at:
📍 `http://localhost:8000/api/v1/users`

---

## 📁 Folder Structure

```
src/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
├── index.js
└── app.js
```

---

## 🧪 Example Request

```http
POST /api/v1/users/register
Content-Type: multipart/form-data

Form Data:
- fullName: "John Doe"
- email: "john@example.com"
- username: "johndoe"
- password: "securepass"
- avatar: file
- coverImage: file
```

---

## 🙌 Acknowledgments

This project was inspired by 'Chai Aur Code' - 'Chai backend Series' building scalable backend APIs using Node.js, Express, and MongoDB.

---


