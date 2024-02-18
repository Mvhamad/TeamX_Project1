// import mongoose
const mongoose = require('mongoose')

// connection de la base de données
mongoose.connect(
    process.env.URI, 
)
    .then(console.log("Connexion à MongoDB réussie !"))
    .catch((err) => console.error(`Erreur lors de la connexion à MongoDB : ${err}`))