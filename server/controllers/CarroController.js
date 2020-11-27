const Carro = require("../models/Carro.js");

class CarroController{
    async insert(req, res){
        var existe = await Carro.exists({"placa": req.body.placa});
        if (!existe) {
        res.status(201).json(await Carro.create(req.body));
        }
        else{
            res.status(500).json({"Message": "Carro já existe"});
        }
    }

    async get(req, res){
        res.status(200).json(await Carro.find({}));
    }
}

module.exports = new CarroController();