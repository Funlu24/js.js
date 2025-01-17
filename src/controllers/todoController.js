const todo = require("../models/todoModel"); //.. bir klasor geriye gitmek için kullanılır.

const todoAdd = async (req, res) => {
  //bekletme işlemi için async kullanılır. bekleticegimiz haber ederiz.
  // console.log("todoAdd içerisinde");
  console.log(req.body);
  try {
    const _todo = await todo.findOne({ name: req.body.name });
    if (_todo) {
      return res.status(400).json({
        success: false,
        message: "kayıt mevcut",
      });
    }

    const todoAdd = new todo(req.body); // await //bekle diyoruz zaman alacagından dolayı

    await todoAdd
      .save() //veri tabanını kaydetmek için.
      .then(() => {
        //basarılı olmussa kayıtlar geri dondur ekrana
        return res.status(201).json(todoAdd); //201 başarılı işlemlerde kullanılır. todo add direk obje başka bir objeye gerek yok
      })
      .catch((err) => {
        return res.status(400).json({
          success: false, //hata olma sebebi ile
          message: "kayıt olusturulurken hata cıktı:" + err,
        });
      });
  } catch (error) {
    //sunucu bazlı bir hata
    return res.status(500).json({
      //suucu ile alakalı düşündüğümüz için 500
      success: false,
      message: "kayıt oluşturulamadı.",
    });
  } finally {
    console.log("todoAdd fonksiyonu çalışmasını tamamladı.");
  }
};

const todoGet = async (req, res) => {
  try {
    const todoGet = await todo.find({}); //tüm verileri getirir.  //await //bekle diyoruz zaman alacagından dolayı
    return res.status(200).json({
      //200 başarılı işlemlerde kullanılır.
      success: true,
      data: todoGet,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "kayıt getirilemedi.",
    });
  }
};

const todoUpdate = async (req, res) => {
  const { id } = req.params; //id yi alıyoruz //req.params //url üzerinden gelen parametreleri almak için kullanılır.
  try {
    const todoUpdate = await todo.findByIdAndUpdate(id, req.body); //id ye göre güncelleme işlemi //await bekle diyoruz zaman alacagından
    if (todoUpdate) {
      return res.status(200).json({
        success: true,
        message: "güncelleme başarılı.",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "kayıt güncellenemedi.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "kayıt güncellenemedi.",
    });
  }
};

const todoDelete = async (req, res) => {
  const { id } = req.params; //id yi alıyoruz //req.params //url üzerinden gelen parametreleri almak için kullanılır. //id ye göre silme işlemi

  try {
    const todoDelete = await todo.findByIdAndDelete(id); //id ye göre silme işlemi //await bekle diyoruz zaman alacagından
    if (todoDelete) {
      return res.status(200).json({
        success: true,
        message: "kayıt silindi.",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "kayıt silinemedi.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false, //hata olma sebebi ile
      message: "kayıt silinemedi.", //mesajı yazdık
    });
  }
};

module.exports = {
  todoAdd,
  todoGet,
  todoUpdate,
  todoDelete,
};
