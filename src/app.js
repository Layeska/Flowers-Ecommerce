const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const db = require("./utils/database");
const handleError = require("./midlewares/error.midleware");
const initModels = require("./models/initModels");

const { userRoute, productRoute, cartRoute, Orders, CategoryRoute, authRoute } = require("./routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
.then(() => console.log("*** Successful authentication! ***"))
.catch((error) => console.log(error));

db.sync({force: false})
.then(() => console.log("*** Synchronized database! ***"))
.catch((error) => console.log(error));

app.use("/api/v1", userRoute);
app.use("/api/v1", authRoute);
app.use("/api/v1", CategoryRoute);
app.use("/api/v1", productRoute);
app.use("/api/v1", cartRoute);
app.use("/api/v1", Orders);

app.get("/", (req, res) => console.log("**** Welcome at Server! ****"));

app.use(handleError);

module.exports = app;