/* JavaScript guidelines suggest using camelCase for variable and function names, e.g, calculatePrice, finalPrice */

function calculate_price(basePrice) {
    /* Let's not include console.log statements in production code */

console.log("Calculating final price...");
    /* Declare the discount variable with const to prevent reassigment */

let discount = getDiscount(basePrice)
const final_price = basePrice - discount 
return final_price;
}

/* Declare getDiscount with const to prevent reassignment, or change this to a named function */

let getDiscount = function(basePrice) {
    /* Thia variable is unused; please remove it */
    let currentDiscount = 0;
    /* What do you think about returning the value usind a ternary operator to make the function more concise? */
    if (basePrice > 100) {
        return 20
    } else {
        return 10;
    }
}

console.log(`The final price is $${calculate_price(90)}`)

/* Challenge: Give a textual code review.Provide feedback using code customElements.*/

/* Let's pay closer attention to code indentation and semicolon consistency*/

/* Function name would be more readable in camelCae: getDiscount */
function getdiscount(code) {
    /* Convert the value of code to uppercase before finding a matching promo code */

    /* Declare promo with const to prevent reassignment */
    let promo = promos.find(promo => promo.code === code)
    console.log(promo) // Don't include in production code

    /* Make this condition more concise without the !== comparison; only check if promo is truthy and active: promo && promo.isActive */
    if (promo !== undefined && promo.isActive) {
        // Consider leaving out of production code
        console.log(`You get a ${promo.amount}% discount!`)
        return promo.amount / 100;
}
return 0;
}

/* Function name would be more readable in cameCase: calculateFinalPrice */
function calculatefinalprice(basePrice, userCode) {
    /* Similar to getDiscount, consider omitting the else block and returning basePrice if the condition is false */

if (userCode) {
    const discount = getdiscount(userCode) 
    const finalPrice = basePrice - basePrice * discount
    return finalPrice;    
}   else {
    return basePrice;
    }
}

/* Move this array to the top of the file for better code organizastion */
const promos = [
    { code: 'TOTALLY10', amount: 10, isActive: true },
    { code: 'PLENTY20', amount: 20, isActive: false },
    { code: 'NIFTY50',  amount: 50, isActive: true },
    { code: 'WHOPPING75', amount: 70, isActive: true },
    { code: 'YOLOFREE', amount: 100, isActive: false },
]
 console.log(calculatefinalprice(500.10, 'TOTALLY10'))

 





