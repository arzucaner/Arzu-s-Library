const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')

let isOpen : boolean

const reviews = [
    {
        name: 'Peter',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name:'Liz',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Amity',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// Strings

function showReviewTotal (value : number, reviewer: string) {
    reviewTotalDisplay.innerHTML = 'review total' + value.toString() + '| last reviewed by ' + reviewer    
}

showReviewTotal(reviews.length, reviews[0].name)


// Boolean
function showReviewTotal (value : number, reviewer: string, isLoyalty : boolean) {
    const iconDisplay = isLoyalty ? ' ' : '' 
    reviewTotalDisplay.innerHTML = 'review total' + value.toString() + '| last reviewed by' + 
    reviewer + ' ' + iconDisplay

}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)


// Fixing
const you = {
    userName: 'Bobby',
    isReturning: true,
}

function populateUser (isReturning : boolean, userName : string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName)