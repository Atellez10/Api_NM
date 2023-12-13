import express from "express";
import sequelize from "./lips/conexion.js";
import dotenv from "dotenv"


dotenv.config()



const app = express();


app.get(`/`, (req, res) => {
    res.send('hola mundo')
})

sequelize.sync({force: false}).then( async ()=> {
    app.listen(process.env.PORT_SERVER, ()=> {
        console.log(`listen on port ${process.env.PORT_SERVER}`)
    })
})






