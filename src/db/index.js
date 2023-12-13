import {Product, schemaProduct} from './models/product.model.js'
import { Categoria, schemacat } from './models/categoria.model.js'
import { Usuario, schemaUsuario } from './models/usuarios.model.js'
import { Factura, schemafactura } from './models/factura.model.js'
import { Detalle_fact, schemadetalle_factura } from './models/detalle_factura.model.js'

const setupModels = (sequelize) => {
    Product.init(schemaProduct, Product.config(sequelize))
    Categoria.init(schemacat,Categoria.config(sequelize))
    Usuario.init(schemaUsuario,Usuario.config(sequelize))
    Factura.init(schemafactura,Factura.config(sequelize))
    Detalle_fact.init(schemadetalle_factura,Detalle_fact.config(sequelize))

}

export {setupModels}