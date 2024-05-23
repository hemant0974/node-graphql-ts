const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config({});
const PORT = process.env.PORT;

const app = express();

//middlewares
app.use(cors());

//graphql
app.use("/graphql", graphqlHTTP({}));

app.listen(PORT, () => console.log(`server started at port: ${PORT}`));
