# ⭐ Ratings & Review System

A full-stack web application that allows users to view products and submit reviews with star ratings.

---

## 🔗 Live Demo (Optional)

> *Coming Soon: You can deploy the frontend on Vercel and backend on Render.*

---

## 🛠️ Tech Stack

| Frontend | Backend           | Database |
| -------- | ----------------- | -------- |
| React    | Node.js + Express | MySQL    |

---

## 📂 Project Structure

```
ratings-review-system/
├── backend/             # Node.js + Express server
│   ├── app.js           # Main server file
│   └── .env             # MySQL credentials (gitignored)
├── frontend/            # React app
│   ├── src/
│   │   └── App.js       # Main React component
│   └── .env             # API URL config (optional)
├── .gitignore
└── README.md
```

---

## 🚀 Features

* 📦 View a list of products
* ✍️ Submit star rating (1 to 5)
* 💬 Write reviews
* ❌ Prevent duplicate reviews per user-product

---

## 💻 How to Run Locally

### 🔧 Prerequisites

* Node.js
* MySQL
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/debasri-pal/ratings-review-system.git
cd ratings-review-system
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create `.env` file inside `backend/`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=reviewsystem
```

Start backend:

```bash
node app.js
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

Open: [http://localhost:3000](http://localhost:3000)

---

## 📊 Database Schema

```sql
CREATE DATABASE reviewsystem;
USE reviewsystem;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100)
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  description TEXT
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  product_id INT,
  rating INT,
  review TEXT,
  UNIQUE(user_id, product_id)
);
```

---

## 🙋‍♀️ Author

* [Debasri Pal](https://github.com/debasri-pal)
* B.Tech CSE | Netaji Subhash Engineering College

---

## 📌 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* React & Express Docs
* MySQL Workbench
* ChatGPT Guidance 💡

---

## ⭐ Like this project?

Give it a ⭐ on [GitHub](https://github.com/debasri-pal/ratings-review-system) and share your feedback!
