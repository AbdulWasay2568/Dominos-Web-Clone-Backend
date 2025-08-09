import * as addonService from '../services/addons.service.js';
export const createAddonController = async (req, res) => {
    try {
        const addon = await addonService.createAddon(req.body);
        res.status(201).json(addon);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create addon' });
    }
};
export const getAllAddonController = async (_req, res) => {
    try {
        const addons = await addonService.getAllAddons();
        res.json(addons);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch addons' });
    }
};
export const getAddonByIdController = async (req, res) => {
    try {
        const addon = await addonService.getAddonById(Number(req.params.id));
        if (!addon)
            return res.status(404).json({ error: 'Addon not found' });
        res.json(addon);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch addon' });
    }
};
export const removeAddonController = async (req, res) => {
    try {
        await addonService.deleteAddon(Number(req.params.id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete addon' });
    }
};
//# sourceMappingURL=addons.controller.js.map