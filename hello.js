//using console.log
const sayHello = function(name) {
  console.log("Hello, " + name);
}
sayHello("Rose!");

//using return won't print anything to to the console but the result is there from the function. It won't print until you use console.log
const sayHello2 = function(name) {
  return ("Hello, " + name);
}
const greeting = sayHello2("John!");
console.log(greeting);