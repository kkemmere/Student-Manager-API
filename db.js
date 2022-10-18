//Using npm promise wrapper
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    user: "root",
    password: "root",
    host: "localhost",
    port: 3306,
    database: "university"
});

pool.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected to university!");
});

module.exports = pool;