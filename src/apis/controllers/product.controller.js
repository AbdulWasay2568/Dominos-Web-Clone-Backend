"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductWithAddonsController = exports.updateProductImage = exports.removeProductController = exports.updateProductController = exports.getProductByIdController = exports.getAllProductsController = exports.createProductController = void 0;
const productService = __importStar(require("../services/product.service"));
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productService.createProduct(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
});
exports.createProductController = createProductController;
const getAllProductsController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productService.getAllProducts();
        res.json(products);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllProductsController = getAllProductsController;
const getProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productService.getProductById(Number(req.params.id));
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});
exports.getProductByIdController = getProductByIdController;
const updateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productService.updateProduct(Number(req.params.id), req.body);
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
});
exports.updateProductController = updateProductController;
const removeProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield productService.deleteProduct(Number(req.params.id));
        res.json(deletedProduct);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
});
exports.removeProductController = removeProductController;
const updateProductImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = Number(req.params.id);
        if (!req.file)
            return res.status(400).json({ error: 'No image uploaded' });
        const updatedProduct = yield productService.updateProductImageService(productId, req.file);
        res.json(updatedProduct);
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});
exports.updateProductImage = updateProductImage;
const createProductWithAddonsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = JSON.parse(req.body.data);
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: 'Product image is required' });
        }
        const product = yield productService.createProductWithAddonsService(data, file);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create product with addons' });
    }
});
exports.createProductWithAddonsController = createProductWithAddonsController;
