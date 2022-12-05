window.addEventListener('DOMContentLoaded',(event)=>{
    /*
    Note :How it loads in the information from the login to here, I need more info on.
    
    setting a system that inputs the content for:
    Login .html
    */
    let Logbtn = document.querySelector( ".Log") 
    const LInput =[]
     LInput[0] = document.querySelector(".username")
     LInput[1] = document.querySelector(".password")
    let determinant = "http://localhost/comp2245-project2/login.php?user="//url  for the login
    let extraparam = "&?password="
    Logbtn.onclick = function(){
    fetch(determinant + LInput[0].value + extraparam + LInput[1].value)// (might not work with form) trying out something weird with arrays 
        .then (response =>  response.text())
        .then(data =>{
        console.log(data)// A method that triggers whether it goes to their page or gives an error it would probably require
            //An alert or a inner html in red text can be used if the login is not validated
    })
    }
    //Contacts .html
    let Conbtn = document.querySelector( ".CLog") //doesnt have a submit button
    let ParaCon =["?Title=", "&?fname=","&?lname=","&?email=","&?phone=","&?company=","&?type=","&?Assigned=",]
    const CIn=[]
     CIn[0] = document.querySelector(".Title")
     CIn[1] = document.querySelector(".firstname")
     CIn[2] = document.querySelector(".lastname")
     CIn[3] = document.querySelector(".emailadress")
     CIn[4] = document.querySelector(".telephone")
     CIN[5] = document.querySelector(".company")
     CIN[6] = document.querySelector(".type")
     CIN[7] = document.querySelector(".Assignto")
    let Adder = "http://localhost/comp2245-project2/contact.php"//url  for the login
    //for loop to make this string
    let Arr = 0
    for(ConIn of CIN){
        Adder += ConIn.value + ParaCon[Arr]
        Arr++
    }
    Conbtn.onclick = function(){
    fetch(Adder)// +  whatever username (might not work with form) also gonna use a weird way for it hopefully a cleaner way is found before testing
        .then (response =>  response.text())
        .then(data =>{
        console.log(data)// A method that triggers whether it goes to their page or gives an error it would probably require
            //An alert or a inner html in red text can be used if the login is not validated
    })
    }
    });