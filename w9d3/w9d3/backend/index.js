const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
const multer = require("multer");
const cors = require("cors");
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route("/file").post(upload.single("avatar"), (req, res) => {
  console.log(req.file);
  // save file on server
  // save file on third party server
  // save file on buckets
  res.json({
    message: " File Api",
  });
});

app.use(router);
app.listen(3000, () => {
  console.log("server started to receive files");
});
