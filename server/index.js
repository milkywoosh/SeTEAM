const express = require('express')
const PORT =  process.env.PORT || 5000
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()


app
.prepare()
.then(()=>{
    const server = express()
    server.get('*',(req,res)=>{
        return handle(req,res)
    })
    server.listen(PORT,err=>{
        if(err) throw err
        console.log(`THIS SERVER RUNNING ON PORT ${PORT}`)
    })
})
// ex = exception
.catch(ex =>{
    console.error(ex.stack)
    process.exit(1)
})
