import {Product, schemaProduct} from './models/product.model.js'

const setupModels = (sequelize) => {
    Product.init(schemaProduct, Product.config(sequelize))
}

export {setupModels}
