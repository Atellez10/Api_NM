import {DataTypes, Model} from 'sequelize';

const schemacat = {
    namecat: {
        type: DataTypes.STRING,
        allowNull:false
    },

    image:{
        type: DataTypes.STRING,
        allowNull:false
    }

}
class Categoria extends Model{
    static association(){}
    static config(sequelize){
        return ({
            sequelize
        })
    }
}
export {schemacat,Categoria}