const name=document.getElementById("name");
const surname=document.getElementById("surname");
const form=document.getElementById("form");
const email=document.getElementById("email");
const password=document.getElementById("password");
const error1=document.getElementsByClassName("error1");
error2=document.getElementsByClassName("error2");
error3=document.getElementsByClassName("error3");
error3=document.getElementsByClassName("error4");
error=document.getElementsByClassName("error");
form.addEventListener("submit",(e)=>{
    
    let messages=[]
    if(name.value===""||name.value==null){
messages.push('name is required');
    }
if(messages.length>0){
    e.preventDefault();
    console.log(messages.join)
    document.getElementById("firsti").innerText="First Name cannot be empty";
    document.querySelector("#firstimage").style.visibility ="visible";
  
}
if(((name.value==="")==false||(name.value!=null)==false))
{
    messages=[null]
    document.getElementById("firsti").innerText="";
    document.querySelector("#firstimage").style.visibility ="hidden";
}


})

form.addEventListener("submit",(pre)=>{
    let passwording=[]
    if(password.value===""||password.value==null){
        passwording.push('password is required');
            }
          

            if(passwording.length>0){
                pre.preventDefault();
                console.log(passwording.join)
                
                document.getElementById("fori").innerText="Password  cannot be empty";
                document.querySelector("#lastimage").style.visibility ="visible";}
                if((password.value==="")==false||(password.value!=null)==false)
                {
                    passwording=[null]
                    document.getElementById("fori").innerText="";
                    document.querySelector("#lastimage").style.visibility ="hidden";
                }
    })

form.addEventListener("submit",(k)=>{
let surnaming=[]
if(surname.value===""||surname.value==null){
    surnaming.push('surname is required');
        }
      
        if(surnaming.length>0){
            k.preventDefault();
            console.log(surnaming.join)
            
            document.getElementById("secondi").innerText="Last Name cannot be empty";
            document.querySelector("#secondimage").style.visibility ="visible";}
if((surname.value==="")==false||(surname.value!=null)==false)
{
    surnaming=[null]
    document.getElementById("secondi").innerText="";
    document.querySelector("#secondimage").style.visibility ="hidden";
}
})







    form.addEventListener("submit",(emai)=>{
        let ramzi=[]
       
            if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))==false)
            {
                ramzi.push('Please enter email');
               
            }
                
              
                if(ramzi.length>0){
                    emai.preventDefault();
                    console.log(ramzi.join)
                    
                    document.getElementById("thirdi").innerText="Looks like this is not an email";
                    document.querySelector("#thirdimage").style.visibility ="visible";}
                    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))==true){
                        ramzi=[null]
                        document.getElementById("thirdi").innerText="";
                    document.querySelector("#thirdimage").style.visibility ="hidden";
                    }
        })
   