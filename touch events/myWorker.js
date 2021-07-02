onmessage=function(e){
    var mul=e.data[0]*e.data[1];
    postMessage(mul);
}