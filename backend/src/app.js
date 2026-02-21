import express from "express";
import holdingModel from "./models/holding.model.js";
import positionModel from "./models/position.model.js";
// import connectDB from "../src/config/db.js";
import cors from "cors";
import ordermodel from "./models/order.model.js";
import userModel from "./models/use.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

// app.get("/positiondata", async (req, res) => {
//   const position = [
//     {
//       product: "RNC",
//       name: "EVEREADY",
//       qty: 5,
//       avg: 310.27,
//       price: 310.35,
//       net: "+0.98%",
//       day: "-1.14%",
//       isLoss: true,
//     },
//     {
//       product: "MNC",
//       name: "JUBLFOODI",
//       qty: 3,
//       avg: 314.75,
//       price: 308.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: false,
//     },
//   ];
//   const postion = await positionModel({
//       product: "RNC",
//       name: "EVEREADY",
//       qty: 5,
//       avg: 310.27,
//       price: 310.35,
//       net: "+0.98%",
//       day: "-1.14%",
//       isLoss: true,
//     });
//   await postion.save();
//   res.send("data saved");
// });

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// user signup
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "all fields are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "user already exits" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
    });
    const newUser = await user.save();
    const token = jwt.sign({ id: user._id }, "jsduidsogsdfgsdougsdfsdfo", {
      expiresIn: "1h",
    });
    res
      .cookie("token", token)
      .status(201)
      .json({
        success: true,
        message: "user signup successfully",
        user: { name, email },
      });
  } catch (error) {
    console.log("fetcheddataError", { error: error.message });
    res.status(500).send({ success: false, message: "intrenal server error" });
  }
});

// show all holding data
app.get("/allholding", async (req, res) => {
  try {
    const allHolding = await holdingModel.find({});
    res
      .status(200)
      .send({ success: true, message: "data fatched ", allHolding });
  } catch (error) {
    console.log("fetcheddataError", { error: error.message });
    res.status(500).send({ success: false, message: "intrenal server error" });
  }
});

// show all position data

app.get("/allposition", async (req, res) => {
  try {
    const allposition = await positionModel.find({});
    res
      .status(200)
      .send({ success: true, message: "data fatched ", allposition });
  } catch (error) {
    console.log("fetcheddataError", { error: error.message });
    res.status(500).send({ success: false, message: "intrenal server error" });
  }
});

// post route to oder create meand holding order and save db

app.post("/neworder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    // if (!name || !qty || price || mode) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "All fields are required" });
    // }

    const orderSave = await ordermodel({
      name,
      qty,
      price,
      mode,
    });
    const newOderSaved = await orderSave.save();
    console.log("orderSaved:", newOderSaved);
    return res.status(201).json({
      success: true,
      message: "oder saved successfully",
      order: newOderSaved,
    });
  } catch (error) {
    console.log("neworder Error:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal serever error" });
  }
});

// show oder list

app.get("/showorder", async (req, res) => {
  try {
    const showOrder = await ordermodel.find({});
    return res.status(200).json({
      success: true,
      message: "fetched showorder successfully",
      showorder: showOrder,
    });
  } catch (error) {
    console.log("neworder Error:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal serever error" });
  }
});

export default app;
