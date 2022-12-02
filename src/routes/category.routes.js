const { Router } = require("express");
const { showCategories, createCategory, getCategoryById, deleteCategory} = require("../controllers");

const router = Router();


router.get("/category", showCategories);

router.get("/category/:id", getCategoryById);

router.post("/category", createCategory);

router.put("/category/:id", deleteCategory);

module.exports = router;