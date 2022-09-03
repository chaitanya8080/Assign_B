

const express = require("express");
const User = require("../models/userModel");
const Product = require("../models/productModel")
const router = express.Router();
const bcrypt = require("bcrypt");

//to get all the users
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find().lean().exec();
//     res.status(200).send({ data: users});
//   } catch (error) {
//     res.status(500).send({error: error.message });
//   }
// });


// router.post("/create", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     return res.status(201).send({ data: user });
//   } catch (error) {
//     res.status(500).send({message: "error"});
//   }
// });

// to get single user by using  id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    const { password,...others} = user;
    return res.status(200).send(others);
  } catch (error) {
    res.status(500).send({error: error.message });
  }
});


//edit user by id
router.patch("/:id", async (req, res) => {

  if(req.body.password){
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt)
  }
  try {
    const user = await User.findOneAndUpdate({_id:req.params.id} , req.body, {new: true,}).lean().exec();
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).send({error: error.message });
  }
});


//delete users by id
router.delete("/:id", async (req, res) => {

     try {
       const user = await User.findById(req.params.id);
      try {
        await Product.deleteMany({ username: user.username});
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({ message:"User deleted",userdata: user});
      } catch (error) {
        res.status(500).send({error: error.message });
      }

     } catch (error) {
         res.status(404).json("user not found")
     }
 
});

module.exports = router;