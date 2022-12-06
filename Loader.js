window.addEventListener('DOMContentLoaded',(event)=>{
let ClHome =document.querySelector("#Home")
let ClContact=document.querySelector("#Contacts")
let ClUser=document.querySelector("#User")
let ClNUser=document.querySelector("#New-User")

//Home
let Home = document.querySelector(".1")
Home.onclick=function(){
ClHome.style.display="block"
ClContact.style.display="none"
ClUser.style.display="none"
ClNUser.style.display="none"
}
//NewContact
let NCont=document.querySelector(".2")
NCont.onclick=function(){

    ClHome.style.display="none"
    ClContact.style.display="block"
    ClUser.style.display="none"
    ClNUser.style.display="none"
    }
//User Admin only 
let AdmUser=document.querySelector(".3")
AdmUser.onclick=function(){

    ClHome.style.display="none"
    ClContact.style.display="none"
    ClUser.style.display="block"
    ClNUser.style.display="none"
    }
//New Users
let NewUsr=document.querySelector(".5")
NewUsr.onclick = function(){

    ClHome.style.display="none"
    ClContact.style.display="none"
    ClUser.style.display="none"
    ClNUser.style.display="block"
}
//using buttons and ajax request for filters
let AllBtn = document.querySelector(".All")
let Sales = document.querySelector(".SL")
let Support = document.querySelector(".SP")
let Assigned= document.querySelector(".ASM")
let table = document.querySelector(".Table") 
let id = 0
AllBtn.onclick = function(){
 Fid=0
}
Sales.onclick = function(){
Fid=1
}
Support.onclick=function(){
Fid=2
}
Assigned.onclick=function(){
Fid=3
}
//need to check out sessions to see whether that carries it 

fetch(`http://localhost/comp2245-project2/Table.php?id=${Fid}` )// +  whatever username
    .then (response =>  response.text())
    .then(data =>{
    table.innerHTML= data 
    })

//Users(Admin Access)
let Utable = document.querySelector(".UserTable") 

fetch(`http://localhost/comp2245-project2/userlist.php`)
    .then (response =>  response.text())
    .then(data =>{
    Utable.innerHTML= data 
    })
//Log out
let Logout=document.querySelector(".4")
Logout.onclick=function(){

}
//Extra
let CMess = document.querySelector("#Contacts .message")
let NUMess = document.querySelector("#New-User .message")
//New Users
let Creatbtn = document.querySelector(".Uadd")
let firstname = document.querySelector("#New-User .firstname")
let lastname = document.querySelector("#.lastname")
let emailaddress = document.querySelector(".email")
let password = document.querySelector(".password")
let Role = document.querySelector(".Role")
//Validation
function isValidEmail(emailAddress) {
    return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(emailAddress);
  }
function isValidTelephoneNumber(telephoneNumber) {    
    return /^\d{3}-\d{3}-\d{4}$/.test(telephoneNumber)
  }
function isValidPassword(password){
    return /[A-Z]{1,}-[a-z]{1,}-[ ]/.test(password)
}
function isValidName(name){
    return /^[A-Z]-[a-z]{2,}/.test(name)
}
function isValidCompany(name){
    return /^[a-zA-Z0-9][a-zA-Z0-9]*/.test(name)
}
Creatbtn.onclick = function()
{
    if(isValidEmail(emailaddress.value.trim())!=true){
        NUMess.innerHTML= "Invalid Email" 
        return
    }
    if (isValidName(firstname.value.trim())!=true){
        NUMess.innerHTML= "Invalid First Name"
        return
    }
    if (isValidName(lastname.value.trim())!=true){
        NUMess.innerHTML= "Invalid Last Name"
        return
    }
    if(isValidPassword(password.value.trim())!=true){
        NUMess.innerHTML= "Invalid Password"
        return
    }

    fetch(`http://localhost/comp2245-project2/newuser.php?fname=${firstname}&?lname=${lastname}&?email=${emailaddress}&?password=${password}&?Role=${Role}`, 
    {
        Method: 'POST'})
        .then (response =>  response.text())
        .then(data=>{console.log(data)})
    }
    
//Contacts
let Conbtn = document.querySelector( ".CLog") //doesnt have a submit button
 let Title = document.querySelector(".Title")
 let fname = document.querySelector(".firstname")
 let lname = document.querySelector(".lastname")
 let email = document.querySelector(".emailadress")
 let phone = document.querySelector(".telephone")
 let company = document.querySelector(".company")
 let type = document.querySelector(".type")
 let Assignto = document.querySelector(".Assignto")

Conbtn.onclick = function(){
    if(isValidEmail(email.value.trim())!=true){
        CMess.innerHTML= "Invalid Email" 
        return
    }
    if (isValidName(fname.value.trim())!=true){
        CMess.innerHTML= "Invalid First Name"
        return
    }
    if (isValidName(lname.value.trim())!=true){
        CMess.innerHTML= "Invalid Last Name"
        return
    }
    if(isValidTelephoneNumber(phone.value.trim())!=true){
        CMess.innerHTML= "Invalid Phone Number"
        return
    }
    if(isValidCompany(company.value.trim())!=true){
        CMess.innerHTML= "Invalid Company"
        return
    }
    
fetch(`http://localhost/comp2245-project2/contact.php?title=${Title}&?firstname=${fname}&?lname=${lname}&?email=${email}&?phone=${phone}&?company=${company}&?type=${type}&?Assignto=${Assignto}`, {
    Method: 'POST'
  })       
    .then (response =>  response.text())
    .then(data=>{console.log(data)})
}
});