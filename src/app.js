const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "Post created successfully",
    post,
  });
});


// app.post("/create-post", upload.single("image"), async (req, res) => {

//     console.log("BODY:", req.body);
//     console.log("FILE:", req.file ? "FILE RECEIVED" : "NO FILE");

//     const result = await uploadFile(req.file.buffer);

//     console.log("IMAGEKIT RESULT:", result.url);

//     const post = await postModel.create({
//         image: result.url,
//         caption: req.body.caption
//     });

//     console.log("MONGODB POST:", post);

//     return res.status(201).json({
//         message: "Post created successfully",
//         post
//     });
// });

module.exports = app;
