const cors = require('cors');
const express = require("express");
const con = require("./db");

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL");
});

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// app.use('/submit', require('./restQueries'));
app.use(cors());
// app.use('/submit', require('./restQueries'));

function executeQuery(query) {
  return new Promise((resolve, reject) => {
    con.query(query, (err, resp) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    });
  });
}

app.post("/student", async (req, res) => {
  try {
    const { name, gender, usn, dob, dept, fname, mname, address } = req.body;

    const query1 = `INSERT INTO students VALUES ('${name}','${gender}','${usn}','${dob}')`;
    const query2 = `INSERT INTO about VALUES ('${usn}','${fname}','${mname}','${address}')`;
    const query3 = `INSERT INTO department VALUES ('${usn}','${dept}')`;

    console.log(query1);
    console.log(query2);
    console.log(query3);

    await executeQuery(query1);
    await executeQuery(query2);
    await executeQuery(query3);

    const response = { status: true };
    res.json(response);
  } catch (error) {
    console.error(error);
    const response = { status: false };
    res.json(response);
  }
});

app.post("/marks", async (req, res) => {
  try {
    const { usn, sub_code, test1, test2, test3, average } = req.body;

    const query = `INSERT INTO marks VALUES ('${usn}','${sub_code}',${test1},${test2},${test3},${average})`

    console.log(query)

    await executeQuery(query);

    const response = { status: true };
    res.json(response);
  } catch (error) {
    console.error(error);
    const response = { status: false };
    res.json(response);
  }
});

app.post("/fetchstudent", async (req, res) => {
  try {
    const { name, usn, dept } = req.body;

    // const query = `SELECT s.name, s.gender, s.usn, d.dept FROM students s JOIN department d ON s.usn = d.usn WHERE s.name = '${name}' AND s.usn = '${usn}' AND d.dept = '${dept}'`;
    let query = `SELECT s.name, s.gender, s.usn, s.dob, d.dept FROM students s, department d WHERE s.usn = d.usn`;
    let namequery = name ? ` AND s.name LIKE '%${name}%'` : '';
    let usnquery = usn ? ` AND s.usn LIKE '%${usn}%'` : '';
    let deptquery = dept ? ` AND d.dept LIKE '%${dept}%'` : '';
    let sort = " order by (usn)"

    query += namequery + usnquery + deptquery + sort;

    // console.log(query)

    con.query(query, (err, resp) => {
      if (err) throw err;
      res.json({ resp })
    });

    // const response = { msg: "success" };
    // res.json(response);
  } catch (error) {
    console.error(error);
    const response = { msg: "Failed" };
    res.json(response);
  }
});

app.post("/fetchmarks", async (req, res) => {
  try {
    const { name, usn, sub_code } = req.body;

    let query = `SELECT s.name, s.usn, c.sub_name, m.test1, m.test2, m.test3, m.average FROM students s, subject c, marks m WHERE s.usn = m.usn AND m.sub_code = c.sub_code`;

    let namequery = name ? ` AND s.name LIKE '%${name}%'` : '';
    let usnquery = usn ? ` AND s.usn LIKE '%${usn}%'` : '';
    let deptquery = sub_code ? ` AND c.sub_code LIKE '%${sub_code}%'` : '';
    let sort = " order by (usn)"

    query += namequery + usnquery + deptquery + sort;

    // console.log(query)

    con.query(query, (err, resp) => {
      if (err) throw err;
      res.json({ resp })
    });

    // const response = { msg: "success" };
    // res.json(response);
  } catch (error) {
    console.error(error);
    const response = { msg: "Failed" };
    res.json(response);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

const test = async () => {
  con.query("select * from students", (err, res) => {
    if (err) throw err;
    console.log(res)
  })
}
// test();