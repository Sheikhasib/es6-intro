function add(num1, num2 = 79){
    // option 2
    // num2 = num2 || 0;
    // option 1
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(12, 0);
// console.log(result);

function fullName(first, last= 'Sheikh'){
    const name = first + '' + last;
    return name;
     
}
