const path = require('path');
const multer = require('multer');


    const storage = multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, path.join(__dirname, '../public/images/avatars'))
        },
        filename: (req, file, cb)=>{
            //console.log(file);
            const newFilename = 'user-' + Date.now() + path.extname(file.originalname);
            cb(null, newFilename);
        },
    
    })

    //Ejecuto multer
    const upload = multer({ storage: storage });
    
    module.exports = upload;