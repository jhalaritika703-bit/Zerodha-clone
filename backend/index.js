require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser= require("body-parser");
const cors = require ("cors");
const authRoutes = require("./routes/authRoutes");


const app = express();
app.use(cors());
app.use(express.json()); // needed to read req.body

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

const { PositionsModel } = require("./models/PositionModels");
const { HoldingsModel } = require("./models/Holdingsmodel");
const  {OrdersModel} = require("./models/OrderModel")

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post('/newOrder', async(req,res)=>{
let newOrder = new OrdersModel({
   name: req.body.name,
  qty: req.body.qty,
  price:req.body.price,
  mode: req.body.mode,
});
newOrder.save();
res.send("oder saved");
});

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });