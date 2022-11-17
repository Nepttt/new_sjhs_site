const express = require("express");
const app = express();
app.use(express.json());

app.listen(5050, function () {
    console.log("SJHS Website has started on port 5050");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/snack.html", function (req, res) {
    res.sendFile(__dirname + "/snack.html");
});
