const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
    destination: function (_req, file, cb) {
      // const loadfile = path.join(__dirname, '../public/uploads')
      cb(null, 'Images');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })
  
const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: function(req, file, cb){
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg') {
      cb(null, true)
    } else {
      console.log("only jpg, jpeg and png file supported!");
      cb(new Error('only jpg, jpeg and png file supported!'), false)
    }
  }
 }).single('image')

module.exports = upload;