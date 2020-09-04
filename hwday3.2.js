//bai7  Create an array containing at least 5 numbers, then ask users enter a number, perform a
//search to look for the number in the array, if the number is found, tell user that with the
//index of it in the array, if not, also tell them so


let number2=prompt("pick number2 ");
let arr2=number2.split(",");
for(let i=0;i<=arr2.length;i++){
  let number3= prompt("check if it is in the array")
  if (arr2[i]!=number3){
  alert("NOT FOUND IN ARRAY")}
  

  else if (arr2[i]=number3){
  alert('it was in the array with an index ='+i)}
  break;  
}
//bai8
{
//8.1 Create an array to represent the sizes of your flock, and log all of your
//flock size, expected screen output:
  
  let number3=[5,7,9,10,20,30];
  alert("hello, this is my sheep size"+number3)
  //8.2  At the end of each month, you have to choose one and only one sheep to
//shear and thus you want to choose the biggest one to maximize your profit. Add
//scripts to search for the biggest sheep in your list:
  
  let max=number3[number3.length-1]
  
  for(let i=0;i<number3.length;i++){
  
    if (number3[number3.length-1]<number3[i]);
      max=number3[i];}

      alert(`maximum weight of sheep is${max}`) 

  
 //8.3   When your biggest sheer, its size will return to the default size, which is 8.
      for(let i=0;i<=number3.length;i++){
    if (number3[i]===max)
    number3[i]=8;}
console.log(...number3)
 
 alert("after sheering,here is my flock"+number3)
 
 //8.4  In the following month, EVERY sheep in your flock grow, they have their
//size increased by 50.

console.log(`MONTH 1`);
console.log(`1 month has passed, my sheeps have grown, here are their sizes:`);
   for (let i = 0; i < number3.length; i++) {
  number3[i] = number3[i] + 50;
}
console.log(...number3);

// 8.5 In the following month, EVERY sheep in your flock grow, they have their
// size increased by 50.

  for (i = 2; i <= 4; i++) {
console.log(`MONTH ${i}`);
  for (let i = 0; i < number3.length; i++) {
    if (number3[i] === Math.max(...number3)) {
      number3[i] = 8;
    }
  }
  for (let i = 0; i < number3.length; i++) {
    number3[i] = number3[i] + 50;
  }
  console.log(...number3);
}}}
//10 names surrounded with <>
let names=prompt("enter the sequence of names,separated by commas")
let arr3=names.split(",");
let map1= arr3.map(x => `<${x}>`);
  console.log(...map1)
  
//11 containing odd numbers
let numbers=prompt("pick numbers separated by commas")
let arr4=numbers.split(",");
let map2=arr4.filter(x=> x%2!==0)
console.log(...map2)