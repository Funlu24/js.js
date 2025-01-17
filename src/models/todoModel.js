const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    name: {
      //birden fazlasını isimlendirmek için kullanılır.
      type: String,
      required: true,
      trim: true, //gereksiz bpşlukları siler örn, " sdadad " basındaki ve sonundaki boşlukarı yok eder.
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      //kontrol yapıp yapmadıgına bakar true false mı diye
      type: Boolean,
      default: false,
    },
    //bir obje daha açıyoruz {}
  },
  { collection: "Todo", timestamps: true },
);

const todo = mongoose.model("Todo", todoSchema);

module.exports = todo;
