import * as categoryService from '../services/category.service.js';
export const createCategoryCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create category' });
    }
};
export const getAllCategoryCategory = async (_req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.json(categories);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
};
export const getCategoryByIdCategory = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(Number(req.params.id));
        if (!category)
            return res.status(404).json({ error: 'Category not found' });
        res.json(category);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch category' });
    }
};
export const updateCategoryCategory = async (req, res) => {
    try {
        const category = await categoryService.updateCategory(Number(req.params.id), req.body);
        res.json(category);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update category' });
    }
};
export const removeCategoryCategory = async (req, res) => {
    try {
        await categoryService.deleteCategory(Number(req.params.id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete category' });
    }
};
//# sourceMappingURL=category.controller.js.map