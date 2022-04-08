function sayHi(element) {
    console.log(element);
}


const testArray = [0,1,2,3,4];
  
function call() {
  const newArray = testArray.map(element => sayHi(element)); //we are passing to the map function two functions, an anonymous arrow function which then calls our sayHi function and is able to pass in each element.
  console.log(newArray); //remember map automatically returns a new array whether you actually do something to the elements in the old array or not.
}

call();