

// arr = []  //empty array - no elements present

// const { SimpleLocationModule } = require("@faker-js/faker")
// const { push } = require("node:stream/iter")

// arr2:number = [1,3,7,5,6]  //homogeneous array same kind of data type element

// arr3 = ["raju", 12, "Bangalore", undefined, null,{city: "APT",pincode:560077}]

// //index number starts from 0
// //console.log(arr3[0])
// //console.log(arr3[1])
// //console.log(arr3[2])
// //console.log(arr3[3])
// //console.log(arr3[5])
// //console.log(arr3[5].pincode)
// console.log(arr3[5])

// //.length   (length is inbuilt method in javascript)

// console.log(arr.length)

// arr4 =[3,10,34,56,76,18,45,34,76,89,4]

// //console.log(arr4[arr4.length-1])
// console.log(arr4[arr4.length-3])
// console.log(arr4)

// const arr =["admin", "admin123"]

// arr[1]= "apple"

// console.log(arr)

// const creds = {

//     username : "Admin",
//     password : "admin123"
// }

// // creds ['username'] = "apple"

// creds ['password'] = "apple"

// console.log(creds)

//await pageXOffset.locator(xpath).allTextcontents()

//25+ methods 
//  .sort()
//  .reverse()
//  .push()
//  .popu()
//  .shift()
//  .unshift()
//  .includes()
//  .splice()
//  .slice()
//  .find()
//  .indexOf()

// arr6 = ["car", "bike"]

// arr6.push("train")
// arr6.push("lorry")

// console.log(arr6)

// arr=[]
// test{

//     arr.push("BMW")
// }
// test{

//    file(arr[0])
// }

// arr6.pop()
// arr6.pop()
// console.log(arr6)

// arr7 =["India", "europ"]
// arr7.unshift("australia") 
// arr7.unshift("africa", "Dubai")


// arr7.shift()
// arr7.shift()
// console.log(arr7)

// arr8 = ['dubai','africa','australia','europ','india']
// arr8 = ['dubai','Africa','australia','europ','India']
arr8 = ['dubai','Africa', 'india','australia','europ','India']

//arr9 = arr8.sort()

//console.log(arr9)

arr10 = arr8.reverse()
console.log(arr10)

//Includes- true or false

arr8 = ['dubai','Africa', 'india','australia','europ','India']

console.log(arr8.includes("dubai"))
//console.log(arr8.includes("mumbai"))

menuitems = [
  'Admin',       'PIM',
  'Leave',       'Time',
  'Recruitment', 'My Info',
  'Performance', 'Dashboard',
  'Directory',   'Maintenance',
  'Claim',       'Buzz'
]

console.log(menuitems)
//convert string to array
// str = "Manjusri".split("")

// str1 = "The nature gives a lot of piece to us".split("n")

// console.log(str1)

// // arr = ['The', 'nature', 'gives', 'a', 'lot', 'of', 'piece', 'to', 'us'].join(" ")

// // arr = ['The', 'nature', 'gives', 'a', 'lot', 'of', 'piece', 'to', 'us'].join("")

// arr = ['The', 'nature', 'gives', 'a', 'lot', 'of', 'piece', 'to', 'us'].join()

// //convert array to string

// console.log(arr)

// menuitems = [
//   'Admin',       'PIM',
//   'Leave',       'Time',
//   'Recruitment', 'My Info',
//   'Performance', 'Dashboard',
//   'Directory',   'Maintenance',
//   'Claim',       'Buzz'
// ].sort()

// console.log(menuitems)


// str ="India"

// revstr = str.split("").reverse().join("")

// if(str== revstr){

//     console.log("given string is palindrome")
// }
// else
// {
//     console.log("given string is not a palindrome")
// }


// str1 = "mary"
// str2 = "army"

// str3 = str1.split("").sort().join("")

// str4 = str2.split("").sort().join("")
// if(str3 == str4){
//         console.log("given strins are anagrams")
// }

// str = "Username : Admin"

// username = str.split(" ")[2]


// menuitems = [
//   'Admin',       'PIM',
//   'Leave',       'Time',
//   'Recruitment', 'My Info',
//   'Performance', 'Dashboard',
//   'Directory',   'Maintenance',
//   'Claim',       'Buzz'
// ]

// x = menuitems.indexOf("PIM")

// console.log(x)

// menuitems[x] = "Robert"

// console.log(menuitems)

//splice()

//splice(staetindex,deletecount,items1, items2)

menuitems = [
  'Admin',       'PIM',
  'Leave',       'Time',
  'Recruitment', 'My Info',
  'Performance', 'Dashboard',
  'Directory',   'Maintenance',
  'Claim',       'Buzz'
]

//menuitems.splice(1, 6)
//menuitems.splice(1, 6, "cat", 'ant')
// startIndex =included
// endIndex =excluded
Extracted = menuitems.slice(3,7)

console.log(Extracted)

//map
//reduce
arr = ["carrot", "beetroot", "cucumber"]

arr2 = arr.map(element => element+"DBSQA")

console.log(arr2)

arr3 = [2,6,10] 

arr4 = arr3.map(element => element/2)

console.log(arr4)

//filter

//arr5 = ["T20", "RCB", "IPL", "worldcup"]
arr5 = ["i20", "bmw", "innova", "thar", "mahindra"]

arr6 = arr5.filter(element => element.includes("i"))

console.log(arr6)

arr7 = [1,3,6,8,2,32,24,16,17,19,20,25,45,83,94]

//arr8 = arr7.filter(element => element>50)
// arr8 = arr7.filter(element => element%2 !==0)
arr8 = arr7.filter(element => element==1 || element==4)
console.log(arr8)

// array.reduce((accumulator, currentValue) =>{

//     return updateAccumulator;

// }, initialValue);

// arr9 = menuitems.concat(numbers)
// console.log(arr9)



