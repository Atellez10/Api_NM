import {DataTypes, Model} from 'sequelize';

const schemafactura = {
       total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}

class Factura extends Model{
    static association(){}
    static config(sequelize){
        return ({
            sequelize
        })
    }
}
export {schemafactura,Factura}
