// importation de mongoose
const mongoose = require('mongoose')

// implémentation du modèle
const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    address: {type: String, required: true}
},
{ timestamps: true }
)

// création d'un modèle à partir du schéma et importation
module.exports = mongoose.model("User", userSchema)