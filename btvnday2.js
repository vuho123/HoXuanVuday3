//7 numbers, starting from 0
for(let i=0;i<=7;i++){
    console.log(i)

}
//n numbers, starting from 0,
const number2= prompt("n=")
for(let i=0;i<=number2;i++){
    console.log(i)

}
//A sequence of numbers, starting from 3, ending before n
const number3= prompt("enter m")
for(let i=3;i<=number3;i++){
    console.log(i)
}
//A sequence of numbers, starting from c, ending before n
const number4= prompt("enter b")
const number5= prompt("enter c")
for(let i=number4;i<=number5;i++){
    console.log(i)
}
//Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n)
let number6= prompt("pick 1 number")
let factorial1=1
for(let i=1;i<=number6;i++){
    factorial1=factorial1*i
}
alert("the factorial is"+factorial1)
//Write a program asking users their age, and then decide if they are old enough to view a 14+ content
let old= prompt("how old are you?")
if(old>14){
    alert("you can see this content")
}
else alert("you cant see this content")
//Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0-9
let i=prompt("write a number")
if(i>5){
    alert("higher half of 9")
}
else{
    alert("lower half of 9")
}
//Write a program asking user to enter two numbers, x and n, then check if x is in lower half of higher half of n


let number7= prompt("pick a number")
let number8=prompt("pick number")
if(number7>number8/2){
    alert("higher half of" + number8)
}
else{
    alert("lower half of" + number8)
}
//Write a script to check if a number is even (divisible by 2) or odd number
let i= prompt("pick number i")
if(i%2==0){
    alert(i+"is an even number")
}
else{
    alert(i+"is an odd number")
}
//calculate the BMI
let number9 = prompt("what is your weight in kilogram")
let numnber10=prompt("what is your height in m")
const BMI= number9/(numnber10*numnber10)
if(BMI<16){
    alert("underweight")
}

else if(BMI<25){
    alert("Normal")
  }
 else if(BMI<18.5){
     alert("s underweight")
 }
 else if (BMI<30){
     alert("overweight")
 }
 else
 alert("Obese")
//9a
const number15 = 6
number16 = Math.round(number15 / 2);
for (let i = 0; i < number16; i++) {
  console.log("L");
}
for (let i2 = number16; i2 < number15; i2++) {
  console.log("H");
}
//n L’s and H’s in total, n entered by user
let number17 = prompt("enter the total number ")
number18= Math.round(number17/2)
for(let i3=0;i3<=number18;i3++){
     console.log("F")
}
for(let i4=number18;i4<number17;i4++){
    console.log("G")
}
