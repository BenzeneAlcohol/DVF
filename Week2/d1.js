function firstn(arr, n){
    var len = arr.length;
    for(let i = 0;i<n;i++){
        console.log(arr[i]);
    }
    console.log("the length of the array is:", len);
}

firstn([2,3,4,5,6], 3);


function clone(arr){
    var brr = arr;
    console.log("The cloned array is:" , brr);
    return 0;
}


console.log(clone([2,3,4]));


function is_array(inp)
{
    if (Array.isArray(inp)) {
        return "it is an array";
    }
    else {
        return "not an array";
    }
}

console.log(is_array([20]));


function joinstr(arr){
    str = arr.join(" ");
    console.log(str);
}

joinstr(["Hello", "World", "This", "Javscript"]);



count = 0;
max=0;
function joinstr(arr){
    arr.map((ele)=>{
        arr.map((ble)=>{
            if(ele==ble)
            {
                count++;
            }
        })
        if(count>max)
        {
            max=count;
        }
        count=0;
    })
    console.log(max);
}

joinstr([0,0,0,0,0,0,1,1,1,1,2,32,3,4,5,2,2]);