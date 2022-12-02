const { CategoryServices } = require("../services");

const showCategories = async(req, res, next) => {
    try {
        const categories = await CategoryServices.viewCategories();
        res.json(categories);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Check the link sent"
        });
    }
};

const getCategoryById = async(req, res, next) => {
    try {
        const {id} = req.params;
        const category = await CategoryServices.searchCategory(id);
        res.json(category);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "check the data sent"
        });
    }
};

const createCategory = async(req, res, next) => {
    try {
        const newCategory = req.body;
        await CategoryServices.create(newCategory);
        res.status(201).json({message: "Category created!"});
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Check the link or data sent "
        });
    }
};

const deleteCategory = async(req, res, next) => {
    try {
        const {id} = req.params;
        await CategoryServices.delete(id);
        res.json({message: "category successfully removed"});
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Check the link or data sent"
        });
    }
};

module.exports = { showCategories, getCategoryById, createCategory, deleteCategory };