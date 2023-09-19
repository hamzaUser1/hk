const sendResponse = require("../helper/helper")
const TeamModel = require("../models/TeamModel")

const TeamController = {
    getData: async (req,res)=>{
        try{
            const result = await TeamModel.find()
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
        let{TeamLogo,TeamName,TeamMember,TeamType}=req.body
        try{
            let obj = {TeamLogo,TeamName,TeamMember,TeamType}
            let ReqArr=["TeamLogo","TeamName","TeamMember","TeamType"]
            let errArr = []
            ReqArr.forEach((x)=>{
                if(!obj[x]){
                    errArr.push(`Required + ${x}`)
                }
            })
            if(errArr.length>0){
                res.send(sendResponse(false,null,"Required Fields First",errArr)).status(404)
            }else{
                let obj = {TeamLogo,TeamName,TeamMember,TeamType}
                let PostData = new TeamModel(obj)
                await PostData.save()
                if(!PostData){
                    res.send(sendResponse(false,null,"Not Uploaded")).status(404)
                }else{
                    res.send(true,PostData,"Uploaded").status(200)
                }
            }
        }catch(err){
            res.send(sendResponse(false,null,"Internal Server Error",err)).status(500)
        }
    }
}
module.exports = TeamController;