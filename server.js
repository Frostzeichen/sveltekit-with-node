"use strict";

// IMPORTS
import express from "express";
import "dotenv/config";
import pg from "pg";
const { Pool } = pg;
import { handler } from "./build/handler.js";
import bodyParser from "body-parser";
import ejs from "ejs";

// CONSTANTS
const PORT = process.env.SERVER_PORT
const HOST = process.env.SERVER_HOST

const botanicalDB = new Pool({
    user: "postgres",
    host: "0.0.0.0",
    database: "botanical",
    password: "postgres",
    port: "5432"
});

// MIDDLEWARES
const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // I need this to parse POST input.
app.use(bodyParser.json());
app.set("view engine", "ejs");

// ROUTING
app.get("/ejs", (req, res) => {
    res.render("hello.ejs");
})

app.get("/botanical", (req, res, next) => {
    if (req.query.delete) {
        const query = "UPDATE botanical_entry SET is_deleted = true WHERE id = $1;";
        const values = [req.query.delete];
        botanicalDB.query(query, values);
    };
    next();
}, (req, res) => {
    botanicalDB.query("SELECT * FROM botanical_entry WHERE is_deleted = false", (error, results) => {
        if (error) throw error;
        res.status(200).render(
            "hello.ejs", {
                data: results.rows
            }
        );
    });
});

app.post("/inputData", (req, res) => { // Covers CREATE in CRUD
    console.log("New input logged!");
    const { commonName, scientificName, simpleDescription, technicalDescription } = req.body;
    console.log("Common Name:" + commonName);
    console.log("Scientific Name:" + commonName);
    console.log("Simple Description:" + simpleDescription);
    console.log("Technical Description:" + technicalDescription);

    try {
        const query = ` INSERT INTO botanical_entry(
            common_name,
            scientific_name,
            simple_description,
            technical_description
        )
        VALUES(
            $1,
            $2,
            $3,
            $4
        )`;
        const values = [commonName, scientificName, simpleDescription, technicalDescription];
        botanicalDB.query(
        query, values
        );
    } catch (error) {
        console.error(error)
    } finally {
        res.status(200).send("Created New Entry!");
    };
});

app.use(handler); // Keep this at the bottom because other custom routes won't work without this.

// SERVER
app.listen(PORT, HOST, () => {
    console.log(`Listening! @ port ${PORT}`);
    console.log(`Access via host ${HOST}`);
});