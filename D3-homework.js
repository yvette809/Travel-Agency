/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/


/* WRITE YOUR CODE HERE */
let numbers = [1,2,3,4,5]

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
const myInfo = {
    name:'Yvette',
    surname:'Tanila',
    emailAddress:'nchombuayvta@gmail.com',
    age: 33
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */
myInfo.drivingLicence = false;

/* EXERCISE 4
Remove from the previously created object the age
*/
delete myInfo.age;
console.log(myInfo);


/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */
const myInfo2 = {
    name:'Yvette',
    surname:'Tanila',
    emailAddress:'evebabe2006@yahoo.com'
    
};
if(myInfo.emailAddress === myInfo2.emailAddress){
    console.log('The email address is the same')
}else{
    console.log('the email address is different');
}

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCart = 60;
let shippingCost = 10;
const totalCost = totalShoppingCart + shippingCost
newtotalCostForOrdersAbove50 = totalCost- shippingCost
if (totalShoppingCart > 50){
    console.log(newtotalCostForOrdersAbove50);
}else{
    console.log(totalCost)
}



};
/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */
const car = {
    brand:'volvo',
    model:1997,
    licencePlate:"UOM12356",
};
const carDuplicate = {};
Object.assign(carDuplicate,car)
carDuplicate.licencePlate = "AUD14567"
console.log(carDuplicate);

const carDuplicate1 = {};
Object.assign(carDuplicate1,car)
carDuplicate1.licencePlate = "ROD14567"
console.log(carDuplicate1);

const carDuplicate2 = {};
Object.assign(carDuplicate2,car)
carDuplicate2.licencePlate = "SBA1234A"
console.log(carDuplicate2);

const carDuplicate3 = {};
Object.assign(carDuplicate3,car)
carDuplicate3.licencePlate = "AC55ABC"
console.log(carDuplicate3);

const carDuplicate4 = {};
Object.assign(carDuplicate4,car)
carDuplicate4.licencePlate = "MLB803"
console.log(carDuplicate4);

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */
const carsForRent = ['car','carDuplicate','carDuplicate1','carDuplicate2','carDuplicate3','carDuplicate4'];

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
carsForRent.shift();
carsForRent.pop();
console.log(carsForRent);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/
console.log(typeof car);
/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */
const carsForSale = ['Audi','posche', 'volvo'];
let totalCars = carsForSale.length + carsForRent.length
console.log(totalCars);
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */
for (let i = 0; i<carsForSale.length; i++){
    console.log(carsForSale[i]);
}

/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/
