import * as usersService from '../services/users.service.js';
export const createUser = async (req, res) => {
    const user = await usersService.createUser(req.body);
    res.status(201).json({ user });
};
export const getUserById = async (req, res) => {
    const userId = Number(req.params.id);
    const user = await usersService.getUserById(userId);
    if (!user)
        return res.status(404).json({ message: 'User not found' });
    res.json({ user });
};
export const getAllUsers = async (_req, res) => {
    const users = await usersService.getAllUsers();
    res.json({ users });
};
export const updateUser = async (req, res) => {
    const userId = Number(req.params.id);
    const user = await usersService.updateUser(userId, req.body);
    res.json({ user });
};
export const deleteUser = async (req, res) => {
    await usersService.deleteUser(Number(req.params.id));
    res.status(204).send();
};
export const updateUserImage = async (req, res) => {
    try {
        const userId = Number(req.params.id);
        if (!req.file)
            return res.status(400).json({ error: 'No image uploaded' });
        const updatedUser = await usersService.updateUserImageService(userId, req.file);
        res.json(updatedUser);
    }
    catch (err) {
        console.error("Error updating user image:", err);
        res.status(400).json({ success: false, message: err.message });
    }
};
//# sourceMappingURL=users.controller.js.map