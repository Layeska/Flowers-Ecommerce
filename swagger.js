const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Flowers - Ecommerce",
            version: "1.0.0",
            description: "E-commerce where Florist products are presented. The functions are: Buy a product, create a user, log in and view active inventory."
        }
    },
    apis: ["./src/routes/user.routes.js", "./src/routes/products.routes.js", "./src/routes/cart.routes.js", "./src/routes/orders.routes.js",
            "./src/models/users.models.js", "./src/models/products.models.js", "./src/models/cart.models.js", "./src/models/order.models.js"]
};

const swaggerSpecifications = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecifications));
    app.get("/api/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpecifications);
    });

    console.log(`*** Documentation available at http://localhost:${port}/api/v1/docs ***`);
}

module.exports = {swaggerDocs};