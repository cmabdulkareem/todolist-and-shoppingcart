// A Regular Expression (or Regex) is a pattern (or filter) that describes a set of strings
// that matches the pattern. In other words, a regex accepts a certain set of strings and rejects the rest.



/*
let regexObj = /world/
// checks if the word 'world' is included

let str = "Hello world"

console.log(regexObj.test(str)); 
*/



/* let regexObj = /world/i
// i is a flag that stands for case-insensitive matching. When this flag is used, 
// the pattern will match letters regardless of whether they are uppercase or lowercase.

let str = "Hello World"

console.log(regexObj.test(str));  */



/* let regexObj = /[abc] world/i; 
// The pattern matches any string where 'a', 'b', or 'c' appears as a single character 
// followed by ' world' (case-insensitive due to the 'i' flag).

let str = "Hello c World";

console.log(regexObj.test(str)); */



/* let regexObj = /[a-z] world/i; 
// The pattern matches any string where a single letter (a to z) appears 
// immediately before " world" (case-insensitive due to the 'i' flag).
// The '-' inside [a-z] specifies a **range**, meaning it includes all letters from 'a' to 'z'.

let str = "Hello z World";

console.log(regexObj.test(str)); */



/* let regexObj = /[a-zA-Z0-9] world/i; 
// The pattern matches any string where a single letter (a to z) appears 
// immediately before " world" (case-insensitive due to the 'i' flag).
// The '-' inside [a-z] specifies a **range**, meaning it includes all letters from 'a' to 'z'.

let str = "Hello 8 World";

console.log(regexObj.test(str)); */



/* let regexObj = /^Hello/i; 
// The pattern matches any string that **starts with** "Hello" (case-insensitive due to the 'i' flag).
// The '^' (caret) at the beginning ensures that "Hello" must appear at the **start** of the string.

let str = "Hello World";

console.log(regexObj.test(str)); // Output: true */



/* let regexObj = /World$/i; 
// The pattern matches any string that **ends with** "World" (case-insensitive due to the 'i' flag).
// The '$' (dollar) at the end ensures that "World" must appear at the **end** of the string.

let str = "Hello World";

console.log(regexObj.test(str)); */



/* let regexObj = /Worlds?$/i; 
// The pattern matches any string that **ends with** "World" or "Worlds" (case-insensitive due to the 'i' flag).
// The '$' (dollar) at the end ensures that "World" or "Worlds" must appear at the **end** of the string.
// The 's?' means that the 's' is optional, so it matches both "World" and "Worlds".

let str = "Hello World";

console.log(regexObj.test(str));  */



/* let regexObj = /World(es)?$/i; 
// The pattern matches any string that **ends with** "World" or "Worlds" (case-insensitive due to the 'i' flag).
// The '$' (dollar) at the end ensures that "World" or "Worlds" must appear at the **end** of the string.
// The '(es)?' means that the "es" is optional, so it matches both "World" and "Worlds".
// The '?' makes the "es" optional, allowing the match to occur with or without the "s" at the end.

let str = "Hello World";

console.log(regexObj.test(str)); */



/* let regexObj = /^Hello.*world$/i; 
// The pattern matches any string that:
// - starts with "Hello" (case-insensitive due to the 'i' flag)
// - ends with "world"
// - anything (or nothing) can be between "Hello" and "world" (due to '.*')

// ^ ensures the string starts with "Hello"
// .* allows any characters (including spaces or special characters) between "Hello" and "world"
// $ ensures the string ends with "world"

let str = "Hello beautiful world";

console.log(regexObj.test(str)); */



/* let regexObj = /Worlds*$/i; 
// The pattern matches any string that **ends with** "World" followed by zero or more 's' characters 
// (case-insensitive due to the 'i' flag).
// The '$' (dollar) at the end ensures that "World" (with or without 's') must appear at the **end** of the string.
// The 's*' means that there can be zero or more occurrences of the character 's' after "World".

let str = "Hello World";

console.log(regexObj.test(str)); */



/* let regexObj = /Worlds+$/i; 
// The pattern matches any string that **ends with** "World" followed by zero or more 's' characters 
// (case-insensitive due to the 'i' flag).
// The '$' (dollar) at the end ensures that "World" (with or without 's') must appear at the **end** of the string.
// The 's+' means that there can be one or more occurrences of the character 's' after "World".

let str = "Hello World";

console.log(regexObj.test(str)); */



/* let regexObj = /World.$/i; 
// The pattern matches any string that **ends with** "World" followed by exactly **one character** 
// (case-insensitive due to the 'i' flag).
// The '$' (dollar) at the end ensures that "World" must appear at the **end** of the string.
// The '.' (dot) matches any single character after "World".
// The 'i' flag makes the match **case-insensitive**.

let str = "Hello World";

console.log(regexObj.test(str));  // Output: true (ends with "World" followed by a space) */



let regexObj = /^[a-z][a-z0-9_]*$/i; 
// The pattern matches any string that:
// 1. Starts with a lowercase letter (a-z) or an uppercase letter (due to the 'i' flag).
// 2. The rest of the string can contain lowercase letters (a-z), numbers (0-9), or underscores (_).
// 3. The string must match from the start (^) to the end ($), ensuring the entire string follows the pattern.
// 4. The 'i' flag makes the match **case-insensitive**, allowing for both lowercase and uppercase letters.

let str = "HelloWorld";

console.log(regexObj.test(str));  // Output: true (valid identifier-like string)

// Additional Example:
let str2 = "hello_world123";
console.log(regexObj.test(str2));  // Output: true (valid identifier-like string)

let str3 = "Hello World"; 
console.log(regexObj.test(str3));  // Output: false (contains a space, which is not allowed)

















 