import * as orderService from '../services/order.service.js';
export const createOrderController = async (req, res) => {
    try {
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create order' });
    }
};
export const getAllOrderController = async (_req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};
export const getOrderByIdController = async (req, res) => {
    try {
        const order = await orderService.getOrderById(Number(req.params.id));
        if (!order)
            return res.status(404).json({ error: 'Order not found' });
        res.json(order);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch order' });
    }
};
export const updateOrderController = async (req, res) => {
    try {
        const order = await orderService.updateOrder(Number(req.params.id), req.body);
        res.json(order);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update order' });
    }
};
export const removeOrderController = async (req, res) => {
    try {
        await orderService.deleteOrder(Number(req.params.id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete order' });
    }
};
export const getOrderByUserIdController = async (req, res) => {
    try {
        const orders = await orderService.getOrdersByUserId(Number(req.params.id));
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};
//# sourceMappingURL=order.controller.js.map