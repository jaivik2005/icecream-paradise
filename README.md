# 🍦 Ice Cream Paradise

**Ice Cream Paradise** is a full-stack, real-time web application to streamline orders for an ice cream parlor. It provides a simple, beautiful interface for customers to browse the menu and order, while providing staff with live-updating dashboards for order management.

---

## 🚀 Features

* **Customer Interface (`index.html`):** Beautiful, fully responsive ice cream menu with a dynamically calculating sliding cart.
* **Kitchen Dashboard (`kitchen.html`):** Live-updating layout displaying incoming orders instantaneously as they are placed by the customers. Includes a one-click completion button.
* **Admin Panel (`admin.html`):** Includes comprehensive stats tracking (Total Orders, Pending, Revenue) and full CRUD capabilities to add or remove items from the live database menu.
* **Real-Time Data Sync:** Dashboards automatically fetch the latest menu and order data silently to prevent any UI flickering or disruptive page reloads.

---

## 🛠️ Technologies Used

* **Frontend:** HTML5, Modern CSS3 variables, Vanilla ES6 JavaScript (No heavy frameworks — pure, optimized performance).
* **Backend:** Node.js, Express.js (REST API architecture).
* **Database:** MongoDB via Mongoose ORM.

---

## 📂 Architecture & Folder Structure

We follow industry-standard separation of concerns:

```
icecream-paradise/
├── frontend/             # All client-side code
│   ├── css/              # Stylesheets
│   ├── js/               # Frontend logic and DOM handling
│   ├── index.html        # Customer entry point
│   ├── admin.html        # Admin Dashboard
│   └── kitchen.html      # Kitchen Order Screen
├── backend/              # All server-side code
│   ├── models/           # Mongoose Database Schemas (Menu, Order)
│   ├── routes/           # Express API Endpoints
│   ├── server.js         # Core application setup
│   └── db.js             # MongoDB connector
├── package.json          # Dependency tracking
└── README.md             # Project documentation
```

---

## ⚙️ How to Run Locally

### Prerequisites
* [Node.js](https://nodejs.org/en/) installed on your computer.
* A live MongoDB connection URL. 

### Instructions

1. **Clone the repository** (or download and unzip into a local folder).
2. **Open the terminal** in the folder directory.
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the server:**  
   *(Ensure you supply your MongoDB URI)*
   ```bash
   MONGO_URI="mongodb://YOUR_MONGO_URL_HERE" npm run start
   ```
5. **Open your browser and navigate to:**
   * `http://localhost:3000/` (Customer Side)
   * `http://localhost:3000/admin.html` (Admin Panel)

---

> Built with passion to deliver the best ice cream experience. 🍦