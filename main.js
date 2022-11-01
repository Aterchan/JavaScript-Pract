// // Array.map()
// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);

const characters = [
    {
        name: 'Terry Chan',
        heigh: '172',
        mass: '65',
        eyeColor: 'white',
        gender:'male',
        age:'26',
    },

    {
        name: 'Achot Ariik',
        heigh: '172',
        mass: '75',
        eyeColor: 'white',
        gender:'female',
        age:'28',
    },

    {
        name: 'Sammy Kachuol',
        heigh: '170',
        mass: '69',
        eyeColor: 'blue',
        gender:'male',
        age:'35',
    },
];

// //***Map***
// //1. Get all array of all names
// const names = characters.map((characters) => characters.name);

// console.table(names)
const genders =characters.map((characters)=> characters.gender);
console.log(genders)
// //2. Get all array of all heights
// const heights = characters.map((characters) => characters.heigh);
// console.table(heights)

// //3. Get array of objects with just name and height properties
//  const minifiedRecords =characters.map((characters) => ({
//     name:characters.name,
//     heigh:characters.heigh
// }));
// console.log(minifiedRecords)

// //4. Get array of the all first name
// const firstNames =characters.map((characters) => characters.name.split(" ")[0]);
// console.table(firstNames)

// const minifiedObjects=characters.map((characters) =>({
//     name:characters.name,
//     age:characters.age
// }));

// console.log(minifiedObjects);
// // Objects
// var person ={
//     name:'Terry',
//     Age:25,
//     likesCoding:true
// };
// console.log(delete person.Age);

// person.hobbies =['hiking','travel','reading'];
// console.log(person.hobbies);

// // Dot notation
// let obj = {
//     cat:'meow',
//     dog:'woof',
// };

// let sound =obj.cat
// console.log(sound);

// // Bracket notation with variables
// let dog='cat'
// let sound1=obj[dog];
// console.log(sound);

// Iterating through Objects
// const myObject = {
//   name: "MyName",
//   age: 12,
//   country:"Kenya"
// };
// for (var key in myObject) {
//   let element = myObject[key];
//   element= element+1
//   console.log(element);
// }

// let q= "Hello"
// q="Rama"
// console.log(q);
// // Adding a new property to person object
// let person = {
//   name: "John",
//   age: 22,
// };
// person.age=40
// person.hobbies = ["Hiking", "Travel", "Reading"];
// console.log(person);


// //Return a Value from a Function with Return

// function plusThree(num) {
//   return num + 3;
// }
// const answer = plusThree(5);
// console.log(answer)


// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

// function timesFive(num){
//   return num * 5;
// }
// const answer =timesFive(5);

// console.log(answer)

// Use Conditional Logic with If Statements
function test (myCondition){
  if(myCondition){
    return "It was true"
  }
     { return "It was false"
    
    }
}
test(true)
test(false)


// Create an if statement inside the function to return Yes, 
// that was true if the parameter wasThatTrue is true and return No, 
// that was false otherwise.
function trueOrFalse(wasThatTrue) {
  if(wasThatTrue){
    return "Yes";
  }
  {
    return "No";
  }


  // Only change code below this line



  // Only change code above this line

}
const result= trueOrFalse(false)
console.log("Resulst is : ",result)