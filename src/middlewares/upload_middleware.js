const upload = require ("multer")
const path = require ("path")


//PEGO STORAGE DESDE LA DOCUMENTACIONDE MULTER
const storage = upload.diskStorage({ // contiene un objeto con toda la informacion relacionada al almacenamiento y nombre del archico a subir
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../public/img"))
    },
    filename: function (req, file, cb) {
  /*     cb(null, file.fieldname + '-' + Date.now()) */
     cb(null, file.originalname) 
    }
  })
  
module.exports = upload ({storage: storage});