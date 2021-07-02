var ball=document.querySelector('.ball')[0];
var garden=document.querySelector('.garden');
var output=document.querySelector('.output');
var maxX = garden.clientWidth-ball.clientWidth;
var maxY = garden.clientHeight-ball.clientHeight; 
window.addEventListener('deviceorientation',(event)=>{
    if(event.absolute){
        var x=event.beta;//represents motion of the device around x axis(-180 to +180)
        var y=event.gamma;//represents motion of the device around x axis(-90 to +90)
        output.textContent=`beta : ${x}\n`
        output.textContent+=`gamma : ${y}`
    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
      if (x>90){
           x=90
        };
      if (x<-90){
           x=-90
        };
      // To make computation easier we shift the range of
      // x and y to [0,180]
      x += 90;
      y += 90;
    
      // 10 is half the size of the ball
      // It center the positioning point to the center of the ball
      ball.style.top  = (maxY*y/180 - 10) + "px";
      ball.style.left = (maxX*x/180 - 10) + "px";
       
 
    }else{
        console.log("device doesn't provide orientation data absolutely");
    }
})
   




