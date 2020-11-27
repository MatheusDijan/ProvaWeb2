const mongoose = require("mongoose");

const carro = new mongoose.Schema({
    modelo: {
        type: String,
        required: [true, "O campo modelo é obrigatório."],
    },
    placa: {
        type: String,
        required: [true, "O campo placa é obrigatório."],
    },
    ano: {
        type: Number,
        min: [1900, "O ano tem que ser maior que 1900"],
        required: [true, "O campo ano é obrigatório."],
    },
    criadoEm: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Carro", carro);
