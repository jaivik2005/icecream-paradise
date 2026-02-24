
# 🍦 Ice Cream Ordering & Management System

A modern **QR-based Ice Cream Ordering System** designed for restaurants and ice cream parlors.  
Customers can scan a QR code, view the menu, and place orders digitally.  
Orders are sent directly to the kitchen screen, reducing manual work and errors.

This project is ideal for **college submission**, **software engineering projects**, and **real-world use**.

---

## 📌 Project Overview

Traditional ordering systems are slow and error-prone.  
This system replaces paper menus and manual order-taking with a **digital, fast, and efficient solution**.

### Who uses the system?
- 👨‍🍳 Kitchen Staff
- 🧑‍💼 Admin / Manager
- 🧑‍🤝‍🧑 Customers
- 🧑‍🍽️ Waiter (optional)

---

## 🚀 Features

### 👥 Customer Side
- Scan QR code to open menu
- View ice cream items with images & prices
- Add items to cart
- Place order easily
- No login required

### 🧑‍🍳 Kitchen Side
- Live order display screen
- Sound alert 🔔 for new orders
- Order status:
  - Pending
  - Preparing
  - Completed
- Time taken per order tracking

### 🧑‍💼 Admin Panel
- Add / update / delete menu items
- Manage prices and availability
- View daily sales report
- View completed & pending orders
- Dashboard with statistics

### ⚙️ Extra Advanced Features
- Offline LAN mode (works without internet)
- Mobile-friendly UI
- Dark / Light theme
- Kitchen display screen
- Daily & monthly sales report

---

## 🛠️ Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Responsive Design

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Other Tools
- QR Code Generator
- REST APIs
- Local Network (LAN) Support

---

## 🧠 System Workflow

1. Customer scans QR code
2. Menu opens in browser
3. Customer selects ice cream items
4. Order is placed
5. Kitchen screen receives order instantly
6. Chef prepares the order
7. Order marked as completed
8. Admin can view sales & reports

---

## 🗂️ Database Design (ER Diagram Entities)

- Customer
- Order
- Order Items
- Menu
- Admin
- Kitchen

Relationships:
- One customer → many orders
- One order → many items
- Admin manages menu & reports

---

## 📊 Reports Generated

- Daily sales report
- Order-wise report
- Time taken per order
- Most sold ice cream items

---

## 🧪 How to Run the Project

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/ice-cream-ordering-system.git

2️⃣ Install Dependencies

cd backend
npm install

3️⃣ Start Server

npm start

4️⃣ Open Frontend
	•	Open frontend/index.html for customer
	•	Open admin.html for admin panel
	•	Open kitchen.html for kitchen screen

⸻

🎓 Academic Use

This project is suitable for:
	•	Software Engineering
	•	Web Development
	•	DBMS Mini Project
	•	Final Year / Semester Project

Includes:
	•	Real-life problem
	•	ER Diagram
	•	Modular architecture
	•	Scalable design

⸻

🌟 Future Enhancements
	•	Online payment integration
	•	Customer order history
	•	Role-based login
	•	Mobile app version
	•	AI-based demand prediction

⸻

👨‍💻 Developed By

Prajapati Jaivik Vinodbhai
B.E. Computer Engineering
Web Development | Node.js | MongoDB

⸻

📜 License

This project is for educational purposes.
You are free to modify and improve it.

⸻

✨ Digital Ordering. Faster Service. Better Experience. 🍦

---