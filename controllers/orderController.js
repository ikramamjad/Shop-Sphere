const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/Order');
const Product = require('../models/Product');


// Create a PaymentIntent and return client_secret
exports.createPaymentIntent = async (req, res) => {
try {
const { items, currency = 'usd' } = req.body; // items: [{ productId, qty }]


// Simple amount calculation - in a real app re-calc prices server-side from DB
let amount = 0;
if (Array.isArray(items)) {
for (const it of items) {
const p = await Product.findById(it.productId);
if (!p) return res.status(400).json({ message: 'Invalid product' });
amount += Math.round(p.price * 100) * (it.qty || 1); // cents
}
} else {
return res.status(400).json({ message: 'Items required' });
}


const paymentIntent = await stripe.paymentIntents.create({
amount,
currency,
metadata: { integration_check: 'accept_a_payment' }
});


res.json({ clientSecret: paymentIntent.client_secret, paymentIntentId: paymentIntent.id });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Stripe error' });
}
};


// After client confirm