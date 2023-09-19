const sendResponse = require("../helper/helper");
const TaskModel = require("../models/TaskModel")

const TaskController = {
    getData: async (req,res)=>{
        try{
        const result = await TaskModel.find();
        if(!result){
            res.send(sendResponse(false,null,"Data Not Found")).status(404)
        }else{
            res.send(sendResponse(true,result)).status(200)
        }
      }catch(err){
        res.send(sendResponse(false,null,"Internal Server Error",err)).status(400)
      }
    },
    PostData: async (req,res)=>{
        let{TaskName,TeamMember,TaskDate,StartTime,EndTime,Board}=req.body
        try{
            let obj = {TaskName,TeamMember,TaskDate,StartTime,EndTime,Board}
            let ReqArr= ["TaskName","TeamMember","TaskDate","StartTime","EndTime","Board"]
            let errArr = [];
            ReqArr.forEach((x)=>{
                if(!obj[x]){
                    errArr.push(`Required + ${x}`)
                }
            })
            if(errArr.length>0){
                res.send(sendResponse(false,null,"Filled Required Fields",errArr)).status(404)
            }else{
                let obj = {TaskName,TeamMember,TaskDate,StartTime,EndTime,Board}
                let PostData = new TaskModel(obj)
                await PostData.save();
                if(!PostData){
                    res.send(sendResponse(false,null,"Uploading Not Done")).status(404)
                }else{
                    res.send(sendResponse(true,PostData,"Successfully Done")).status(200)
                }
            }
        }catch(err){
            res.send(sendResponse(false,null,"Internal Server Error",err)).status(500)
        }
    }
}
module.exports = TaskController