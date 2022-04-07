

const asyncHandler=require('express-async-handler')
const Todo=require('../models/todoModel')

const getTodos=asyncHandler(async(req,res)=>{
    const userId= req.userId
    const todos= await Todo.find({user:userId})
    res.status(200).json(todos)
})

const getTodoById=asyncHandler(async(req,res)=>{
    const todoId=req.params.id
    const todo= await Todo.findById(todoId)
    if(!todo){
        res.status(404)
        throw new Error('Invalid Id')
    }
    

    res.status(200).json(todo)
})

const createTodo=asyncHandler(async(req,res)=>{
    const userId=req.userId
    const {todo,category,priority,status,due_date}=req.body
    const newTodo= await Todo.create({
        todo,
        category,
        priority,
        status,
        due_date,
        user:userId
    })
    res.status(201).json(newTodo)
})


const updateTodo=asyncHandler(async(req,res)=>{
    const todoId= req.params.id
    const userId=req.userId
    

    const {todo,category,priority,status,due_date}=req.body
    const updatedTodo= await Todo.findByIdAndUpdate(todoId,{
        todo,category,priority,status,due_date,user:userId
    },{new:true})
    res.json(updatedTodo)
})

const deleteTodo=asyncHandler(async(req,res)=>{
    const todoId=req.params.id
    await Todo.findByIdAndDelete(todoId)
    res.status(204).json({message:'Todo Deleted'})
})


module.exports={
    getTodos,
    getTodoById,
    createTodo,
    deleteTodo,
    updateTodo
}