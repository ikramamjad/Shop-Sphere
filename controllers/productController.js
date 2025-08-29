const Product = require('../models/Product');


exports.createProduct = async (req, res) => {
try {
const product = await Product.create(req.body);
res.status(201).json(product);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


exports.getProducts = async (req, res) => {
try {
const products = await Product.find({});
res.json(products);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


exports.getProduct = async (req, res) => {
try {
const product = await Product.findById(req.params.id);
if (!product) return res.status(404).json({ message: 'Not found' });
res.json(product);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


exports.updateProduct = async (req, res) => {
try {
const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(updated);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


exports.deleteProduct = async (req, res) => {
try {
await Product.findByIdAndDelete(req.params.id);
res.json({ message: 'Deleted' });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};