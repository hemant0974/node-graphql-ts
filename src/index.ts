const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config({});
const schema = require("./schema");
const PORT = process.env.PORT;

const app = express();

//middlewares
app.use(cors());

//graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`server started at port: ${PORT}`));
