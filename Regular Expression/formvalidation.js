 console.log("Hiii")

let name=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
const error=document.getElementById("invalidFeedback");
const submit=document.getElementById("submit")
let success=document.getElementById("success");
// console.log(name,email,phone);

success.style.display="none";
//validate name
name.addEventListener('blur',()=>{
    console.log("Name is blured")
    let regex=/^[a-zA-z]([0-9a-zA-z]){3,10}$/;
    let str=name.value;

    if(regex.test(str)){
        name.classList.remove('is-invalid')
    }else{
        name.classList.add('is-invalid');
    }
})


//validate email
email.addEventListener('blur',()=>{
    console.log("Email is blured")
     let regex=/^[a-zA-Z]([a-zA-Z0-9]){4,19}@([a-z]){5}.com/;
    //let regex=/^[a-z]([a-zA-Z0-9]+)@/;
    let str=email.value;

    if(regex.test(str)){
        email.classList.remove('is-invalid')
    }else{
        email.classList.add('is-invalid');
    }
})


//validate phone
phone.addEventListener('blur',()=>{
    console.log("Phone is blured")
    let regex=/([0-9]){10}/;
    let str=phone.value;

    if(regex.test(str)){
        phone.classList.remove('is-invalid')
    }else{
        phone.classList.add('is-invalid');
    }
})

submit.addEventListener('click',function(e){
if(name.value==''){
    return false;
}else{
 e.preventDefault();
 name.value="";
 email.value="";
 phone.value="";
 let error=true;
 if(error){
     success.className="alert alert-success alert-dismissible fade show";
     success.innerHTML="Your Form Has Been Successfully Submit";
     success.style.display="block";
 }else{
    success.className="alert alert-danger alert-dismissible fade show";
     success.innerHTML="Your Form Has Not Been Successfully Submit";
     success.style.display="block";   
 }
}
})