import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

//create express app
const app = express()

//apply middleware
app.use(cors())
app.use(express.json())

//specify initial routes 
app.use("/api/v1/resaurants", restaurants)
app.use("*",(req,res)=>res.status(404).json({error:"not found"}))

//export app as module
export default app