import express from "express";
import { PrismaClient } from "@prisma/client";
import user from "./routes/user/user.js";
import pkg from "cors";
// const express = require('express')
// const {PrismaClient} = require('@prisma/client')
// const user = require('./routes/user/user')
import morgan from "morgan"
import route from "./index.js"
const app = express();
const cors = pkg;

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended : true}))
const prisma = new PrismaClient();


app.use(express.json());
app.use('/', route)  

app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`)
);
