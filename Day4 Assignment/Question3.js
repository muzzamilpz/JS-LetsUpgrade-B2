//  3&4 question

//array of objects are created
let arrObj = [
  {
    name: "Abdul",
    age: 19,
    country: "India",
    hobbies: ["playing cricket", "watching WWE", "Coding"],
  },
  {
    name: "Kazi",
    age: 15,
    country: "USA",
    hobbies: ["playing Baseball", "watching NBA", "studying"],
  },
  {
    name: "Kohli",
    age: 32,
    country: "India",
    hobbies: [" playing cricket", "watching FootBall", " playing IPL"],
  },
  {
    name: "DR.Mashoor Gulati",
    age: 43,
    country: "India",
    hobbies: ["dancing", "listening music", "cracking jokes"],
  },
  {
    name: "Anne",
    age: 28,
    country: "UK",
    hobbies: ["Singing songs", "Writing songs", " praticing Karate"],
  },
  {
    name: "Zumba",
    age: 12,
    country: "Africa",
    hobbies: ["playing pubg with pubg gangs", "playing chess", "reading books"],
  },
];
console.log("the object are displayed here");
function displayall() {
  //to display obects
  for (let i = 0; i < arrObj.length; i++) {
    console.log(arrObj[i]);
  }
}
displayall(); //function calling
console.log("object with age above 18 are displayed here");
function displayabove18() {
  //display object whose member age is above 18
  for (let i = 0; i < arrObj.length; i++) {
    if (arrObj[i].age > 18) {
      console.log(arrObj[i]);
    }
  }
}
displayabove18();
//function calling
console.log("here the object with country india are displayed");

function countryInd() {
  //display objects whose member country is "India"
  for (let i = 0; i < arrObj.length; i++) {
    if (arrObj[i].country.search("India") == 0) {
      console.log(arrObj[i]);
    }
  }
}
countryInd(); //function calling
