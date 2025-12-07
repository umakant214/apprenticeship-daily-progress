//count vowel in string 
// let str="Welcome to MERN STACK ssddsa";
// let vowels='aeiouAEIOU';
// let count=0;
// for(let a of str)
// {
//     if(vowels.includes(a))
//     {
//         count++;
//     }
// }
// console.log(count);


//Reverse string
// let str="Amit Sir"
// let res=""
// for(let i=str.length-1;i>=0;i--)
// {
//     res+=str[i]
// }
// console.log(res);

//longest word
// let str='Welcome to techpile'
// let words=str.split(" ");
// let long=""
// for(let a of words)
// {
//     if(a.length>long.length)
//     {
//         long=words;
//     }
// }
// console.log(long);


//Removes spaces
// let str = "skdjs ndkasdd namjsqjk ";
// let result = str.split(" ").join(""); //split brack behave to seperator and join joining items without spaces 
// console.log(result);

//capitalize
// let str="My name Is umakant yadav"
// let result=str.toLocaleUpperCase();
// console.log(result);

//find largest number of array
// let arr=[1,3,23,4,56,6]
// let max=arr[0];
// for(let x of arr)
// {
//     if(x>max)
//     {
//         max=x;
//     }
// }
// console.log(max);


//sort arr
//let arr = [10, 20, 1,2,3,4];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
// }
// console.log(arr);

// arr.sort((a, b) => a - b);
// console.log(arr);


//sum of array
// let arr = [10, 20, 30];
// let sum = 0;

// for (let x of arr) sum += x;

// console.log(sum);

// //even number find'
// let arr=[2,3,3,566,3,65,232]
// let result=arr.filter((num)=>num%2==0)
// console.log(result);

// //merge two array and remove duplicates
// let arr1=[12,3,21,3,2]
// let arr2=[3,5,23,34,23];
// //let result=arr1.concat(arr2);   //using concat
// let merge=[...arr1,...arr2];
// let result=[...new Set(merge)]  //new set use for duplicates remove
// console.log(result);

// Count keys in object
// let obj = {a:1, b:2, c:3};
// let count = Object.keys(obj).length;
// console.log(count); //3 keys

//check key exists in an objects
// let obj = {name:"Rahul", age:20};
// console.log("age" in obj);

// 19. convert an obj key and value in different array
// let obj = {a:1, b:2, c:3};
// let keys = Object.keys(obj);  //find keys 
// let values = Object.values(obj); //find values
// console.log(keys);
// console.log(values);


//deep copy
// let obj = {a:1, b:{c:2}};
// let clone = JSON.parse(JSON.stringify(obj));
// console.log(clone);












