const router=require('express').Router()
const {getTodos,getTodoById,createTodo,deleteTodo,updateTodo}=require('../controllers/todoControllers')
const auth=require('../middleware/auth')

router.route('/').get(auth,getTodos).post(auth,createTodo)
router.route('/:id').get(auth,getTodoById).delete(auth,deleteTodo).put(auth,updateTodo)



module.exports=router

