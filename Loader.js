window.addEventListener('DOMContentLoaded',(event)=>{
/*
Note :How it loads in the information from the login to here, I need more info on.

setting a system that loads the content for:
Index
*/
let Loader = document.querySelector( "#Refresher") //add a button with classname akin to Refresher to the html
let table = document.querySelector(".Table") 
let TableAcc = "?user="//url  for the tablr
Loader.onclick = function(){
fetch(TableAcc)// +  whatever username
    .then (response =>  response.text())
    .then(data =>{
    table.innerHTML= data 
    })
}
//Users(Admin Access)
let ULoader = document.querySelector( "#Ufresher") //add a button with classname Refresher to the html
let Utable = document.querySelector(".UserTable") 
let  UTableAcc= "?admin="//which should it be user or admin
ULoader.onclick = function(){
fetch(UTableAcc)
    .then (response =>  response.text())
    .then(data =>{
    Utable.innerHTML= data 
    })
}
});