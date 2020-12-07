import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

import { configs } from "./config";
import { sequelize } from "./helpers/db/database";
import { Sequelize } from "sequelize";
const routes = require('./routes/router');

// consider using ENV variables instead
const port = process.env.PORT || configs.app.port;

// consider using cors configs
app.use(cors());

// Parse application/json req bodies
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded req bodies
app.use(bodyParser.urlencoded({extended: true}));

// Initialize API routes
app.use('/', routes);

// Initialize a DB connection
sequelize.sync().then((result: Sequelize) => {
    app.listen(port, () => console.log(`Server started on port ${port}`));
}).catch((e: any) => {
    console.log("Cannot connect to a DB -> ", e);
});


