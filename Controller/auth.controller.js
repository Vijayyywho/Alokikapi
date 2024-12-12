import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../Libb/Prismaa.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // HASH THE PASSWORD

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    // CREATE A NEW USER AND SAVE TO DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

export const login = async (loginData) => {
  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      const userData = await response.json();
      console.log("User data received:", userData);

      // Store the user ID in local storage
      localStorage.setItem("userId", userData.id);
      console.log("User ID saved to local storage:", userData.id);

      // Optionally, store the token in local storage or cookies if needed
      // Example:
      // localStorage.setItem("authToken", token); // From the response if included
    } else {
      const error = await response.json();
      console.error("Login failed:", error.message);
    }
  } catch (err) {
    console.error("An error occurred during login:", err);
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
