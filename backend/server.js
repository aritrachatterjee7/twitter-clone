import express from "express"
import { configDotenv } from "dotenv"
import cookieParser from "cookie-parser"
import { v2  as cloudinary } from "cloudinary"

import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import postsRoutes from "./routes/post.routes.js"
import notificationRoutes from "./routes/notification.routes.js"


import connectMongoDB from "./db/connectMongoDB.js"


configDotenv()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express({limit : "5mb"})
const PORT = process.env.PORT || 5000

app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/api/auth" , authRoutes)
app.use("/api/users" , userRoutes)
app.use("/api/posts" , postsRoutes)
app.use("/api/notifications" , notificationRoutes)






app.listen(PORT , ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
    connectMongoDB()
})