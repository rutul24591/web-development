# JAVASCRIPT

JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

## Javascript Interview Questions

1. What is the difference between `==` and `===` in javscript?

	The main difference between the `==` and `===` operator in javascript is that the == operator does the 	type 	conversion of the operands before comparison, whereas the === operator compares the values as well 	as the data types of the operands.
	
2. Which one is faster between `==` and `===` in javascript?

	`===` compares if the values and the types are the same. `==` compares if the values are the same, but it 	also does type conversions in the comparison. Those type conversions make `==` slower than `===`.
	
3. What are the different types in javascript?
		
			string
			number
			object
			boolean
			function
			null
			undefined
			symbol
			

4. What is the use of `typeof` in javascript?
	
	`typeof` is used to know the types of variable in javascript.
	
	Example:
	
		typeof "John"                 // Returns "string"
		typeof 3.14                   // Returns "number"
		typeof NaN                    // Returns "number"
		typeof false                  // Returns "boolean"
		typeof [1,2,3,4]              // Returns "object"
		typeof {name:'John', age:34}  // Returns "object"
		typeof new Date()             // Returns "object"
		typeof function () {}         // Returns "function"
		typeof myCar                  // Returns "undefined" *
		typeof null                   // Returns "object"

5. What is hoisting in javascript?
6. What is event bubbling?
7. Explain variable scope in javascript?
8. What is the difference between `let`, `const` and `var` in javascript?
9. What are callbacks?
10. Explain the concept of callback hell?
11. What are promises? List the advantages?
12. What are function generators in javascript?
13. What is the difference between `call`, `bind` and `apply` in javascript?
14. What are closures in javascript?
15. Is javascript a statically typed or a dynamically typed language?
16. What is NaN property in JavaScript?
17. Explain passed by value and passed by reference.
18. How to invoke a function immediately?
19. What are higher order functions in javascript?
20. What is currying in javascript?
21. What are object prototypes in javascript?
22. What is an arrow function?
23. Explain some differences between ES5 and ES6?
24. What is rest `(...)` operator in javascript do?
	
	Rest Operator provides an improved way of handling the parameters of a function.
	Using the rest parameter syntax `...`, we can create functions that can take a variable number of arguments.
	Any number of arguments will be converted into an array using the rest parameter.
	
	Example:
	
	```
		function extractingArgs(...args){
		  return args[1];
		}

		// extractingArgs(8,9,1); // Returns 9

		function addAllArgs(...args){
		  let sumOfArgs = 0;
		  let i = 0;
		  while(i < args.length){
		    sumOfArgs += args[i];
		    i++;
		  }
		  return sumOfArgs;
		}

		addAllArgs(6, 5, 7, 99); // Returns 117
		addAllArgs(1, 3, 4); // Returns 8
	```
	
	**Note**- Rest parameter should always be used at the last parameter of a function:
25. What is spread operator `(...)` in javascript?

	The spread operator is used to spreading an array, and object literals. We also use spread operators 	where one or more arguments are expected in a function call.
	
	Example:
	
	```
	let array1 = [3, 4, 5, 6];
	
	// Spreads the array into 3,4,5,6
	let clonedArray1 = [...array1];
	
	console.log(clonedArray1); // Outputs [3,4,5,6]
	```
26. What is temporal dead zone?

	Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords. It 	is a behaviour where we try to access a variable before it is initialized.
	
	Example:
	
	```
	x = 23; // Gives reference error

	let x;
	
	function anotherRandomFunc(){
	  message = "Hello"; // Throws a reference error
	
	  let message;
	}
	anotherRandomFunc();
	```
27. How to destructure in javascript?
	
	 Object destructuring is a new way to extract elements from an object or an array.
	 
	 - Object destructuring: Before ES6 version:
	 
	 	```
		const classDetails = {
		  strength: 78,
		  benches: 39,
		  blackBoard:1
		}

		const classStrength = classDetails.strength;
		const classBenches = classDetails.benches;
		const classBlackBoard = classDetails.blackBoard;
		```
	 -	Using object destructuring
	 	
	 	```
	 	const classDetails = {
		  strength: 78,
		  benches: 39,
		  blackBoard:1
		}
		const {strength, bencches, blackBoard} = classDetails;
		
		OR
		
		const {strength:classStrength, benches: classBenches,blackBoard: classBlackBoard} = classDetails;
	 	``` 
28. Is javascript `pass-by-value` or `pass-by-reference`?
	 
	 JavaScript is always pass-by-value. This means everything in JavaScript is a value type and function 	 arguments are always passed by value. That being said, object types are a bit more confusing. 
	 The confusion lies in the fact that object types are reference types which are passed by value.
	 