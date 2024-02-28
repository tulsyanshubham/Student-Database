const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "abcd1234",
    database: "studentsdb",
});

module.exports = con;