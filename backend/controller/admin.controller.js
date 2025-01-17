const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/User"); // Import User model


// const refreshTokenOptions= {
//     expires: new Date(Date.now() + refreshTokenExpire * 24 * 60 * 60 * 1000),
//     maxAge: refreshTokenExpire * 24 * 60 * 60 * 1000,
//     httpOnly: true,
//     // sameSite: 'strict';
//     // secure: true,
//   };

// Hardcoded admin credentials
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin", // Password can be hashed for better security
};

// Admin login handler
exports.adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username matches
    if (username !== ADMIN_CREDENTIALS.username) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Check if password matches
    const isPasswordValid = await bcrypt.compare(
      password,
      bcrypt.hashSync(ADMIN_CREDENTIALS.password, 10) // Hashing hardcoded password for comparison
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Admin dashboard access (fetch all users)
exports.getAdminDashboard = async (req, res) => {
  try {
    // Decode token to verify authentication
    const token = req.cookies.token;
    // console.log(token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const decoded=jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
      }

    //   console.log(decoded);

      // Fetch all users from the database
      const users = await User.find({}, "name socialHandle images"); // Fetch specific fields only
    //   console.log(users);

      res.status(200).json({ message: "Admin dashboard data", users });
    });
  } catch (error) {
    console.error("Error accessing admin dashboard:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
