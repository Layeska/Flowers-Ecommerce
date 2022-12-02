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

      //  res.status(201).json({message: "successfully added"});

    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: ""
        });
    }
};


const getCart = async(req, res, next) => {
    try {
        const {userId} = req.params;
        const view = await CartServices.getAll(userId);
        res.json(view);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: ""
        });
    }
};

module.exports = { addCart, getCart };