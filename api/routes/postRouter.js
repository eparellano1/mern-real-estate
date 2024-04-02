import express from "express"
const postRouter = express.Router()

postRouter.get("/test", (req,res) => {
    console.log("Post Router")
    res.send("Post Router")
})

export default postRouter