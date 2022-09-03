

const express = require("express");

const app = express();
const upload = require("express-fileupload");
const connect = require("./src/config/db")
const cors = require("cors");
const path = require('path')
app.use(cors())

app.use(express.json());

app.use("/images", express.static(path.join(__dirname,"/images")))


const userController = require("./src/controllers/userController");
const productsController = require("./src/controllers/productController");
const categoriesController = require("./src/controllers/categoryController");
const {register,login} = require("./src/controllers/AuthController");
app.use(upload())

app.post('/upload', (req, res)=> {
     if(req.files){
        console.log(req.file)
        var file = req.files.file
        var filename = file.name
        console.log(filename)

        file.mv('./images/'+filename, function(err){
            if(err){
                res.send(err)
            }else{
                res.send("file uploaded")
            }
        })
     }
});

app.use("/users",userController);

app.use("/products", productsController);

app.post("/register", register)

app.post("/login", login)

app.use("/category", categoriesController);


app.listen(6007, async()=>{
    try {
        await connect();
        console.log("connected");
    } catch (error) {
        console.log({error:error.message})
    }
})



