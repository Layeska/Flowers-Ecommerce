const { CartServices } = require("../services");

const addCart = async(req, res, next) => {
    try {
        const { productId, quantity } = req.body;
        const userId = Number(req.params.userId);

        const Created = {userId, productId, quantity};
        console.log(Created.quantity);
        if(Created.quantity > 0 ) {
            const truthy = await CartServices.create(Created);

            if(truthy) {
                res.status(201).json({message: "Product in cart add!"});
            } else {
                res.status(400).json({message: "Product does not exist in the DB"});
            }
        } else {
            res.status(400).json({message: "This quantity cannot be purchased"});
        }
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Verify the information on the petition"
        });
    }
};


const getCart = async(req, res, next) => {
    try {
        const {userId} = req.params;
        const offset = Number(req.query.offset ?? 0);
        const limit = Number(req.query.limit ?? 1);

        const view = await CartServices.getAll(userId, offset, limit);
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
            message: "Oops, an error has happened"
        });
    }
};

module.exports = { addCart, getCart };