console.log("Hey Matthew!");

// you define variables with let, a variable name and then a value
let foo = 2;
console.log(foo);

// you can define the value of a variable after you declare the the variable exists!
let bar;
console.log("Bar is: " + bar); // should be undefined

bar = 3;
console.log("Bar is now: " + bar); // should be 3


// let's try multiplying
console.log(foo + ' * ' + bar + ' = ' + (foo * bar));

// now you do division!
console.log(foo + ' / ' + bar + ' = ' + (foo / bar));

printCubeNumber(bar);




function squareNumber(number){ // square a number
    return Math.pow(number,2); // return is what the function ends up being
}

console.log('3 squared is: ' + squareNumber(20)); // should be 9


function printSquareNumber(number){ // calls square number and prints the results
    console.log(squareNumber(number)); // no return necessary
}



// call printSquareNumber

function cubeNumber(number){
    return Math.pow(number,3);
}

function printCubeNumber(number){
    console.log(number + ' cubed is: ' + cubeNumber(number));
}


