// First task;
// var numbers = [1,3,0,5,0,7,0];

// function zeroEnd(){
//     var newArr = [];

//     for( i = numbers.length-1; i >= 0; i--){
//         if(numbers[i] == 0){
//             newArr.push(numbers[i]);
//         }else if(numbers[i] !== 0){
//             newArr.unshift(numbers[i]);
//         }
//     }
//     return newArr;
// }

// console.log(zeroEnd(numbers));


// Task two
var countTrue = [false, true, false, true, true];

function check(){

    var newArrCheck=[];
    var line = 0;

    console.log(line);
    for(i = 0; i < countTrue; i++){
        if(countTrue[i] == true){
           newArrCheck.push(countTrue[i]);
           line += newArrCheck.length;
        }
    }
    return newArrCheck
    
    
}


console.log(check());




// Three task
// var numbers = [1,2,0,-1,-2,3,4];

// function plusNum(){
//     var newArray = 0;

//     for(i = 0; i <= numbers.length-1; i++){
//         if(numbers[i] > 0){
//             newArray += numbers[i]
//         }
//     }
//     return newArray
// }
// console.log(plusNum());



// Four task
// var maxPrice = [
//     {name:"Ali", price:200}, 
//     {name:"Umid", price:800},
//     {name:"Sardor", price:400}
// ];

// function checkPrice(){
//     var newResult =[];

//     for(i = 0; i < maxPrice.length; i++){

        
//     }
//     return newResult
// }
// console.log(newResult);