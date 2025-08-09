import * as productService from '../services/product.service.js';
export const createProductController = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
};
export const getAllProductsController = async (_req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
export const getProductByIdController = async (req, res) => {
    try {
        const product = await productService.getProductById(Number(req.params.id));
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
};
export const updateProductController = async (req, res) => {
    try {
        const product = await productService.updateProduct(Number(req.params.id), req.body);
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
};
export const removeProductController = async (req, res) => {
    try {
        const deletedProduct = await productService.deleteProduct(Number(req.params.id));
        res.json(deletedProduct);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
};
export const updateProductImage = async (req, res) => {
    try {
        const productId = Number(req.params.id);
        if (!req.file)
            return res.status(400).json({ error: 'No image uploaded' });
        const updatedProduct = await productService.updateProductImageService(productId, req.file);
        res.json(updatedProduct);
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
export const createProductWithAddonsController = async (req, res) => {
    try {
        const data = JSON.parse(req.body.data);
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: 'Product image is required' });
        }
        const product = await productService.createProductWithAddonsService(data, file);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create product with addons' });
    }
};
//# sourceMappingURL=product.controller.js.map