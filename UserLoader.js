window.addEventListener('DOMContentLoaded',(event)=>{

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