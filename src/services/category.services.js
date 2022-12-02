const { Categories } = require("../models");

class CategoryServices {

    static async searchCategory(id) {
        try {
            return Categories.findByPk(id);
        } catch(error) { throw error; }
    }

    static async viewCategories() {
        try {
            return await Categories.findAndCountAll();
        } catch(error) { throw error; }
    }

    static async create(newCategory) {
        try {
            return await Categories.create(newCategory);
        } catch(error) { throw error; }
    }

    static async delete(id) {
        try {
            return await Categories.destroy({where: {id: id}});
        } catch(error) { throw error; }
    }
};

module.exports = CategoryServices;