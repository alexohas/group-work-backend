require('dotenv').config()
const express = require("express");
const app = express();
const methodOverride = require("method-override");
var cors = require('cors')

      app.use(cors("*"))

    // app.use(express.urlencoded({ extended: true }));
    app.use(methodOverride("_method"));
    app.use(express.json()) 
    app.use (express.urlencoded({extended: false}))
    //SHOW LESSONS
    app.get("/lessons", async (req, res) => {
        const lessons = [
            { topic: "Math", location: "London", price: "100" },
            { topic: "Math", location: "Liverpool", price: "80" },
            { topic: "Math", location: "Oxford", price: "90" },
            {topic: "Math", location: "Bristol", price: "120"}
        ]
        res.json({ lessons });
    });


    //SHOW USER
    app.get("/user", async (req, res) => {
        res.json({ email: "jane.doe@mailinator.com", password: "Chiropractor" });
    });

    app.listen(process.env.PORT, () => {
        console.log("App is listening at port "+process.env.PORT);
    });
