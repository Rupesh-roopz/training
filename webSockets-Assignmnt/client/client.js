//creating a local port
var connection=new WebSocket("ws://localhost:6029");
var chat=document.getElementById('chat'); //reference to chat div

//on clicking submit button
sendFunction=()=>{
    var data=document.getElementById('message').value; //reference to message div
    var name=document.getElementById('name').value;//reference to name div

    //Sending name and messege to server using JSON
    connection.send(JSON.stringify({
        type:"name",
        dataName:name,
        data:data
    }))
    //Displaying a copy of name and messege on same display
    chat.innerHTML+=name+":  "+data+"<br><br>";
} 

//receiving data from server
connection.onmessage=(event)=>{
    //parsing data from the server
    var json=JSON.parse(event.data);
    //displaying the content received from the server
    chat.innerHTML+=json.name+": "+json.data+"<br><br>";
    }
