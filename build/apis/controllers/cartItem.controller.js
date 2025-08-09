import * as cartItemService from '../services/cartItem.service.js';
export const createCartItemController = async (req, res) => {
    try {
        const item = await cartItemService.createCartItem(req.body);
        res.status(201).json(item);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create cart item' });
    }
};
export const getAllCartItemController = async (_req, res) => {
    try {
        const items = await cartItemService.getAllCartItems();
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch cart items' });
    }
};
export const getCartItemByIdController = async (req, res) => {
    try {
        const item = await cartItemService.getCartItemById(Number(req.params.id));
        if (!item)
            return res.status(404).json({ error: 'Cart item not found' });
        res.json(item);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch cart item' });
    }
};
export const updateCartItemController = async (req, res) => {
    try {
        const item = await cartItemService.updateCartItem(Number(req.params.id), req.body);
        res.json(item);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update cart item' });
    }
};
export const removeCartItemController = async (req, res) => {
    try {
        await cartItemService.deleteCartItem(Number(req.params.id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete cart item' });
    }
};
//# sourceMappingURL=cartItem.controller.js.map