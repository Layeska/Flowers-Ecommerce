const { ProductsService } = require("../services");

const getAll = async(req, res, next) => {
    try {
        const view = await ProductsService.getAllProduct();
        const aux = [];
        view.forEach(data => {data.availableQty != 0 ? aux.push(data) : null});
        res.json(view);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Check the request url"
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
        res.json(result);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Check the request token or url"
        });
    }
};

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

//++ Crea un producto según el user que se le agrege

// hay alguna manera de que el userId sea el logeado, que sepa sin ponerlo en el link?
const createProduct = async(req, res, next) => {
    try {
        const newProduct = req.body;
        const  { userId } = req.params;
        newProduct.userId = Number(userId);
        const productCreated = await ProductsService.create(newProduct);
        res.json(productCreated);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Error! Check the data"
        });
    }
};

module.exports = { getAll, getProducts, createProduct }