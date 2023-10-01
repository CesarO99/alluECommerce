const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({ limit: "10mb" }))

const PORT = process.env.PORT || 8080

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connect to Database"))
    .catch((err) => console.log(err))

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String
})

const userModel = mongoose.model("user", userSchema)

app.get("/", (req, res) => {
    res.send("Server is running")
})

app.post("/signup", async (req, res) => {
    console.log(req.body)
    const { email } = req.body

    userModel.findOne({ email: email }, (err, result) => {
        console.log(result)
        console.log(err)
        if (result) {
            res.send({ message: "Email is already register" })
        }
        else {
            const data = userModel(req.body)
            const save = data.save()
            res.send({ message: "Successfully sign up", alert: true })
        }
    })
})

app.post("/login", async (req, res) => {
    console.log(req.body)
    const { email } = req.body
    userModel.findOne({ email }, (err, result) => {
        if (result) {
            const dataSend = {
                _id: result.id,
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                password: result.password
            };
            console.log(dataSend)
            res.send({ message: "Login is successfully", alert: true, data: dataSend });
        }
        else {
            res.send({ message: "Email is not available, please signup", alert: false });
        }
    })
});

const schemaProduct = mongoose.Schema({
    name: String,
    category: String,
    image: String,
    price: String,
    description: String,
});

const productModel = mongoose.model("product", schemaProduct)

app.get("/product", async (req, res) => {
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
})

app.listen(PORT, () => console.log("server is running at port : " + PORT))