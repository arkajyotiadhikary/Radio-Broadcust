const express = require("express");
const config = require("./config");

const port = config.PORT;

const app = express();

app.listen(port, () => {
    console.log(`server is running at port: ${port}`);
});
