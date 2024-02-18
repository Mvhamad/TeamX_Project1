// import modele
const Product = require('../models/product.model');
const path = require('path')
// display all product
module.exports.allProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if(!products){
            return res.status(404).json({msg: 'No products found'});
        } else {
            res.status(200).json({ success: true, data: products });
        }
    } catch (error) {
        res.status(500).json({ success: false, err: error })
    }
}

// get one product
module.exports.aProduct = async  (req, res) => {
    const id = req.params.id;
    try{
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({ success:false, msg:'The product with the given ID was not found.' })
        } else {
            res.status(200).json({ success: true ,data: product });
        }
    }catch(e){
        res.status(500).json({ success:false, err:e });
    }
}

// new product
module.exports.newProduct = async (req, res) => {
    try {
        const file = req.file.path; // Nom du fichier téléchargé
        const newProduct = new Product({ ...req.body, image: file }); // Ajouter le nom du fichier à l'objet du produit
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (e) {
        res.status(400).json({ success: false, msg: e });
    }
}

// edit product
module.exports.editProduct = async (req,res) =>{
    try {
        const updateProduct = req.body;
        if (req.file) {
            updateProduct.image = req.file.filename;
        }
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            updateProduct,
            { new: true }
        );
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success:false, err:error })
    }
}

// delete product
module.exports.deleteProduct = async (req,res) =>{
    const id = req.params.id;
    try{
        let product = await Product.findByIdAndDelete(id);
        if (!product) {
            res.status(404).json('The product with the given ID was not found.');
        }else{
            res.status(204).json({success : true, message:'Deleted Successfully'});
        }
    } catch(err){
        res.status(500).send('Server Error')
        console.log(err);
    }
}
