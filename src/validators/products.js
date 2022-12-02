const { check } = require("express-validator");
const { validateResult } = require("../midlewares/validateHelper");
/*
{
    "name": "Lavender",
    "description": "Lavender has the ability to relieve both physical and mental stress",
    "image": "https://th.bing.com/th/id/OIP.0nTyFKdgZ1_s04hhEHRU2wHaE4?pid=ImgDet&rs=1",
    "price": 39.89,
    "availableQty": 30,
    "categoryId": 2,
    "userId": 1
}

*/
const validateCreateProduct = [
    check("name").exists().not().isEmpty(),
    check("description").exists().not().isEmpty(),
    check("price").exists(),
    check("availableQty").exists(),
    check("categoryId").exists().isNumeric(),
    check("userId").exists().isNumeric(), 
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { validateCreateProduct };