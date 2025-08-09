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
exports.removeFavouriteController = exports.getFavouriteByIdController = exports.getAllFavouritesByUserIdController = exports.createFavouriteController = void 0;
const favouriteService = __importStar(require("../services/favourites.service"));
const createFavouriteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fav = yield favouriteService.createFavourite(req.body);
        res.status(201).json(fav);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to add to favourites' });
    }
});
exports.createFavouriteController = createFavouriteController;
const getAllFavouritesByUserIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const favs = yield favouriteService.getAllFavouritesByUserId(Number(req.params.userId));
        res.json(favs);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch favourites' });
    }
});
exports.getAllFavouritesByUserIdController = getAllFavouritesByUserIdController;
const getFavouriteByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fav = yield favouriteService.getFavouriteById(Number(req.params.id));
        if (!fav)
            return res.status(404).json({ error: 'Favourite not found' });
        res.json(fav);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch favourite' });
    }
});
exports.getFavouriteByIdController = getFavouriteByIdController;
const removeFavouriteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield favouriteService.deleteFavourite(Number(req.params.id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete favourite' });
    }
});
exports.removeFavouriteController = removeFavouriteController;
