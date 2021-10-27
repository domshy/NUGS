const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const path = require('path');


const jwt = require('jsonwebtoken');

const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 10;


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key: "userId",
    secret: "capstone",
    resave: false,
    saveUninitialized: false,
    cookie: {
        express: 60 * 60 * 24,
    }
}))

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "nugss"
});



app.post('/register', (req, res) => {

    const student_number = req.body.student_number
    const fullname = req.body.fullname
    const gender = req.body.gender
    const address = req.body.address
    const contact_no = req.body.contact_no
    const email = req.body.email
    const college = req.body.college
    const password = req.body.password
    const role = "student";
    const reg_student = "INSERT INTO students (student_number, fullname, gender, address, contact_no, email, college, password, role) VALUES (?,?,?,?,?,?,?,?,?)";


    bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            console.log(err);
        }
        if (email)
            db.query(reg_student, [student_number, fullname, gender, address, contact_no, email, college, hash, role], (err, result) => {
                console.log(err);
            });


        db.query("INSERT INTO users (fullname, gender, address, contact_no, email, college, password, role) VALUES (?,?,?,?,?,?,?,?)",
            [fullname, gender, address, contact_no, email, college, hash, role],
            (err, result) => {
                console.log(err);
            });

    });
});


app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
})

app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ?;",
        email,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {

                        // req.session.user = result;
                        res.send(result);
                        console.log(req.session.user);
                    } else {
                        res.send({ message: "Incorrect Username or Password!" });
                    }
                })
            } else {
                res.send({ message: "Please enter Username and Password!" });
            }
        }
    );
});


//registering faculty
app.post('/accountmanagement/create', (req, res) => {
    const ga_faculty_id = req.body.ga_faculty_id
    const fullname = req.body.fullname
    const gender = req.body.gender
    const address = req.body.address
    const contact_no = req.body.contact_no
    const email = req.body.email
    const course_handle = req.body.course_handle
    const password = req.body.password
    const role = "guidance_associate";
    const reg_faculty = "INSERT INTO guidance_associate (ga_faculty_id, fullname, gender, address, contact_no, email, course_handle, password, role) VALUES (?,?,?,?,?,?,?,?,?)";

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        if (email)
            db.query(reg_faculty, [ga_faculty_id, fullname, gender, address, contact_no, email, college, hash, role], (err, result) => {
                [fullname, gender, address, contact_no, email, college, hash, role],
                    console.log(err);
            });

        db.query("INSERT INTO users (fullname, gender, address, contact_no, email, college, password, role) VALUES (?,?,?,?,?,?,?,?)",
            [fullname, gender, address, contact_no, email, college, hash, role],
            (err, result) => {
                console.log(err);
            });

        db.query("INSERT INTO faculty_members (ga_faculty_id, fullname, gender, address, contact_no, email, course_handle, password, role) VALUES (?,?,?,?,?,?,?,?,?)",
            [ga_faculty_id, fullname, gender, address, contact_no, email, college, hash, role],
            (err, result) => {
                console.log(err);
            });
    });
});

//faculty get
app.get("/accountmanagement/get", (req, res) => {
    const sqlSelect = "SELECT * from faculty_members"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//goodmoral get
app.get("/services/goodmoral/get", (req, res) => {
    const sqlSelect = "Select * from goodmoral_req"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//insert goodmoral 
app.post("/services/goodmoral/create", (req, res) => {
    const purpose_req = req.body.purpose_req
    const number_copy = req.body.number_copy
    const special_instruction = req.body.special_instruction
    const status = "pending"
    if (!purpose_req == "" || !purpose_req == "") {
        db.query("INSERT INTO goodmoral_req (purpose_req, number_copy, special_instruction, status) VALUES(?,?,?,?)",
            [purpose_req, number_copy, special_instruction, status],
            (err, result) => {
                console.log(err);
            }
        )
    };
});


//announcement get
app.get("/announcement/get", (req, res) => {
    const sqlSelect = "SELECT * FROM announcement"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//insert announcement
app.post("/announcement/create", (req, res) => {
    const announcement_title = req.body.announcement_title
    const announcement_description = req.body.announcement_description
    if (!announcement_title == "" || !announcement_description == "") {
        db.query("INSERT INTO announcement (announcement_title, announcement_description) VALUES (?,?)",
            [announcement_title, announcement_description],
            (err, result) => {
                console.log(err);
            }
        )
    };
});


const port = process.env.PORT || 3001;


if(process.env.NODE_ENV === "production"){
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}

app.listen(port, (err) => {
    if(err) return console.log(err);
    console.log('running on port: ', port );
})