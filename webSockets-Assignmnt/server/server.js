//Requiring WS module from npm
const server=require('ws').Server;

//creating a server with a port number
const s=new server({port:6029});

//on sucessfull connection
s.on('connection',(ws)=>{   
    //getting JSON data from the client
    ws.on('message',(message)=>{
        //converting JSON data into objects
        message=JSON.parse(message)
         personName=message.dataName;
        //sending data to all connected users 
        s.clients.forEach(function (client){
            if(client!=ws)//sending data to all connected users except who sends the data
            //sending data from server to users in JSON format
            client.send(JSON.stringify({
               name:personName,
               data:message.data
            }));
})
})})


