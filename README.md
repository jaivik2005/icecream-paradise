<div align="center">

# 🍦 Ice Cream Ordering & Management System

**QR-based digital ordering platform for ice cream parlors & restaurants**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: Educational](https://img.shields.io/badge/License-Educational-blueviolet?style=flat-square)](./LICENSE)

> *Digital Ordering. Faster Service. Better Experience.*

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [System Workflow](#-system-workflow)
- [Tech Stack](#️-tech-stack)
- [Database Design](#️-database-design)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Reports](#-reports)
- [Academic Use](#-academic-use)
- [Future Enhancements](#-future-enhancements)
- [Developer](#-developer)

---

## 🌟 Overview

Traditional ordering systems are slow and error-prone. This system replaces paper menus and manual order-taking with a **fast, QR-based digital solution** built for ice cream parlors and restaurants.

| Role | Description |
|------|-------------|
| 🧑‍🤝‍🧑 **Customer** | Scans QR, browses menu, places order — no login needed |
| 👨‍🍳 **Kitchen Staff** | Views live orders with sound alerts and status controls |
| 🧑‍💼 **Admin / Manager** | Manages menu, monitors orders, views sales reports |
| 🧑‍🍽️ **Waiter** *(optional)* | Assists customers or relays orders |

---

## 🚀 Features

### 👥 Customer
- Scan QR code → menu opens instantly in browser
- Browse items with images and prices
- Add to cart and place order — no account required
- Fully mobile-friendly

### 👨‍🍳 Kitchen
- Live order display (real-time updates)
- 🔔 Sound alert on new orders
- Status flow: `Pending` → `Preparing` → `Completed`
- Per-order time tracking

### 🧑‍💼 Admin
- Add / edit / delete menu items and prices
- Toggle item availability
- Dashboard with live stats
- Daily & monthly sales reports

### ⚙️ Advanced
- 🌐 Offline LAN mode — no internet required
- 🌙 Dark / Light theme
- Dedicated kitchen display screen

---

## 🧠 System Workflow
```
Customer              System               Kitchen / Admin
   │                     │                       │
   ├── Scan QR Code ─────▶│                       │
   │◀── Menu in Browser ──│                       │
   ├── Select Items ──────▶│                       │
   ├── Place Order ────────▶├── Instant Order ────▶│
   │                     │     🔔 Alert Rings      │
   │                     │     Chef Prepares       │
   │                     │◀── Mark Completed ──────│
   │                     │     Admin Views 📊      │
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML5, CSS3, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **APIs** | REST |
| **Network** | LAN (offline) support |
| **Utility** | QR Code Generator |

---

## 🗂️ Database Design
```
┌─────────────┐       ┌─────────────┐       ┌──────────────┐
│  Customer   │──1:N──│    Order    │──1:N──│  OrderItems  │
│─────────────│       │─────────────│       │──────────────│
│ customer_id │       │ order_id    │       │ item_id      │
│ name        │       │ customer_id │       │ order_id     │
│ table_no    │       │ status      │       │ menu_id      │
│ created_at  │       │ total_amt   │       │ quantity     │
└─────────────┘       │ created_at  │       │ price        │
                      └─────────────┘       └──────────────┘

┌─────────────┐       ┌─────────────┐
│    Menu     │       │    Admin    │
│─────────────│       │─────────────│
│ menu_id     │       │ admin_id    │
│ name        │       │ username    │
│ price       │       │ password    │
│ image_url   │       │ role        │
│ available   │       └─────────────┘
└─────────────┘

Admin ──manages──▶ Menu
Admin ──views────▶ Orders & Reports
```

---

## 📁 Project Structure
```
ice-cream-ordering-system/
├── backend/
│   ├── models/
│   │   ├── Customer.js
│   │   ├── Order.js
│   │   ├── MenuItem.js
│   │   └── Admin.js
│   ├── routes/
│   │   ├── menu.js
│   │   ├── orders.js
│   │   └── admin.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── index.html        ← Customer Menu
│   ├── admin.html        ← Admin Panel
│   ├── kitchen.html      ← Kitchen Display
│   ├── css/styles.css
│   └── js/
│       ├── menu.js
│       ├── cart.js
│       └── kitchen.js
├── qr/
│   └── generate-qr.js
├── .env.example
├── .gitignore
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v14+
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ice-cream-ordering-system.git
cd ice-cream-ordering-system
```

### 2. Configure Environment
```bash
cp .env.example .env
```
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/icecream_db
```

### 3. Install & Start
```bash
cd backend
npm install
npm start
```

### 4. Open Interfaces

| Interface | URL |
|-----------|-----|
| 🧑‍🤝‍🧑 Customer Menu | `http://localhost:3000/` |
| 🧑‍💼 Admin Panel | `http://localhost:3000/admin` |
| 👨‍🍳 Kitchen Screen | `http://localhost:3000/kitchen` |

### 5. Generate QR Code
```bash
node qr/generate-qr.js
```

---

## 📊 Reports

| Report | Description |
|--------|-------------|
| 📅 Daily Sales | Total orders and revenue per day |
| 📋 Order-wise | Per-order item breakdown |
| ⏱️ Time per Order | Preparation time tracking |
| 🏆 Top Items | Most ordered flavors |
| 📆 Monthly Summary | Revenue trends |

---

## 🎓 Academic Use

Suitable for: **Software Engineering · Web Development · DBMS · Final Year Project**

✅ Real-world problem · ✅ ER diagram · ✅ Modular architecture · ✅ Multi-role system

---

## 🔮 Future Enhancements

- [ ] 💳 Online payment (Razorpay / Stripe)
- [ ] 📜 Customer order history
- [ ] 🔐 Role-based login
- [ ] 📱 Mobile app (React Native)
- [ ] 🤖 AI-based demand prediction
- [ ] 🖨️ Automated receipt printing

---

## 👨‍💻 Developer

<div align="center">

**Prajapati Jaivik Vinodbhai**  
B.E. Computer Engineering

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)

</div>

---

## 📜 License

For educational use. Free to modify and improve with attribution.

---

<div align="center">Made by <b>Jaivik Prajapati</b> &nbsp;🍦</div>
