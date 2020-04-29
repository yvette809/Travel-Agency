
/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
//solution

let area = (L,W)=> {
    return L * W;
}
console.log(area(11,12));
  

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
//solution
function crazySum(a,b) {
    if (a === b){
        return 3 * ( a+b);
    }
    };
    console.log(crazySum(4,4));

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
//solution
function crazyDiff (a){
    let absDiff = a-19;
    if(absDiff > 19){
        return 3 * absDiff;
    };
};
console.log(crazyDiff(50));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
//solution
function boundary (N){
    if (20<=N<=100  || N === 400){
        return true;
    }
}
console.log(boundary(19));



/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */
function strivify(s) {
    
    let newstr = ['strive',s].join('')
    if(newstr.startsWith('strive')){
    return s;
   }

   
}
console.log(strivify('students'));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
function check3and7(n) {
    if ( n % 3 === 0 || n% 7 === 0){
        return true;
    }
}
console.log(check3and7(21));      

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
function reverseString(str){
    let revstr = str.split('').reverse().join('')
    return revstr;
}

console.log(reverseString('love'))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */
function upperFirst(str) { 
    const arr = str.split(" ");
    for( let i = 0; i < arr.length; i++){
      arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    
    
    return arr.join(" ");
    
    }
  

  console.log(upperFirst('nice day'));
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
function cutString(str) {

    let stringCut = str.slice(1,-1)
    return stringCut;
}

console.log(cutString('yvette')) 
 /*sol 2
 function cutString(paramsstr) {
     let stringCut = str.substring(1,str.length-1)
     return stringCut;
 }
 console.log(stringCut);*/

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */
function giveMeRandom (n){
    return Math.floor(Math.random() * n) 
}

console.log(giveMeRandom(11));


/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
