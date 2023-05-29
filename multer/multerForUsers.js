const multer = require('multer')
const fs=require("fs")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(__dirname + '/../uploads')) {
            fs.mkdirSync(__dirname + '/../uploads');
        }
        if (!fs.existsSync(__dirname + '/../uploads/users')) {
            fs.mkdirSync(__dirname + '/../uploads/users');
        }
        
        
        if (req.method === 'POST') {
            cb(null, __dirname + '/../uploads/users')
        }
      
    },
    filename: function (req, file, cb) {
        if (req.method === 'POST') {
            cb(null, new Date().getTime().toString() + file.originalname)
        }
    }
});

let fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    fileFilter: fileFilter,
    storage: storage
});

module.exports = upload;

        // const multer = require('multer')

        // const storage = multer.diskStorage({
        //     destination: function (req, file, cb) {
        //     cb(null, './uploads/usersPhotos');
        //     },
        //     filename: function (req, file, cb) {
        //     cb(null, new Date().getTime() + '-' + file.originalname);
        //     }
        // });
        
        // const upload = multer({ storage: storage });

        // module.exports = upload;

// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './photosForUsers');
//     },
//     filename: (req, file, cb) => {
//         console.log(file);
//         cb(null, 'userPhoto'+file.originalname);
//     }
// })

// const uploadUserPhoto = multer({
//     storage: storage
// })

// module.exports = uploadUserPhoto;