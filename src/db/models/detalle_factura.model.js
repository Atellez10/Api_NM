import {DataTypes, Model} from 'sequelize';

const schemadetalle_factura = {
    numero_factura:{
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    producto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precio_unitario: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    subtotal: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
}

class Detalle_fact extends Model{
    static association(){}
    static config(sequelize){
        return ({
            sequelize
        })
    }
}
export {schemadetalle_factura,Detalle_fact}