const router = require("express").Router();
const User = require("./../models/user");
const authMiddleware = require("./../middlewares/authMiddleware");
const cloudinary = require("../cloudinary");

router.get("/get-logged-user", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });
    res.send({
      message: "User fetched successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      success: false,
    });
  }
});

router.get("/get-all-users", authMiddleware, async (req, res) => {
  try {
    const userId = req.body.userId;
    const allUsers = await User.find({ _id: { $ne: userId } });
    res.send({
      message: "All users fetched successfully",
      success: true,
      data: allUsers,
    });
  } catch (error) {
    res.status(400)._constructsend({
      message: error.message,
      success: false,
    });
  }
});

router.post("/upload-profile-pic", authMiddleware, async (req, res) => {
  try {
    const image = req.body.image;

    const uploadedImage = await cloudinary.uploader.upload(image, {
      folder: "quick-chat",
    });

    const user = await User.findByIdAndUpdate(
      {
        _id: req.body.userId,
      },
      { profilePic: uploadedImage.secure_url },
      { new: true }
    );

    res.send({
      message: "Profile picture updated successfully",
      success: true,
      data: user
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
});

module.exports = router;
