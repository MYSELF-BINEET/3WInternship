const User = require("../model/User");

// Handle user submission
exports.createUser = async (req, res) => {
  try {
    const { name, socialHandle } = req.body;
    const imagePaths = req.files.map((file) => file.path); 

    const newUser = new User({ name, socialHandle, images: imagePaths });
    await newUser.save();

    res.status(201).json({ message: "User submission saved successfully!" });
  } catch (error) {
    console.error("Error saving user submission:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
