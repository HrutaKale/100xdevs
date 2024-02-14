const express = require("express")
const app = express();
app.get("/", ( req, res) => {
    console.log ("hello");
});
app.listen(3000 ,() =>
console.log ("listen the port 3000")
);
