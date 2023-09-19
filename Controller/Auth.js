const sendResponse = require("../helper/helper");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const AuthControllers = {

    GetUsers: async (req, res) => {
        try {
            const result = await UserModel.find()
            if (!result) {
                res.send(sendResponse(false, null, "Data Not Found")).status(404)
            } else {
                res.send(sendResponse(true, result)).status(200)
            }
        } catch (err) {
            res.send(sendResponse(false, null, "Internal Server Error", err)).status(400)
        }
    },

    Login: async (req, res) => {
        const { email, password } = req.body;
        const obj = { email, password }
        let ReqArr = ["email", "password"];
        let errArr = [];
        ReqArr.forEach((x) => {
            if (!obj[x]) {
                errArr.push(x);
            }
        });
        if (errArr.length > 0) {
            res.send(sendResponse(false, null, "Please Filled the required Field First", errArr)).status(400)
        } else {
            let result = await UserModel.findOne({ email });
            if (result) {
                let isConfirm = await bcrypt.compare(obj.password, result.password);
                if (isConfirm) {
                    const token = jwt.sign({ ...result }, process.env.SECURE_KEY, {
                        expiresIn: "24h"
                    });
                    res.send(sendResponse(true, { user: result, token }, "Login SuccessFul"));
                } else {
                    res.send(sendResponse(false, null, "Credential Error"));
                }
            } else {
                res.send(sendResponse(false, null, "User Doesn't Exist")).status(404);
            }
        }
    },
    SignUp: async (req, res) => {
        const { userName, email, password } = req.body;
        const obj = { userName, email, password };
        let ReqArr = ["userName", "email", "password"];
        let errArr = [];
        ReqArr.forEach((x) => {
            if (!obj[x]) {
                errArr.push(x);
            }
        });
        if (errArr.length > 0) {
            res.send(sendResponse(false, null, "Filled Required Field First", errArr)).status(400);
        } else {
            let hashPassword = await bcrypt.hash(obj.password, 10);
            obj.password = hashPassword;

            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                res.send(sendResponse(false, null, "User Already Exist")).status(401);
            } else {
                UserModel.create(obj).then((result) => {
                    res.send(sendResponse(true, result, "User Saved Successfully")).status(200);
                }).catch((err) => {
                    res.send(sendResponse(false, err, "Internal Server Error")).status(400)
                })
            }
        }
    }
};
module.exports = AuthControllers;

//         UserModel.create(obj)
//           .then((result) => {
//             res
//               .send(sendResponse(true, result, "User Saved Successfully"))
//               .status(200);
//           })
//           .catch((err) => {
//             res
//               .send(sendResponse(false, err, "Internal Server Error"))
//               .status(400);
//           });
//       }
//     }
//   },