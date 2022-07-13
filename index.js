const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); // req.body

//routes

//GET all Students

app.get("/students", async (req, res) => {
    try {
        const newGetAll = await pool.query("SELECT * FROM student");

        res.json(newGetAll);
    } catch (err) {
        console.error(err.message);
    }
});


//GET a Student by ID

app.get("/students/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const newGetA = await pool.query("SELECT * FROM student WHERE ID = ?", [id]);

        res.json(newGetA[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//POST a student to student table

app.post("/students", async (req, res) => {
    try {
        const {id, name, dept_name, tot_cred} = req.body;
        console.log(req.body);

        const newPost = await pool.query("INSERT INTO student (ID, name, dept_name, tot_cred) VALUES (?, ?, ?, ?)",[id, name, dept_name, tot_cred]);

        res.json("New Student was added to database...");
    } catch (err) {
        console.error(err.message);
    }
});

//PUT a

//DELETE a

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});