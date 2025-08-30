ShopSphere — Node.js + Express Backend
ShopSphere is a sample e-commerce backend built with Node.js, Express, MongoDB, JWT authentication, and Stripe PaymentIntents. It provides user authentication, product management, and order/payment functionality.
✨ Features
•	User authentication (Register/Login) with JWT
•	Role-based access (Admin can manage products)
•	CRUD APIs for Products
•	Secure payment flow with Stripe PaymentIntents
•	Order creation after successful payment
•	MongoDB (Mongoose ODM)
•	Middleware for auth, admin checks, and rate-limiting
•	Seed script for test products
📂 Project Structure
shopsphere/
├─ .env.example
├─ package.json
├─ index.js
├─ config/
│  └─ db.js
├─ models/
│  ├─ User.js
│  ├─ Product.js
│  └─ Order.js
├─ middleware/
│  └─ auth.js
├─ controllers/
│  ├─ authController.js
│  ├─ productController.js
│  └─ orderController.js
├─ routes/
│  ├─ auth.js
│  ├─ products.js
│  └─ orders.js
├─ utils/
│  └─ seed.js
└─ README.md
🚀 Quick Start
1.	Clone repo & install dependencies:
2.	git clone https://github.com/<your-username>/shopsphere.git
cd shopsphere
npm install
3.	Create a .env file (see .env.example) and fill values:
4.	PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shopsphere
JWT_SECRET=your_jwt_secret_here
STRIPE_SECRET_KEY=sk_test_...
CLIENT_URL=http://localhost:3000
5.	Start dev server:
npm run dev

Server runs at http://localhost:5000.
🔑 API Endpoints
Auth
•	POST /api/auth/register → Register new user
•	POST /api/auth/login → Login and get JWT
Products
•	GET /api/products → List all products
•	GET /api/products/:id → Get single product
•	POST /api/products → Create product (Admin only)
•	PUT /api/products/:id → Update product (Admin only)
•	DELETE /api/products/:id → Delete product (Admin only)
Orders
•	POST /api/orders/create-payment-intent → Create Stripe PaymentIntent (protected)
•	POST /api/orders/record → Record order after payment (protected)
🧪 Seeding Products
Run the seed script to populate some demo products:

node utils/seed.js
💳 Testing Payments
Use Stripe test cards. Example Visa: 4242 4242 4242 4242, any future expiry, any CVC.
⚙️ Deployment Notes
•	Use HTTPS in production
•	Store secrets securely (never commit .env)
•	Prefer Stripe webhooks to confirm payments instead of client signals
•	Can be containerized with Docker / deployed to Render, Railway, AWS, etc.
