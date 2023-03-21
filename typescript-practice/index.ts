const propertyContainer = document.querySelector('properties')
const footer = document.querySelector('.footer')

import { showReviewTotal, populateUser } from './utils'
let isOpen: boolean

// Reviews
const reviews : {
     name: string;
     stars: number;
     loyaltyUser: boolean;
     date: string;
} [] = [
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

// User
const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]    
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Array of Properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;        
    };
    contact: [ number, string ];
    isAvailable: boolean;
}[] = [
    {
        image: 'images/colombia-property.png',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogoto',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112233344556677, lilywinkle@gmail.com],
        isAvailable: true
    },
    {
        image: 'images/poland-property.png',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+99887766554433, amitydavis@hotmail.com],
        isAvailable: false
    },
    {
        image: 'images/london-property.png',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',            
        },
        contact: [+1234567890, peterluger@gmail.com],
        isAvailable: true
    }
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

// Add the properties
for (let i = 0; i <properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
}

let currentLocation
footer.innerHTML = currentLocation