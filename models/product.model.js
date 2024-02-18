// importation de mongoose
const mongoose = require('mongoose')

// implémentation du modèle
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity : {type: Number, required: true},
    image : { type: String , required: true } 
},
{ timestamps: true }
)

// création d'un modèle à partir du schéma et importation
module.exports = mongoose.model("Product", productSchema)