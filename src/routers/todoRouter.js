const router = require("express").Router();
const todoController = require("../controllers/todoController")//..klosore gitmek için hangi klosorde oldugunu anlalam için.    

router.post("/todo",todoController.todoAdd) //ekleme için post kullanılır. /api yi başka bir dosyada verdik hepsini basına koymamak için
//todo controllerdaki todo adde git.

module.exports = router
