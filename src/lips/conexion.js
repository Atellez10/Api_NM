import { Sequelize } from "sequelize";
import {setupModels} from '../db/index';

const URL = 'mysql://root:@localhost:3306/nm_proyecto'

const sequelize= new Sequelize (URL,{
    dialect: 'mysql',
    logging: false
});

setupModels (sequelize)


export default sequelize