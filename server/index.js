const express = require("express");
const app = express();
const graphqlHTTP = require("express-graphql")
const schema = require("./Schema/schema")
const port = process.env.PORT || 4000

app.use("/graphql", graphqlHTTP({
schema: schema,
graphiql: true
}))

app.listen(port, ()=>{
    console.log("now listening for requests on port 4000")
});


