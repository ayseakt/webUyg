const login=async(req,res) =>{ // bu iş sonlanmadan başkla adıma hgeçme demek 
    console.log(req.body)
    return res.json(red.body) 

}
const register=async(req,res)=>{
    console.log(req.body)
}
module.exports={login,register}

