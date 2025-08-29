const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema(
{
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
items: [
{
product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
qty: { type: Number, default: 1 },
price: { type: Number }
}
],
amount: { type: Number, required: true },
currency: { type: String, default: 'usd' },
paymentIntentId: { type: String },
status: { type: String, enum: ['pending', 'paid', 'failed', 'shipped'], default: 'pending' }
},
{ timestamps: true }
);


module.exports = mongoose.model('Order', orderSchema);