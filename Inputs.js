window.addEventListener('DOMContentLoaded',(event)=>{

//New Users
    let Creatbtn = document.querySelector(".Uadd")
    let firstname = document.querySelector(".fname")
    let lastname = document.querySelector(".lname")
    let emailaddress = document.querySelector(".email")
    let password = document.querySelector(".password")
    let Role = document.querySelector(".Role")
    //sanitzation
    Creatbtn.onclick = function()
    {
        fetch(`http://localhost/comp2245-project2/newuser.php?fname=${firstname}&?lname=${lastname}&?email=${emailaddress}&?password=${password}&?Role=${Role}`)
        //post method
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
     //Sanitization
    Conbtn.onclick = function(){
    fetch(`http://localhost/comp2245-project2/contact.php?title=${Title}&?firstname=${fname}&?lname=${lname}&?email=${email}&?phone=${phone}&?company=${company}&?type=${type}&?Assignto=${Assignto}`)        .then (response =>  response.text())
//post method
    }
    });