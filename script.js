//COMM644 Assignment 4

//Practice with JavaScript OOP Concepts (20 points)

//STEP 1
/*
var ANIMAL = ANIMAL || {};
var Cat = ANIMAL.cat;
var Dog = ANIMAL.dog;
*/

//STEP 2
/*
var Cat = {};
var Dog = function() {}; 
*/

//STEP 3 
/*
var myDog = new Dog (); 
*/

//STEP 4
/*
function Animal(){
     return "The Animal has been created";
}
var myAnimal = Animal();
window.console.log(myAnimal);
*/

//STEP 5
/*
function Animal(animal) {
    this.animal = animal;
    window.console.log(this.animal);
}
var myAnimal = new Animal("Elephant");
*/

//STEP 6
/*
function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
window.console.log(this.type + "\n" + this.breed + "\n" + this.color + "\n" + this.height + " " + "inches tall" + "\n" + this.length + " " + "inches long");
}
var myAnimal = new Animal("Cat", "Korat", "Blue", 5.5, 15);
*/

//STEP 7
/*
function Animal (type, breed, color, height, length) {
    this.type = type,
    this.breed = breed,
    this.color = color,
    this.height = height,
    this.length = length;    
for (var index in Animal){
        
    }  
}var myAnimal = new Animal("Cat", "Korat", "Blue", 5.5, 15);
window.console.log(myAnimal);
*/

//STEP 8
/*
function Animal (type, breed, color, height, length) {
    this.type = type,
    this.breed = breed,
    this.color = color,
    this.height = height,
    this.length = length;
Animal.prototype.speak = function (){
  if (type == "cat"){
      return "The " + this.color + " " + this.type + " is meowing!";
  }else if (type == "dog"){
     return "The " + this.color + " " + this.type + " is barking!"; 
  }else{
      return "The " + this.type + " is not speaking!";
  }
};
}
var myAnimal = new Animal("dog", "terrier", "white", 12, 20);
window.console.log(myAnimal.speak());
var myAnimal = new Animal("cat", "korat", "blue", 5.5, 15);
window.console.log(myAnimal.speak());
var myAnimal = new Animal("trout", "rainbow", "silver", 0.5, 6);
window.console.log(myAnimal.speak());
*/


//STEP 9 
/*
function Animal (type, breed, color, height, length) {
this.breed = breed,
this.color = color,
this.height = height,
this.length = length;
//create private property for animal type
var animalType = type;
var returnAnimalType = function() {
return animalType;
};    
// create public function checkType
this.checkType = function() {
//If it's a dog return "dog". Otherwise return "cat". 
    if (animalType == "dog"){
      return "dog";
  }else{
      return "cat";
  } 
  };
}
//elephant should return cat b/c it's not "dog"
var myAnimal = new Animal ("elephant", "african", "grey", 14, 18);
//create public method 'speak'
var myTypeMethod = myAnimal.checkType();
var speak = myTypeMethod;
window.console.log("The " + speak + " has made a noise!");
*/

//STEP 10
/*
function findWords() {
    var str = "";
    for (var i = 0; i < this.length; i++){
      str = str.count("time");
    }
    return str;
}
var message = "time after time";
window.alert(message.str);
*/

//The Recipe Card (15 points)
/*
function recipe (){
    var title = "Vin De Noix Recipe";
    var servings = 5;
    var ingredients = ["- 5 lbs. Green Walnuts cut and quartered", "- 5 ltr. red wine (use inexpensive boxed wine)", "- 750 ml. Brandy", "- 5 lbs. sugar"];
 {
    return title + "\n" + "Makes: " + servings + " gallons" + "\n" + ingredients[0] + "\n" + ingredients[1] + "\n" + ingredients[2] + "\n" + ingredients[3] + "\n"; 
  }
}
var myRecipe = recipe ();
window.console.log(myRecipe);
*/

//The Reading List (15 points)
/*
var bookList = [
    {title: "Mobey Dick",
        author: "Herman Melville",
        alreadyRead: true},
    {title: "To Kill a Mockingbird",
        author: "Harper Lee",
        alreadyRead: true},
    {title: "Love in the Time of Cholera",
        author: "Gabriel Garcia Marquez",
        alreadyRead: true},
    {title: "Lolita",
        author: "Vladimir Nabokov",
        alreadyRead: true},
    {title: "War and Peace",
        author: "Leo Tolstoy",
        alreadyRead: false},
    {title: "Ulysses",
        author: "James Joyce",
        alreadyRead: false},
    {title: "Don Quixote",
        author: "Miguel De Cervantes Saavedra",
        alreadyRead: false},
    {title: "Othello",
        author: "William Shakespeare",
        alreadyRead: false},
];
for (var i = 0; i < bookList.length; i++) {
  var book = bookList[i];
  var bookListDetails = book.title + "\" by " + book.author + ".";
  if (book.alreadyRead) {
    window.console.log("You've already read \"" + bookListDetails);
  } else {
    window.console.log("You haven't read \"" + bookListDetails);
  }
}
*/


    



