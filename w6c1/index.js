const express = require('express')
const app = express()
app.listen(4000,() => {
    console.log('server is on');
})
app.use(express.json())
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Todo')
.then(console.log('Database Connected'))
const todoSchema  = new mongoose.Schema({
    Task: String,
    Status: Boolean
})
const Todo = mongoose.model("Todo" , todoSchema)

app.post('/create' , async(req,res) => {
    await Todo.create({Task:req.body.Task,Status: req.body.Status})
    .then(res.status(200).json({
        success: true,
        message: "Task Created"
    }))
})

app.get('/all' , async(req,res) => {
    const Result = await Todo.find({})
    res.json(Result)
})

app.get('/complete' , async(req,res) => {
    const Result = await Todo.find({Status: true})
    res.json(Result)
})

app.get('/incomplete' , async(req,res) => {
    const Result = await Todo.find({Status: false})
    res.json(Result)
})

app.patch('/update/:id' , (req,res) => {
    const id = req.params.id
    Todo.findByIdAndUpdate(id , {Task:req.body.Task,Status: req.body.Status})
    .then(res.status(200).json({
        success: true,
        message: "Updated Successfully"
    }))
})

app.delete('/delete/:id' , (req,res) => {
    const id = req.params.id
    Todo.findByIdAndDelete(id)
    .then(res.status(200).json({
        success: true,
        message: "Deleted Successfully"
    }))
})