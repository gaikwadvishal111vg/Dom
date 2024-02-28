/*
let checkAnagram = function(str1, str2){
    // if (str1.length == str2.length){
    //     return true;
        
    // }else{
    //     return false;
         
    // }
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    return  str1 === str2;

};
console.log(checkAnagram("listen", "silent")); 
console.log(checkAnagram("hello", "world1")); 

// let findDupli=function (arr1, arr2) {
//     return arr1.filter(value => arr2.includes(value));
//     //we used filter and includes method a filter filter the arrays and #includes check  whether value is in array or not
//   }
//   //we take two arrays
//   const array1 = [1, 2, 3, 4,5,6];
//   const array2 = [3, 4, 5,7,1];
//   let check = findDupli(array1, array2); //we simply function arrays values initialize a creating new varianle check and call the variable as afunction
//   console.log(check); 
//   // we used here reduce method its reduced specified values in array  into a single value and returned that value
//   let sum = check.reduce((accumulator, value) => {
//     return accumulator + value;
//   }, 0);
//   console.log(sum); 

// Array Sum: Write an algorithm to find the pair of elements in an array that adds up to a specific target sum.
// let arraySum = function(arr,target){
//     let find=[];
//     for(let i=0; i<=arr.length; i++){
//          for(let j=i+1;j<=arr.length; j++){
//                 if(arr[i]+arr[j] === target){
//                     find.push(arr[i]+arr[j]);
//                    // console.log(targetsum(arr[i],arr[j])); 
//                    return find;
//             }
//         }
//     }
   
//    return "please enter valid target sum";
// };
    
// // time complexity Object(N2) space complexity  O(n).
// //here we given inputs  as an array and a number which is the sum of two numbers in that array and also given target sum;
// let arr1 = [1,2,3,4,5];
// let target1 = 9;
// let targetsum=arraySum(arr1,target1);
// console.log(targetsum);

// String Compression: Write a function to perform basic string compression using the counts of repeated characters. For example, "aabcccccaaa" would become "a2b1c5a3."

// let stringComp = function(str){
//     let count=1;
//     let  result="";
//     for(let i=0; i< str.length ; i++ ){
//         if(str[i]===str[i+1]){
//             count++;
//         }else{
//            result += `${count}${str [i]}`;  
//            count=1; 
//            }
//        }
//       return result+`${count}`;
// };
// console.log(stringComp("aabcc"));
// console.log(stringComp("aabcccccaaa"));


// function to check whether a number is prime or not
// function isPrimeNumber(num) {
//     var divisorCount = 0;
//     for (var i = 1; i <= num; ++i) {
//         if (num % i == 0) {
//             divisorCount++;
//         }
//     }
//     if (divisorCount >  2) {
//         return false;
//     } else {
//         return true;
//     }
// }

// console.log(isPrimeNumber(7));

*/

let div = document.getElementById("dom");
div.style.backgroundColor="yellow";
div.style.margin="20px";
div.style.padding="10px";
div.style.fontSize="18px";
div.style.fontWeight="bold";
div.style.height="200px";
div.style.width="300px";
div.style.color="#0000ff";
