import mongoose from "mongoose";
const connectstring =
  "mongodb+srv://fizikperformans24:VX2dusdhHLkc5mpw@cluster0.sjz1x.mongodb.net/volkan";
mongoose
  .connect(connectstring, {})
  .then(() => {
    console.log("connected DB succesfull:");
  })
  .catch((err) => {
    console.log("connected DB failed:" + err);
  });
