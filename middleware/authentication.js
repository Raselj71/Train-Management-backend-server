
import jwt from 'jsonwebtoken'
const {JsonWebTokenError}=jwt

export const authentication=(req,res,next)=>{

    try {
        const token=req.cookies.token;

        

        if(!token){
            res.status(401).json({data:"You have to login first"})
        }

        const verifyToken=jwt.verify(token,process.env.JWT_SECRET)
        req.user=verifyToken
        
        next()

    } catch (error) {
        if(error instanceof JsonWebTokenError){
            console.log(error)
          return  res.status(401).json({data:"json token is expired"})
        }
        
        next(error)
    }

}