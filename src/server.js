const app =  require("./app");
const { swaggerDocs } = require("../swagger");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`**** Active Server in ${PORT} Port! ****`)
    swaggerDocs(app, PORT);
});