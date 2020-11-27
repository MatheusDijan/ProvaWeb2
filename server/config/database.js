const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://devwebII:devwebII@cluster0.qflpr.gcp.mongodb.net/Carro?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () =>{
    console.log("Connection established ...");
});

mongoose.connection.on("disconnected", () =>{
    console.log("Disconnected ...");
});

mongoose.connection.on("error", (error) => {
    console.log("Error occurred ...");
});

module.exports = db;