//:Number

const reviewTotalDisplay = document.querySelector('#reviews')

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

// Solution
function showReviewTotal (value : number) {
    reviewTotalDisplay.innerHTML = 'review total' + value.toString()   
}

showReviewTotal(reviews.length)