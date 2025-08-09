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
exports.removeOrderItemController = exports.updateOrderItemController = exports.getOrderItemByIdController = exports.getAllOrderItemController = exports.createOrderItemController = void 0;
const orderItemService = __importStar(require("../services/orderItem.service"));
const createOrderItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItem = yield orderItemService.createOrderItem(req.body);
        res.status(201).json(orderItem);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create order item' });
    }
});
exports.createOrderItemController = createOrderItemController;
const getAllOrderItemController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItems = yield orderItemService.getAllOrderItems();
        res.json(orderItems);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch order items' });
    }
});
exports.getAllOrderItemController = getAllOrderItemController;
const getOrderItemByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItem = yield orderItemService.getOrderItemById(Number(req.params.id));
        if (!orderItem)
            return res.status(404).json({ error: 'Order item not found' });
        res.json(orderItem);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch order item' });
    }
});
exports.getOrderItemByIdController = getOrderItemByIdController;
const updateOrderItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated = yield orderItemService.updateOrderItem(Number(req.params.id), req.body);
        res.json(updated);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update order item' });
    }
});
exports.updateOrderItemController = updateOrderItemController;
const removeOrderItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield orderItemService.deleteOrderItem(Number(req.params.id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete order item' });
    }
});
exports.removeOrderItemController = removeOrderItemController;
