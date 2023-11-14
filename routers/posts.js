const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts");

router.get("/", postController.index);
router.post("/", postController.store);
router.get("/create", postController.create);
router.get("/:slug", postController.show);
router.get("/:slug/download", postController.download);

module.exports = router;
