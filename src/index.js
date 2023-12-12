import express from "express";
import sequelize from "./lips/conexion.js";

const app = express();

const port = 8000;

app.get(`/`, (req, res) => {
    res.send('hola mundo')
})

    sequelize.sync({
    force: false
}).then( async ()=> {
    app.listen(port, ()=> {
        console.log(`listen on port ${port}`)
    })
})

app.listen(port, ()=> {
    console.log(`listen on port ${port}`)
})




