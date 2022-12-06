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



let table = document.querySelector(".Table") 
let user = ""
let filter = ""//pushupate
//url  for the tablr
fetch(`?user=$` )// +  whatever username
    .then (response =>  response.text())
    .then(data =>{
    table.innerHTML= data 
    })

//Users(Admin Access)
let Utable = document.querySelector(".UserTable") 
let  UTableAcc= "?admin="//which should it be user or admin
fetch(UTableAcc)
    .then (response =>  response.text())
    .then(data =>{
    Utable.innerHTML= data 
    })
//Log out

});