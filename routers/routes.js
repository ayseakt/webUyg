const router =require('express').Router()
const{login,register}=require('../controllers/controller')  //controler ne yapacaksa git onu gerçekleştir der 
router.post("/login",login) /*endpointlere gönderiyor. */
router.post("/register",register)
 /*poston yerine başka şeyler de kullanır  */ 
//post: veri gönfderme,
//get: veri alma ,
//put: veri günvelleme ,
//patch: veri güncelleme ,
// delete: veri silme 
module.exports=router


