const cors = require("cors");
const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");

const PORT = process.env.port || 5555;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "bd",
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
    }),
);

app.post("/delete", (req, res) => {
    const id = req.body.boardIdList;

    const sqlQuery = `DELETE FROM BOARD WHERE ID IN  (${id})`;
    db.query(sqlQuery, [id], (err, result) => {
        console.log(err);
        res.send(result);
    });
});

app.post("/detail", (req, res) => {
    const id = req.body.id;
    console.log("detail, id=" + id);
    const sqlQuery = "SELECT ID, TITLE, CONTENT FROM BOARD WHERE ID = ?";
    db.query(sqlQuery, [id], (err, result) => {
        res.send(result);
    });
});

app.post("/insert", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;

    const sqlQuery = "INSERT INTO BOARD (TITLE, CONTENT, REGISTER_ID) VALUES (?,?,'darae')";
    db.query(sqlQuery, [title, content], (err, result) => {
        res.send(result);
    });
});

app.post("/update", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;

    const sqlQuery = "UPDATE BOARD SET TITLE = ?, CONTENT = ?, UPDATER_ID = 'datae' WHERE ID = ?;";
    db.query(sqlQuery, [title, content, id], (err, result) => {
        res.send(result);
    });
});

app.get("/list", (req, res) => {
    const sqlQuery =
        "SELECT ID, TITLE, REGISTER_ID, DATE_FORMAT(REGISTER_DATE, '%Y-%m-%d') AS REGISTER_DATE FROM BOARD";
    db.query(sqlQuery, (err, result) => {
        res.send(result);
    });
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
