// let a = [ true,false,true,true,true]
// let  d= arr.fil


// let a ="2344"
// console.log(parseInt(a))


// function frames(minutes, fps) {
// 	return fps * (minutes * 60)
// }
// console.log(frames(10, 10));


// function maxNum(n1,n2) {
// 	if (n1 < n2) {
// 	console.log( n2);
// 	}
//   else {
// 	console.log(n1); 
//   }
// }
// maxNum(90,7)


// function calculateFuel(n) {
//     return Math.max(100,n*10)
//  }
//  console.log(calculateFuel(3));


// function format(a, b, c) {
// 	const template = `Their names were:${a}, ${b} and ${c}.`
// 	return template
// }
//  console.log(format("doston", 19, "job"))

// function shouldServeDrinks(age, onBreak){ 
// return (age && onBreak > 18 )? true : false;
// }
// console.log(shouldServeDrinks(20, onBreak))




// function bubbleSort(arr){
//     //Outer pass
//     for(let i = 0; i < arr.length; i++){
//         //Inner pass
//         for(let j = 0; j < arr.length - i - 1; j++){
//             //Value comparison using ascending order
//             if(arr[j + 1] < arr[j]){
//                 //Swapping
//                 [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
//             }
//         }
//     };
//     return arr;
// };
// console.log(bubbleSort([5,3,8,4,67,48,32,12,4,54,6,89,65,87,66]));


// function shouldServeDrinks(age, onBreak){
// 	return  ((age >= 18) && (age < 29)) && (onBreak == true)? true : false
// };
// console.log(shouldServeDrinks(17, false))
// console.log(shouldServeDrinks(19, true))
// console.log(shouldServeDrinks(30, true))

// function yeah_nope(bool) {
// 	return bool ? "yeah" : "nope" 
// };
// console.log(yeah_nope(true))
// console.log(yeah_nope(false))



// function MyFunc(a, b){
//     return a + b
// }
// console.log(MyFunc(3, 3));


// function  myFunction(a, b){
//     return (a === b ) ? true :false;
// }
// console.log(myFunction("4", 4));


// function  myFunction(arr,d ){
//     return arr[d-1]   
//  } 

//  console.log( myFunction("axxa",1));

// function myFunction(ar){
//     return  ar.slice(3)
// } 
// console.log(myFunction("absdefg"));


// let a =((60+40+90).toString())
// var num=[5,6,7,8,9]; num.unshift(5); a = (num);
// var a = confirm("mgd")

// var x; 
// var a = (typeof(x));

// console.log(a);

//let gretign 
//greting={}
//console.log(greting);

// sessionStorage.setItem(
//     'cool_secret', 123
// );
// console.log(sessionStorage.setItem());


// function word(s) {
//     let str =["one","two","three","four"]
//     let int =[1,2,3,4];
//     for (let j = 0; j < int.length; j++) {
//     for (let i = 0; i < str.length; i++) {

//         if(s === str[i]){
//             return int[j]
//         }
//     } 
//     }
// }




// function math(s)
// if(s>0){
//     return ((5*s)+1)
// }else{
//     return 0
// }
// console.log(math(2));


// function bitwiseAND(n1, n2) {
// 	return n1 & n2 
// }
// console.log(bitwiseAND(7, 12))

// function bitwiseOR(n1, n2) {
// 	return n1 | n2
// }
// console.log(bitwiseOR(7, 12)) 

// function bitwiseXOR(n1, n2) {
// 	return n1 ^ n2
// }
// console.log(bitwiseXOR(7, 12))



// function minMax(arr) {
// 	return arr.Math.min(), arr.Math.max()
// }
// console.log(minMax([1, 2, 3, 4, 5]))

// class user {
// 	 Person(name, age)	
// }
// Person("doston",23)
// console.log(`salom mening ismim ${name}`);

// function addition(num) {
// 	return ++num
// } 
// console.log(addition(2));


let a = [10, 24, 3, 5, 7, 8, 9,]
let min = arr[0]
for (let i = 0; i <= arr.length; i++) {
	if (arr[i] < min) {
		min = arr[i];
	}
}
console.log(min);