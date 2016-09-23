//I will write a function that says hello
//This function will take one argument,
//called name,which is a string
function sayHello(name){
// console.log('Hello.'+ name);

}
//I will write some variables which will
//be strings of people's names.
var myName = 'Sumaiya';
var friendName = 'Shahzaib';

//Here I call the function say hello.
sayHello(myName);
sayHello(friendName);

//I will write  function that will greet a person
//The person will be passed to the function as an object
//The function will parse that object and greet the person
function greetPerson(person){
  //console.log('Hello, '+person.firstName+'. You are '+person.age+' years old.');

}
//I will take an object that describes me
var myObject = {
  firstName: 'Sumaiya',
  lastName: 'Ali',
  age: 22
}

//I will make another object that describes my friend
var friendObject = {
  firstName:'Shahzaib',
  lastName: 'Khan',
  age: 24
}
//I will call the greetPerson passssing myObject as its argument
greetPerson(myObject);
greetPerson(friendObject);

//I will now make an array of objects. Each object will describe a person.
var personList = [
  {
   firstName: 'Sumaiya',
   lastName: 'Ali',
   age: 22
 },
  {
   firstName:'Shahzaib',
   lastName: 'Khan',
   age: 24
 },
 {
   firstName: 'Masira',
   lastName: 'Ayub',
   age: 22
 },
 {
   firstName: 'Sanchita',
   lastName: 'Chodhary',
   age: 23
 }
];
//I will write a function that wil greet people
///It takes as its argument an array, and each item
//in the array is an object that describes a peson.
function greetPeople(list) {
  //I will loop through the items in my array with a for loop.
  for (var i = 0;i<list.length;i++) {
    //This variable is the current itemin the array that
    //the for loop is itirating to
    var currentPerson = list[i];

//Greet each person in turn.
//console.log('Hello, '+currentPerson.firstName+'. You are '+currentPerson.age+' years old.');





  }
}
//Call thegreet people function and pass personList to it.
greetPeople(personList);

//I will make a function that sorts peopleby age.
//This function takes an argument called list,
//which is an array of  people.
//where each person is an object.
function sortPeople(list){

//Create two arrays , one for older people and one for yonger people.
//These will be blank arrays, that we will populate our for each loop
var older = [];
var younger = [];
  //loop through array
list.forEach(function(d,i){

if (d.age < 30){
  younger.push(d);
} else {
  older.push(d);
}

})

//This function will returnour arrays as an object.
var buckets = {
  olderList: older,
  youngerList: younger
};
return buckets;
}


//call sort people and pass the person list to it.

sortPeople(personList);

//Make another array with more people
var morePeople = [
  {
    firstName: 'Tawakkul',
  lastName: 'Khan',
  age:24
},
  {
    firstName: 'Bilal',
    lastName: 'Ali',
    age: 25
    },
  {
    firstName: 'Joey',
    lastName: 'Tribbiani',
    age: 30
  },
];
//run the fnction again withn the new array
sortPeople(morePeople);
//create two variable where sorted people retrns sorted lists of people
var morePeopleSorted = sortPeople(morePeople);
var personListSorted = sortPeople(personList);
//isolate the younger list from sorted person list
var personListYounger = personListSorted.yongerList;
//console log the new lit and the original list to compare
console.log(personListYounger);
console.log(personList);
