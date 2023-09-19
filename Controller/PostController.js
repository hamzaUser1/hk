// const sendResponse = require("../helper/helper");
// const PostModel = require("../models/PostModel")

// const PostController={
//     //GET
//     getData: async (req,res)=>{
//         try{
//             const result = await PostModel.find()
//             if(!result){
//                 res.send(sendResponse(false,null,"Data Not Found")).status(404)
//             }else{
//                 res.send(sendResponse(true,result)).status(200)
                
//             }
//         }catch(err){
//             res.send(sendResponse(false,null,"Internal Server Error",err)).status(400)
//         }
//     },
//     postData: async (req,res)=>{
//         let{Name,userName,Caption,Picture}=req.body
//         try{
//             let ErrArr = []
//             if(!Name){
//                 Err.push("Required")
//             }
//             if(!userName){
//                 Err.push("Required")
//             }
//             if(!Picture){
//                 Err.push("Required")
//             }
//             if(ErrArr>0){
//                 res.send(sendResponse(false,null,"Required Data",ErrArr)).status(404)
//             }else{
//                let obj = {Name,userName,Caption,Picture}
//                const Posts = new PostModel(obj)
//                await Posts.save()
//                if(!Posts){
//                 res.send(sendResponse(false,null,"Error")).status(404)
//                }else{
//                 res.send(sendResponse(true,Posts,"Successful")).status(200)
//                }
//             }   
//         }catch(err){
//             res.send(sendResponse(false,null,"Internal Server Error",err)).status(400)
//         }
//     }
// }
// module.exports = PostController