window.addEventListener('DOMContentLoaded',(event)=>{
/*
Note :How it loads in the information from the login to here, I need more info on.

setting a system that loads the content for:
Index
*/


//push update 
//Home
//NewContact
//User Admin only
//New Users

//using buttons and ajax request for filters
let AllBtn = document.querySelector(".")
let Sales = document.querySelector(".")
let Support = document.querySelector(".")
let table = document.querySelector(".Table") 
let id = 0
//need to check out sessions to see whether that carries it 
fetch(`?id=${id}` )// +  whatever username
    .then (response =>  response.text())
    .then(data =>{
    table.innerHTML= data 
    })

//Users(Admin Access)
let Utable = document.querySelector(".UserTable") 
//no need here since its for admins
let  UTableAcc= "?admin="//which should it be user or admin
fetch(UTableAcc)
    .then (response =>  response.text())
    .then(data =>{
    Utable.innerHTML= data 
    })
//Log out

});