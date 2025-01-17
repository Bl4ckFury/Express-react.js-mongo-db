import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
    
import {registerValidation} from './validation/auth.js';
import { validationResult } from "express-validator";

mongoose
    .connect("mongodb+srv://icebob99:<db_password>@cluster0.vuwrx.mongodb.net/")
    .then(() => console.log('DB ok'))
    .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.post('/auth/register', registerValidation ,(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    res.json({
        success: true
    });
});

app.listen(4000, (err) => {
    if(err) {
        return console.log();
    }
    console.log("Server working");
});