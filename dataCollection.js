// Part 1

// const csvData="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// let rows= csvData.split("\n"); // here i am splitting the string into rows at the \n- creating arrays 
// console.log(rows);

// for (let row of rows){   //For every row that was created from the split
//     let cells=row.split(",") //Im splitting every element into cells that are separated by the comma (arrays from the arrays)
//     console.log(cells)
// } 


// Part2

// const csvData="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// let array= csvData.split("\n"); // here i am splitting the string into arrays at the \n
// // console.log(rows);

// let parentArray=[] // here i am creating a parent array to put my new arrays in. 

// for (let i = 0; i < array.length; i++) {
//        parentArray.push(array[i].split(","));
// }
// console.log(parentArray)

// Here i separated each item in the array into smaller arrays, separating them by the comma, and then all those arrays were pusehd (added) into my parent array.


// Part3

// let parentArray = [
//     ["ID", "Name", "Occupation", "Age"],
//     ["42", "Bruce", "Knight", "41"],
//     ["57", "Bob", "Fry Cook", "19"],
//     ["63", "Blaine", "Quiz Master", "58"],
//     ["98", "Bill", "Doctor’s Assistant", "26"]
// ];

// let dataObjects=[];

// for (let i = 1; i < parentArray.length; i++){ //start at one to exclude the headers
//     let object={}; //im creating the objects that will go into my "object arrays"
//     object.id = parentArray[i][0];
//     object.name = parentArray[i][1];
//     object.occupation = parentArray[i][2];
//     object.age = parentArray[i][3];
   
//     dataObjects.push(object); //im adding the objects in my object array 
   
// }
 
// console.log(dataObjects);
    

//Part4

// let dataObjects = 
// [{ id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
//  { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
//  { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
//  {id: '98', name: 'Bill', occupation: 'Doctor’s Assistant', age: '26'}
// ]

// //1  
// let lastDataObjects= dataObjects.pop([3]);
// console.log(lastDataObjects)
// console.log(dataObjects)

// //2 
// let insertObjects = dataObjects.splice(1,0,'{id: "48", name: "Barry", occupation: "Runner", age: "25"}');
// console.log(dataObjects);

// //3
// dataObjects.push ('{ id: "7", name: "Bilbo", occupation: "None", age: "111" }');
// console.log(dataObjects)

// //4
const dataObjects = 
[{ id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
 { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
 { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
 {id: '98', name: 'Bill', occupation: 'Doctor’s Assistant', age: '26'}
]

let sum=0;
for (let i = 0; i < dataObjects.length; i++) {
    let sum += dataObjects[.age];
    
}
//im completely lost on how to do this part. i dont know where to go from here. I know i am missing parts to go from the sum to finding the average by using the sum and dividing it by the index length of the object array, i just dont know how to get there.