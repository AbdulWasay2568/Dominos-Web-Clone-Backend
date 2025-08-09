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
exports.addItemToCartController = exports.removeCartController = exports.updateCartController = exports.getCartByUserIdController = exports.createCartController = exports.getAllCartsController = void 0;
const cartService = __importStar(require("../services/cart.service"));
const getAllCartsController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carts = yield cartService.getAllCarts();
    res.json({ carts });
});
exports.getAllCartsController = getAllCartsController;
const createCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cartService.createCart(req.body);
        res.status(201).json(cart);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create cart' });
    }
});
exports.createCartController = createCartController;
const getCartByUserIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cartService.getCartByUserId(Number(req.params.userId));
        if (!cart)
            return res.status(404).json({ error: 'Cart not found' });
        res.json(cart);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch cart' });
    }
});
exports.getCartByUserIdController = getCartByUserIdController;
const updateCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cartService.updateCart(Number(req.params.id), req.body);
        res.json(cart);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update cart' });
    }
});
exports.updateCartController = updateCartController;
const removeCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield cartService.deleteCart(Number(req.params.id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete cart' });
    }
});
exports.removeCartController = removeCartController;
const addItemToCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, productId, quantity, addonOptionIds } = req.body;
        const cartItem = yield cartService.addItemToCart({
            userId,
            productId,
            quantity,
            addonOptionIds
        });
        res.json(cartItem);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to add item to cart' });
    }
});
exports.addItemToCartController = addItemToCartController;
