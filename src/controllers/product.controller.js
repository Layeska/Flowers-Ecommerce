const { ProductsService } = require("../services");
require("dotenv").config();

const getAll = async(req, res, next) => {
    try {
        const offset = req.query.offset ?? 0;
        const limit = req.query.limit ?? 1;

        const view = await ProductsService.getAllProduct(offset, limit);
        const aux = [];
        view.rows.forEach(data => {data.availableQty != 0 ? aux.push(data) : null});
        
        const {count, rows} = view;
        res.json({
            count,
            next: offset < count ? `${process.env.HOST_NAME}:${process.env.PORT}/api/v1${req.path}?offset=${offset+limit}&limit=${limit}` : null,
            previous: offset > 0 ? `${process.env.HOST_NAME}:${process.env.PORT}/api/v1/${req.path}?offset=${offset-limit}&limit=${limit}` : null,
            view: rows
        });

    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Check the request url or your data"
        });
    }
};

//++ look at all products when quantity > 0
const getProducts = async(req, res, next) => {
    try {
        const {userId} = req.params;
        const view = await ProductsService.showProducts(userId);
        const result =  [];
        view.forEach(data => { data.availableQty != 0 ? result.push(data) : null;});
        res.status(201).json(result);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Check the request token or url or data"
        });
    }
};

/*
! Example of product:
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

const createProduct = async(req, res, next) => {
    try {
        const newProduct = req.body;
        const  { userId } = req.params;
        newProduct.userId = Number(userId);
        const productCreated = await ProductsService.create(newProduct);
        res.status(201).json(productCreated);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Error! Check the data or endPoint"
        });
    }
};

module.exports = { getAll, getProducts, createProduct }