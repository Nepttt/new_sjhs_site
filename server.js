const express = require("express");
const mongoClient = require("mongodb").MongoClient;

mongoClient.connect(
    "mongodb+srv://root:root123@cluster0.yoalkiv.mongodb.net/?retryWrites=true&w=majority",
    function (err, client) {
        app.listen(5050, function () {
            console.log("SJHS Website has started on port 5050");
        });
    }
);

const bodyParser = require("body-parser");
const app = express();
const { Db } = require("mongodb");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/snack", function (req, res) {
    res.sendFile(__dirname + "/snack.html");
});
