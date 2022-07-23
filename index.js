const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); // req.body

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
        const newGetA = await pool.query("SELECT * FROM student WHERE ID=?", [id]);

        res.json(newGetA[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//POST a student to student table

app.post("/students", async (req, res) => {
    try {
        const {ID, name, dept_name, tot_cred} = req.body;
        console.log(req.body);

        const newPost = await pool.query("INSERT INTO student (ID, name, dept_name, tot_cred) VALUES (?, ?, ?, ?)",[ID, name, dept_name, tot_cred]);

        res.json("New Student was added to database...");
    } catch (err) {
        console.error(err.message);
    }
});

//PUT a 

app.put("/students/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {IDz, name, dept_name, tot_cred} = req.body;
        console.log(req.body);

        const newPut = await pool.query("UPDATE student SET ID=?, name=?, dept_name=?, tot_cred=? WHERE ID=?",[id, IDz, name, dept_name, tot_cred]);

        res.json("Student was updated...");
    } catch (err) {
        console.error(err.message);
    }
});

//DELETE a

app.delete("/students/:id", async (req, res) => {
    try {
        const {id} = req.params;

        const newDelete = await pool.query("DELETE FROM student WHERE ID=?",[id]);

        res.json("Student was deleted from university...");
    } catch (err) {
        console.error(err.message);
    }
});

// Listening to port 5000

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});