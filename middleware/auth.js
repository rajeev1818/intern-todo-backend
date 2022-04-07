const asyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')

const auth=asyncHandler(async(req,res,next)=>{
    const token=req.headers.authorization.split(' ')[1]
    if(!token){
        res.status(401)
        throw new Error('Unauthorized')
    }

    const userId= jwt.verify(token,process.env.JWT_SECRET)
    req.userId=userId 
    next()
})

module.exports=auth