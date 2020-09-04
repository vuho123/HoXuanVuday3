 // Variable swap
 {
 let a = 5;
 let b = 6;
 console.log(a , b);
 //5 6
     a = a + b;
     b = a - b;
     a = a - b;
     console.log(a , b)
//6 5
    }



//2 split string into array
let sentence=prompt("Hello World")
let arr5=sentence.split(",")    
console.log(arr5)


// 3 three dots
let anArray=[1,2,3,4,5];
console.log(...anArray);


// Write a script to simulate a clothes shop, asking and performing certain tasks from users
 
 
 let items = ["jeans", "t-shirt", "socks"];
    for(let i=0;i<=items.length;i++);
 let demand = prompt("Chon CRUD");
     if (demand === "R") {
console.log("the current items are" + ["jeans", "t-shirt", "socks"]);
} 
     else if (demand === "C") {
 let newItems = prompt("enter the name of the item");
    items.push(newItems);
console.log(items);
  alert("done!");
 let demand = prompt("Chon CRUD");
}

      else if (demand === "U") {
    for(let i=0;i<=items.length;i++);
  let i=prompt("what number you want to change?") 
  let thingUpdate=prompt("what do you want to update")
   items[i]=thingUpdate
console.log(items)   
    }
      else if(demand=== "D"){
  let i=prompt("enter the position you want to delete")
    items.splice(i,1);
console.log(items);
}
      else 
alert("ko hop le")



//bai5   Write a script to ask users enter a sequence of numbers, the Numbers are separated by
//commas, calculate the sum of the numbers and show it to users

{
let number=prompt("number separated by commas");
let arr=number.split(",");

let sum=0
  for(let i=0;i<arr.length;i++){

  sum += Number(arr[i]);}

alert(`the sum is${sum}`);
}
//bai6  Write a script asking users to enter a sequence of numbers, the numbers are separated
//by commas, find the smallest number and log it out to users


{
let number1=prompt("pick number separated by commas");
let arr1=number1.split(",");

let min=arr1[0];
for(let i=0;i<=arr1.length;i++){
  if (arr1[i]<min)
 min=arr1[i]


}
alert('the min is'+min)
}
