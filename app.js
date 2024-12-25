const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { connectDatabase } = require("./database/db");
const routes = require('./router/index');
const errorMiddleware = require('./utils/default/globalErrorHandler');
dotenv.config()
const app = express();  

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
connectDatabase();
app.use("/", routes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(errorMiddleware);