import {DataTypes, Model} from 'sequelize';

const schemaProduct = {
    name_product:{
        type: DataTypes.STRING,
        allowNull: false,
    }, 

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    price:{
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    image:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull: false,
    }
}

class Product extends Model{
    static association(){}
    static config(sequelize){
        return (sequelize)
    }

}
export {schemaProduct, Product}