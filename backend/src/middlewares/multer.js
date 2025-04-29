import multer from 'multer';
import path from 'path';


// Set up storage engine for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set the destination folder for uploaded files
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // Generate a unique filename
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]); // Set the filename with the original extension
    }
});


// Optional: filter and limits (customize as needed)
const upload = multer({
    storage,
    // limits: {
    //   fileSize: 2 * 1024 * 1024, // 2MB
    // },
  });
  


//middleware that attaches the uploaded file to request object
const uploadSingle = (fieldName) => {
    return (req, res, next) => {
      const handler = upload.single(fieldName);
      handler(req, res, (err)=> {
        if (err instanceof multer.MulterError) {
            console.log(err);
          return res.status(400).json({ error: err.message ,success: false });
        } else if (err) {
            console.log(err);
          return res.status(500).json({ error: err.message,success: false });
        }
        // file is now available in req.file
        next();
      });
    };
  };



  
const uploadMultiple = (fieldName, maxCount = 5) => {
    return (req, res, next) => {
      const handler = upload.array(fieldName, maxCount);
      handler(req, res, (err) => {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: err.message });
        } else if (err) {
          return res.status(500).json({ error: err.message });
        }
        // files are now available in req.files
        next();
      });
    };
  };


  export {uploadMultiple, uploadSingle};