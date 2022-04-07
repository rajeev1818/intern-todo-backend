const router=require('express').Router()
const auth=require('../middleware/auth')

const {registerUser,loginUser,updatePassword,updateUsername}=require('../controllers/userControllers')

router.post('/register',registerUser)
router.post('/login',loginUser)

router.put('/user/updatepassword',auth,updatePassword)
router.put('/user/updatename',auth,updateUsername)





module.exports=router