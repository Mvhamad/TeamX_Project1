// import modules
const express = require('express');
const router = express.Router();
const upload = require("../middlewares/multer")

// controllers
const userControllers = require('../controllers/user.controller')
const productControllers = require('../controllers/product.controller')

// users routes
router.get('/users', userControllers.getUsers);
router.get('/users/:id', userControllers.getUser);
router.post('/newUser', userControllers.newUser);
router.put('/updateUser/:id', userControllers.updateUserInfo);
router.delete('/removeUser/:id', userControllers.delUser);

// products routes
router.get('/products', productControllers.allProducts);
router.get('/products/:id', productControllers.aProduct);
router.post('/newProduct', upload, productControllers.newProduct);
router.put('/editProduct/:id', upload, productControllers.editProduct);
router.delete('/deleteProduct/:id', productControllers.deleteProduct);

// router.post('/upload', upload.single('image'), (req, res) => {
//     // Gérer le téléchargement du fichier
//     res.send('File uploaded successfully');
// });


// export router
module.exports = router