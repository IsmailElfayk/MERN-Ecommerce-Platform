# MERN-Storefront

A scalable, production-ready e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). Features a modern user-facing storefront, a secure admin dashboard, and a robust backend API with support for Stripe, Barid Bank, and Attijariwafa payment gateways.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
  - [User Frontend](#user-frontend)
  - [Admin Panel](#admin-panel)
  - [Backend API](#backend-api)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Product Endpoints](#product-endpoints)
  - [Cart Endpoints](#cart-endpoints)
  - [Order Endpoints](#order-endpoints)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Overview

MERN-Storefront is a full-featured e-commerce platform designed for scalability and ease of use. It includes a responsive user interface for browsing and purchasing products, an admin dashboard for managing inventory and orders, and a secure backend API with MongoDB for data persistence. Payment processing is handled via Stripe, Barid Bank, and Attijariwafa.

---

## Features

### User Frontend
- **Responsive UI:** Built with React, Vite, and Tailwind CSS for a fast, modern interface.
- **Product Catalog:** Browse, search, and filter products by category or price.
- **Product Details:** View detailed product information, images, and pricing.
- **Cart Management:** Add, update, or remove items from the shopping cart.
- **Checkout Process:** Secure checkout with delivery information and payment options (Stripe, Barid Bank, Attijariwafa).
- **Order History:** View past orders and track statuses.
- **User Authentication:** Register and log in with JWT-based authentication.
- **Newsletter & Contact:** Subscribe to newsletters and submit inquiries via a contact form.

### Admin Panel
- **Dashboard:** Centralized view of products, orders, and key metrics.
- **Product Management:** Add, edit, or delete products with images, categories, and pricing.
- **Order Management:** Monitor and update order statuses.
- **Secure Access:** Admin-only authentication with JWT.
- **Notifications:** Real-time updates using React Toastify.

### Backend API
- **RESTful API:** Modular Express.js routes for scalability.
- **Database:** MongoDB with Mongoose for efficient data storage.
- **Authentication:** JWT-based user and admin authentication.
- **File Uploads:** Image uploads via Multer and Cloudinary.
- **Payment Integration:** Stripe, Barid Bank, and Attijariwafa for secure transactions.
- **Input Validation:** Robust validation and error handling.
- **CORS Support:** Enabled for cross-origin requests.

---

## Project Structure

```
mern-storefront/
├── admin/                 # Admin dashboard (React)
│   ├── src/              # Source files (components, pages, etc.)
│   ├── package.json      # Admin dependencies and scripts
│   └── vite.config.js    # Vite configuration
├── frontend/              # User-facing storefront (React)
│   ├── src/              # Source files (components, pages, etc.)
│   ├── package.json      # Frontend dependencies and scripts
│   └── vite.config.js    # Vite configuration
└── backend/               # REST API and database (Node.js, Express, MongoDB)
    ├── controllers/      # Request handlers
    ├── models/           # Mongoose schemas
    ├── routes/           # API routes
    ├── middleware/       # Authentication and error handling
    ├── config/           # Database and environment setup
    ├── server.js         # Main server entry point
    └── package.json      # Backend dependencies and scripts
```

---

## Tech Stack

- **Frontend & Admin:**
  - React
  - Vite
  - Tailwind CSS
  - Axios
  - React Router
  - React Toastify
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT
  - Multer
  - Cloudinary
  - Stripe
  - Barid Bank API
  - Attijariwafa API
- **Dev Tools:**
  - ESLint
  - Prettier
  - Nodemon

---

## Screenshots

> _To be added: Include screenshots of the storefront, product pages, cart, checkout, admin dashboard, and sample API responses._

---

## Getting Started

### Prerequisites
- **Node.js:** Version 16 or higher
- **npm:** Included with Node.js
- **MongoDB:** Local installation or cloud (e.g., MongoDB Atlas)
- **Accounts:** Cloudinary (for image uploads), Stripe, Barid Bank, and Attijariwafa (for payments)

### Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/mern-storefront.git
   cd mern-storefront
   ```

2. **Install Dependencies:**
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```
   - Admin:
     ```bash
     cd ../admin
     npm install
     ```

### Environment Variables
Create a `.env` file in the `backend/` directory with the following variables:

```
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
BARID_BANK_API_KEY=your_barid_bank_api_key
BARID_BANK_API_SECRET=your_barid_bank_api_secret
ATTIJARIWAFA_API_KEY=your_attijariwafa_api_key
ATTIJARIWAFA_API_SECRET=your_attijariwafa_api_secret
PORT=4000
```

> **Note:** Replace placeholder values with your actual credentials. Ensure sensitive information is kept secure.

### Running the Application
1. **Start the Backend:**
   ```bash
   cd backend
   npm run server
   ```
2. **Start the Frontend:**
   ```bash
   cd ../frontend
   npm run dev
   ```
3. **Start the Admin Panel:**
   ```bash
   cd ../admin
   npm run dev
   ```

The backend typically runs on `http://localhost:4000`, the frontend on `http://localhost:5173`, and the admin panel on `http://localhost:5174`.

---

## API Endpoints

### User Endpoints
- **Register User**
  ```
  POST /api/user/register
  Body: { "name": "John Doe", "email": "john@example.com", "password": "secure123" }
  Response: { "token": "<JWT_TOKEN>", "user": { ... } }
  ```
- **Login User**
  ```
  POST /api/user/login
  Body: { "email": "john@example.com", "password": "secure123" }
  Response: { "token": "<JWT_TOKEN>", "user": { ... } }
  ```
- **Get User Profile**
  ```
  GET /api/user/profile
  Headers: { "Authorization": "Bearer <JWT_TOKEN>" }
  Response: { "user": { ... } }
  ```

### Product Endpoints
- **List All Products**
  ```
  GET /api/product/list
  Response: { "products": [{ ... }, { ... }] }
  ```
- **Add Product (Admin)**
  ```
  POST /api/product/add
  Headers: { "Authorization": "Bearer <ADMIN_JWT_TOKEN>" }
  Body: { "name": "Product Name", "category": "Category", "price": 99.99, "image": [...] }
  Response: { "product": { ... } }
  ```
- **Delete Product (Admin)**
  ```
  POST /api/product/remove
  Headers: { "Authorization": "Bearer <ADMIN_JWT_TOKEN>" }
  Body: { "id": "<product_id>" }
  Response: { "message": "Product deleted" }
  ```

### Cart Endpoints
- **Get Cart**
  ```
  GET /api/cart
  Headers: { "Authorization": "Bearer <JWT_TOKEN>" }
  Response: { "cart": { ... } }
  ```
- **Add to Cart**
  ```
  POST /api/cart/add
  Headers: { "Authorization": "Bearer <JWT_TOKEN>" }
  Body: { "productId": "<product_id>", "quantity": 1 }
  Response: { "cart": { ... } }
  ```

### Order Endpoints
- **Place Order**
  ```
  POST /api/order/place
  Headers: { "Authorization": "Bearer <JWT_TOKEN>" }
  Body: { "address": { ... }, "items": [{ ... }], "amount": 99.99 }
  Response: { "order": { ... } }
  ```
- **Pay with Stripe**
  ```
  POST /api/order/stripe
  Headers: { "Authorization": "Bearer <JWT_TOKEN>" }
  Body: { "address": { ... }, "items": [{ ... }], "amount": 99.99 }
  Response: { "clientSecret": "<stripe_client_secret>" }
  ```
- **Pay with Barid Bank**
  ```
  POST /api/order/baridbank
  Headers: { "Authorization": "Bearer <JWT_TOKEN>" }
  Body: { "address": { ... }, "items": [{ ... }], "amount": 99.99 }
  Response: { "paymentDetails": { ... } }
  ```
- **Pay with Attijariwafa**
  ```
  POST /api/order/attijariwafa
  Headers: { "Authorization": "Bearer <JWT_TOKEN>" }
  Body: { "address": { ... }, "items": [{ ... }], "amount": 99.99 }
  Response: { "paymentDetails": { ... } }
  ```
- **List Orders**
  ```
  GET /api/order/list
  Headers: { "Authorization": "Bearer <JWT_TOKEN>" }
  Response: { "orders": [{ ... }, { ... }] }
  ```

> **Note:** Refer to `backend/routes/` for detailed route implementations.

---

## Deployment

- **Backend Hosting:** Deploy to Heroku, Render, or any Node.js-compatible platform.
- **Frontend & Admin Hosting:** Use Vercel, Netlify, or similar for static React apps.
- **Vercel Configuration:** The project includes a `vercel.json` file for easy deployment.
- **Environment Variables:** Ensure all `.env` variables are set in your hosting platform’s environment settings.
- **Database:** Use MongoDB Atlas for a cloud-hosted database.

---

## Troubleshooting

- **MongoDB Connection Issues:**
  - Verify `MONGODB_URI` is correct and your IP is whitelisted in MongoDB Atlas.
  - Check network connectivity and MongoDB server status.
- **CORS Errors:**
  - Ensure backend CORS settings allow requests from your frontend and admin URLs.
  - Update `CORS_ORIGIN` in `.env` if needed.
- **Cloudinary Upload Failures:**
  - Confirm Cloudinary credentials (`CLOUDINARY_CLOUD_NAME`, `API_KEY`, `API_SECRET`).
  - Check Cloudinary API limits and network issues.
- **Payment Gateway Issues:**
  - Verify Stripe, Barid Bank, and Attijariwafa API keys.
  - Use test keys in development and live keys in production.
- **Port Conflicts:**
  - Ensure ports 4000 (backend), 5173 (frontend), and 5174 (admin) are free or reconfigure in `.env` and Vite configs.

---

## Best Practices

- **Security:**
  - Use environment variables for sensitive data (API keys, secrets).
  - Never commit `.env` files to version control (use `.gitignore`).
  - Enable HTTPS in production for secure API and payment processing.
- **Code Quality:**
  - Use ESLint and Prettier for consistent code style.
  - Validate all user inputs on both frontend and backend.
- **Maintenance:**
  - Regularly update dependencies to address security vulnerabilities.
  - Monitor API usage for Cloudinary, Stripe, Barid Bank, and Attijariwafa.
- **Performance:**
  - Optimize images via Cloudinary transformations.
  - Use pagination for product and order lists to reduce load times.

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

For major changes, please open an issue first to discuss your proposal.

---

## License

This project is licensed under the ISC License.

---

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
- [Cloudinary](https://cloudinary.com/)
- [Barid Bank](https://www.albaridbank.ma/)
- [Attijariwafa Bank](https://www.attijariwafabank.com/)