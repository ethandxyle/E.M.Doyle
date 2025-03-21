const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

console.log(process);

app.get("/", (request, response) => {
    response.send("My First Server");
});

app.post("/", () => {
});

app.delete("/", () => {
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
