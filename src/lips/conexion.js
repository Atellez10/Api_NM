import { Sequelize } from "sequelize";
import {setupModels} from "../db/index.js";
import dotenv from "dotenv"

dotenv.config()

const URL = `mysql://${process.env.USER_DB}:@${process.env.LOCALHOST}:${process.env.PORT_DB}/${process.env.NAME_DB}`



const sequelize= new Sequelize (URL,{
    dialect: 'mysql',
    logging: false
});

setupModels (sequelize)


export default sequelize