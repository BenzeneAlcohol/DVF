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

var num1 = prompt("Enter the 1st number");
var num2 = prompt("Enter the 2nd number");
var ope = prompt("Enter 'add' for addition, 'sub' for subtraction, 'multi' for multiplcation, 'divi' for division");
switch(ope){
    case 'add':
        alert("The sum is: " + add(num1, num2));
    break;
    case 'sub':
        alert("The difference is: " + sub(num1, num2));
    break;
    case 'multi':
        alert("The product is: " + multi(num1,num2));
    break;
    case 'divi':
        alert("The Quoteint is: " + divi(num1, num2));
    break;
    default:
        alert("Try again Later");
}
