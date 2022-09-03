const express = require('express');

const Product = require('../models/productModel');
const authenticate = require("../middlewares/authenticate")
const router = express.Router(); //take only router method from the express


//get all the posts
router.get('/', async (req, res) => {
   const username = req.query.username;
   const catName = req.query.category;
  try {
    let products;
    if(username){
      products = await Product.find({username:username})
    }
    else if(catName){
      products = await Product.find({categories:{
        $in:[catName]
      }})
    }
    else{
      products = await Product.find().lean().exec();
    }
    
    res.status(201).send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//get single post
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();

    res.status(201).send({product});
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


//create post
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// edit single post
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if(product.username === req.body.username){

      try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.status(200).send({updatedProduct});
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    }else{
      res.status(401).json("you can update only your post")
    }
    
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});




//delete single post
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if(product.username === req.body.username){

      try {
         await product.delete()
        return res.status(200).send("this post deleted ",{post:product});
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    }else{
      res.status(401).json("you can delete only your post")
    }
    
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// router.delete('/:id' ,async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id)
//       .lean()
//       .exec();
//     return res.status(200).send({ userdata: product });
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });


module.exports = router;
