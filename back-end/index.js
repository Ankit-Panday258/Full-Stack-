import express  from 'express';

const app = express ()

// app.get('/',(req ,res) =>{
//   res.send("server in commil")
// })
app.get('/api/jock',(req , res)=>{
    const jocks = [
        {
         id:1 ,
         title:"the jocke",
         cons:"silao"
        },
        {
         id:2 ,
         title:"the jocke",
         cons:"silao"
        },
        {
         id:3 ,
         title:"the jocke",
         cons:"silao"
        },
    ]
    res.send(jocks)
});
 const PORT = process.env.PORT || 3000 ;
 
 app.listen(PORT,()=>{
    console.log(`serverin port http://localhost:${PORT}`)
 })