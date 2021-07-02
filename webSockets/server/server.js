var server=require('ws').Server;
var s=new server({port:5002});

s.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        console.log(message)
        ws.send(message)
    })

    ws.onclose=('close',()=>{
        console.log("client server lost")
    })
})