// A Regular Expression (or Regex) is a pattern (or filter) that describes a set of strings
// that matches the pattern. In other words, a regex accepts a certain set of strings and rejects the rest.


Eg : 1
/*
let regexObj = /world/
// checks if the word 'world' is included

let str = "Hello world"

console.log(regexObj.test(str)); 
*/



// Flag : i : checking string even for case-insensitive matching

Eg : 2
/*
let regexObj = /world/i

let str = "Hello world"

console.log(regexObj.test(str)); 
*/


Character_Class1: '[]'
// Match any one character from this set.
// /[aeiou]/  : A character class that matches any one vowel.
// We can specify range range using '-', eg: /[a-z] world/

/* let regexObj = /[a-z] world/i; 

let str = "Hello z World";

console.log(regexObj.test(str)); */


Input_boundary_beginning_assertion__Start_of_string_anchor: '^'
// checks if the string starts with provided word

/* let regexObj = /^Hello world/i; 

let str = "Hello World";

console.log(regexObj.test(str)); */



Input_boundary_beginning_assertion__End_of_string_anchor: '$'
// checks if the string ends with provided word

/* let regexObj = /Hello world$/i; 

let str = "Hello World";

console.log(regexObj.test(str)); */


Quantifier__Zero_or_One : '?'
// Matches 0 or 1 occurrences of the previous character or group.

Eg: 1
/* let regexObj = /colou?r/i; 

let str = "following color";

console.log(regexObj.test(str)); */


Eg: 2
/* let regexObj = /catalog(ue)?/i; 

let str = "any cotalog";

console.log(regexObj.test(str)); */



Negated_Character_Class: '[^]'
// /[^abc]/  : A character class that doesn't match any one character from abc.

/* let regexObj = /[^abc] world/i; 

let str = "Hello z World";

console.log(regexObj.test(str)); */



Wirldcard_Character_Class: '.'
// /^hello.world$/ : The . in the regex only matches a single character, 
// meaning: It expects exactly one character between "hello" and "world".

/* let regexObj = /^hello.world$/i; 

let str = "Hello world";

console.log(regexObj.test(str)); */


Digit_character_class_escape: '\d'
// Matches any digit. Equivalent to [0-9]

/* let regexObj = /^hello.\dworld$/i; 

let str = "Hello 1world";

console.log(regexObj.test(str)); */



Non_Digit_character_class_escape: '\D'
// Denies any digit.

/* let regexObj = /^hello.\Dworld$/i; 

let str = "Hello 1world";

console.log(regexObj.test(str)); */



quantifier__lazy_one_or_more_quantifier : '+'
// Matches one or more occurrences of the previous character or group.
// /a+/ matches the "a" in "candy" and all the "a"'s in "caaaaaaandy"
// One-or-more quantifier

/* let regexObj = /a+/i; 

let str = "candy";

console.log(regexObj.test(str)); */



quantifier__lazy_zero_or_more_quantifier : '+'
// Matches zero or more occurrences of the previous character or group.
// /a*/ matches the "a" in "candy" and all the "a"'s in "caaaaaaandy"
// One-or-more quantifier

// let regexObj = /a*/i; 

// let str = "candy";

// console.log(regexObj.test(str));



quantifier__atleast_quantifier : '{min,max}'
// It means the preceding element must appear at least x times, but with upper limit.
// upper limit can be ignored

/* const regex = /a{2,}/;
console.log("aa".match(regex));
console.log("aaa".match(regex));
console.log("a".match(regex)); */



Eg: 1
/* 
const mobileRegex = /^[789]\d{9}$/;

console.log(mobileRegex.test("9876543210")); 
*/

Eg: 2

/*
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

console.log(emailRegex.test("admin@gmail.com")); 
*/







