const router = require("express").Router();
const todoController = require("../controllers/todoController"); //..klosore gitmek için hangi klosorde oldugunu anlalam için.

router.post("/todo", todoController.todoAdd); //ekleme için post kullanılır. /api yi başka bir dosyada verdik hepsini basına koymamak için
//1 todo controllerdaki todo adde git.

router.get("/todo", todoController.todoGet); //geti işlemi için

router.put("/todo/:id", todoController.todoUpdate); //put işlemi için  //id ye göre güncelleme işlemi

router.delete("/todo/:id", todoController.todoDelete); //delete işlemi için //id ye göre silme işlemi

module.exports = router;
