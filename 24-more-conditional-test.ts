
// Equality and Inequality Test.
console.log("Equality test with string: " , "Apple" === "Apple");
// Equality and Inequality Test.
console.log("inequality test with string: " , ("Apple" as string) != "Orange");

// Tests using the lower case function.
console.log("Lower case function test " ,"HELLOW".toLowerCase() === "hellow");

// Numerical tests involving equality
console.log("Equilitt test with numbers: " , 26 === 26);
// Numerical tests involving inequality
console.log("Inequality test with numbers " , (26 as number) != 35);

// greater than and less than.
console.log("Greater than test " ,10 > 5);
// greater than and less than.
console.log("Less than test " ,5 < 10);
// greater than or equal to.
console.log("Greater than or equal to " ,10 >= 10);
// Less than or equal to.
console.log("less than or equal to test " , 5 <= 10);

// Tests using "and" operators
console.log("And Operators test: " ,5===5 && 10 > 5);
// Tests using  "or" operators
console.log("Or operators test " , 5===5 || false);

// Test whether an item is in a array
const fruits :string[] = ['Mango' , 'Banana' , 'Orange'];
console.log('Test Mango in the Array: ' , fruits.includes("Mango"));

// Test whether an item is not in a array
console.log('Testing "Apple" is not in Array: ' , !fruits.includes("Apple"));














