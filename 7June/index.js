console.log("Connected");
function add(a,b){
    return parseInt(a) +parseInt(b);
}

function sub(a,b){
    return a-b;
}

function multi(a,b){
    return a*b;
}

function divi(a,b){
    return a/b;
}


const addFunc = document.querySelector('.Add').addEventListener('click', (e)=>{
    console.log("Clicked");
    e.preventDefault();
    num1 = parseInt(document.querySelector('.number1').value);
    num2 = parseInt(document.querySelector('.number2').value);
    document.body.innerHTML += `The added result is: ${add(num1, num2)}`    
});
const subFunc = document.querySelector('.Subtract').addEventListener('click', (e)=>{
    console.log("Clicked");
    e.preventDefault();
    num1 = parseInt(document.querySelector('.number1').value);
    num2 = parseInt(document.querySelector('.number2').value);
    document.body.innerHTML += `The subtracted result is: ${sub(num1, num2)}`   
});
const mulFunc = document.querySelector('.Multiply').addEventListener('click', (e)=>{
    console.log("Clicked");
    e.preventDefault();
    num1 = parseInt(document.querySelector('.number1').value);
    num2 = parseInt(document.querySelector('.number2').value);
    document.body.innerHTML += `The multiplied result is: ${multi(num1, num2)}`   
});
const divFunc = document.querySelector('.Divide').addEventListener('click', (e)=>{
    console.log("Clicked");
    e.preventDefault();
    num1 = parseInt(document.querySelector('.number1').value);
    num2 = parseInt(document.querySelector('.number2').value);
    document.body.innerHTML += `The divided result is: ${divi(num1, num2)}`   
});

const refreshBtn = document.querySelector('.refre').addEventListener('click', ()=>{
    console.log("Refreshed");
})

// switch(ope){
//     case 'add':
//         alert("The sum is: " + add(num1, num2));
//     break;
//     case 'sub':
//         alert("The difference is: " + sub(num1, num2));
//     break;
//     case 'multi':
//         alert("The product is: " + multi(num1,num2));
//     break;
//     case 'divi':
//         alert("The Quoteint is: " + divi(num1, num2));
//     break;
//     default:
//         alert("Try again Later");
// }
