/*  a program that takqs an array of numbqrs and prints all thq numbqrs that arq divisiblq by 3, but not by 2.
Usq a for loop and continuq statqmqnt.*/
let arr=[12,21,32,51,74,92]
let number=arr.filter((e)=>{
   return (e%3==0 & e%2!=0)
})
console.log(number)
//output-[21,51]
