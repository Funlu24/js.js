const todo =require("../models/todoModel")//.. bir klasor geriye gitmek için kullanılır.

const todoAdd = async(req,res)=>{ //bekletme işlemi için async kullanılır. bekleticegimiz haber ederiz.
   // console.log("todoAdd içerisinde");
   console.log(req.body);
try {
    const todoAdd =new todo(req.body); // await //bekle diyoruz zaman alacagından dolayı
    
    await todoAdd.save() //veri tabanını kaydetmek için.
        .then(()=>{   //basarılı olmussa kayıtlar geri dondur ekrana
         return res.status(201).json(todoAdd)  //201 başarılı işlemlerde kullanılır. todo add direk obje başka bir objeye gerek yok
    })
    .catch((err)=>{
        return res.status(400).json({
            success: false,  //hata olma sebebi ile
            message:"kayıt olusturulurken hata cıktı:" +err
        })
    });



} catch (error) {   //sunucu bazlı bir hata
    return(res.status(500)).json({    //suucu ile alakalı düşündüğümüz için 500
     success:false,
     message:"kayıt oluşturulamadı."
    })  
}

    } 

    module.exports = {
        todoAdd
    }