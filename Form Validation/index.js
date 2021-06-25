/*Validating email using constraint validation API*/
const email=document.getElementById("emailID");

email.addEventListener("input",()=>{
if(email.v
  '
  ''atch){
  email.setCustomValidity("Enter proper validity");
}
else{
  email.setCustomValidity("");  
}
})

