import {DataTypes, Model} from 'sequelize';

const schemaUsuario= {
    name_usuario:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    Apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Telefono_celular: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    Contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue:false,
    },
}

class Usuario extends Model{
    static association(){}
    static config(sequelize){
        return ({
            sequelize
        })
    }
}
export {schemaUsuario, Usuario }
