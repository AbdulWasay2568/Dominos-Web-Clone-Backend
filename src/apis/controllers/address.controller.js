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
exports.removeAddressController = exports.updateAddressController = exports.getAddressesByUserIdController = exports.getAddressByIdController = exports.getAllAddressController = exports.createAddressController = void 0;
const addressService = __importStar(require("../services/address.service"));
const createAddressController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = yield addressService.createAddress(req.body);
        res.status(201).json(address);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create address' });
    }
});
exports.createAddressController = createAddressController;
const getAllAddressController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addresses = yield addressService.getAllAddresses();
        res.json(addresses);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch addresses' });
    }
});
exports.getAllAddressController = getAllAddressController;
const getAddressByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = yield addressService.getAddressById(Number(req.params.id));
        if (!address)
            return res.status(404).json({ error: 'Address not found' });
        res.json(address);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch address' });
    }
});
exports.getAddressByIdController = getAddressByIdController;
const getAddressesByUserIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addresses = yield addressService.getAddressesByUserId(Number(req.params.userId));
        res.json(addresses);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch address' });
    }
});
exports.getAddressesByUserIdController = getAddressesByUserIdController;
const updateAddressController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = yield addressService.updateAddress(Number(req.params.id), req.body);
        res.json(address);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update address' });
    }
});
exports.updateAddressController = updateAddressController;
const removeAddressController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield addressService.deleteAddress(Number(req.params.id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete address' });
    }
});
exports.removeAddressController = removeAddressController;
