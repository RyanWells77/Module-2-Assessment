///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, price) => acc + price.price, 0) // This call back function takes two paramaters the accumulator and the value in the stated element. it then adds the two to gether. I have stated that the accumulator should start with the value of 0

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = ((cartTota, cuponValue, tax) => cartTota * (tax + 1) - cuponValue)

console.log(calcFinalPrice(25, 5, .08)) // checking the math and function if it works properly

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    The object shuld contain the customers name  what they ordered how much they ordered and the price of the item(s) ordered

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customerInfo = {

    name: "",  // this string is empty expecting to be filled with a potential  customer name
    item: "", // this string is empty till the customer orders and item
    quantity: [], // this array is empty till a quantiy has been ordered
    price: [], // this array is empty till filled with the price of the item ordered
}
