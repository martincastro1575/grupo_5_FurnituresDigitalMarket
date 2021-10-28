const path = require('path');
const multer = require('multer');


    const storage = multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, path.join(__dirname, '../public/images/products'))
        },
        filename: (req, file, cb)=>{
            
            const newFilename = 'prod-' + Date.now() + path.extname(file.originalname);
            //console.log("Estoy en Multer nombre Archivo " + newFilename);
            cb(null, newFilename);
        },
    
    })

    //Ejecuto multer
    const upload = multer({ storage: storage });
    
    module.exports = upload;