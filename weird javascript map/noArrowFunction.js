function sayHi(element) {
    console.log(element);
}


const testArray = [0,1,2,3,4];
  
function call() {
  const newArray = testArray.map(sayHi); //we are passing to the map function one function, and we're not even inputting anything, yet it is able to console.log each element in the array
  console.log(newArray); //remember map automatically returns a new array whether you actually do something to the elements in the old array or not.
}

call();