// function func1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             let error =true;
//             if(!error){
//                 resolve();
//                 console.log("Your problem has been resolved");
//             }else{
//                 reject("Sorry Not Fulfilled");
//                 console.log("Function : On problem its have");
//             }
//         },2000)
//     });
// }


// func1().then(function(){
//     console.log("Abhi : Thanks for resolving")
// }).catch(function(problm){
//     console.log("Abhi : You are bad " + problm);
// })

let student = [{
        name: "Abhishek",
        subject: "JS"
    },
    {
        name: "Rahul",
        subject: "Python"
    }
]

function setStudent(newStudent) {
    return new Promise(function (resolve, reject) {

        let error = false;
        if (!error) {
            resolve();
            setTimeout(function () {
                student.push(newStudent);
                console.log("this is called")
            }, 1000)
        } else {
            reject();
        }
    })
}

function getStudent() {
    let str = "";
    setTimeout(function () {
        student.forEach(function (student) {
            str += `<li>${student.name}</li>`;
        });
        document.getElementById("data").innerHTML = str;
    }, 1200)
}
let val = {
    name: "Babaji",
    subject: "JAVA"
};
setStudent(val).then(function(){
    console.log("Function resolved");
    getStudent();
}).catch(function(){
    console.log("error")
});