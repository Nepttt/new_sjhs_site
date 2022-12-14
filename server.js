import express from "express";
import {MongoClient as mongoClient} from "mongodb";
import bodyParser from "body-parser";



const app = express();

app.listen({ port: 5050 }, () => {
    console.log(`SJHS website has started on http://localhost:5050`);
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/snack", function (req, res) {
    res.sendFile(__dirname + "/snack.html");
});
