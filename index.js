import app from './app.js'
import { dbConnect } from './dbConnect.js'


const port=process.env.PORT
app.listen(port,async(req,res)=>{

  console.log(`server is running at http://localhost:${port}`)
  console.log('server running')
  await dbConnect();

})