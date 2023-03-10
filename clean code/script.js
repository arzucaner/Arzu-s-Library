// Clean Code: Variables Challenge 1

/*8
* userNames: string[first, middle, last]
* return First Middle Initial Last Name
*/
function getUsersFullName(userNames) {
    const [firstName, middleName, lastName] = userNames;
    const middleInitial = middleName[0];

    return `${firstName} ${middleInitial}. ${lastName}`;
}

console.log(getUsersFullName(['Arzu', 'Guney', 'Caner']));

// Clean Code: Variables Challenge 1.5

class Cat {
    name;
    age;
}

const tito = new Cat();
tito.age = 12
tito.name = 'Fino';

// Magic Numbers

function orbitalPeriod(arr) {
    const earthRadius = 6367.447;
    const gravityMetric = 398600.4418;
    const twoPI = 2 * Math.PI;
    const newArr = [];

    const getOrbPeriod = function(obj) {
        const gravityCircReference = Math.pow(earthRadius + obj.avgAlt, 3);
        const totalGravametric = Math.sqrt(gravityCircReference / gravityMetric);
        const orbPeriod = Math.round(twoPI * totalGravametric);
        delete obj.avgAlt;
        obj.orbitalPeriod = orbPeriod;

        return obj;        
}

for (elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]))
}

return newArr;

}

// Clean Code Variables: Challenge 2 - Magic Numbers
//86400000
const millisecondsInADay = 60 * 60 * 24 * 1000;

// Clean Organization: Spacing and Returns
// Proper Spacing ans Returns
// https://eslint.org/docs/rules/padding-line-between-statements

function addUser(user) {
    const userData = {...user, type: 'Admin'};

    if(userData) {

    }

    return userData;
}

// Standardization of Naming
function retrieveAdminById(id) {
    // gets admin
}

function getUserById(id) {
    switch (id) {
        case 1:
            addUser(1);
            break;

            case 2:
            case 3:
                addUser(2);
                break;

        default:
            addUser(3);            
        }
}

// Limet Params - BAD
function getUsersFullName(first, middle, last, nickName) {
    return `${first} ${middle} ${last} - AKA: ${nickName}`
}

// Limit Params - GOOD
function getUsersFullName2(userName) {
    return `${userName.first} ${userName.middle} ${userName.last} - AKA: ${userName.nickName}`
}

// Descriptive Names
function addAdminUser(user) {
    const userData = {...user, type: 'Admin'};

    // adds user to DB
}

// Standardization of Naming
function getAdminById(id) {
    // gets admin
}

function getUserById(id) {
    // gets user
}

// Clean Code: Naming and Standardization Challenge

function createEmail(message) {
    const email = {message, type: 'EMAIL'};
    // adds message to the DB
}

function getNewAdmin(id) {
    return { type: 'Admin'}   
}

function deleteUserByID(id) {
    // delete user
}

function deleteUserById(id) {
    // delete user
}

function deleteAdminById(id) {
    // delete admin
}

function getNonPrimaryUsers(user) {
    if(getIsUserPrimaryActiveAccount(user)) {
        return user.subMembers;
    } else {
        return new Error ('User is not Primary Account Holder.');        
    }
}

function getIsUserPrimaryActiveAccount(user) {
    const isPrimaryAccount = user.isPrimaryAccount === true;
    const isActive = user.isActive === true;

    return isActive && isPrimaryAccount;    
}

// Clean Code: Encapsulating Conditionals Challenge

function getLoadingState(state) {
    if(hasUserLoadedSuccesfully(state)) {
        return 'Finished Loading';
    }

    if(isUserLoadingSuccesfully(state)) {
        return 'Loading...';
    }

    return 'Error occured';    
}

function hasUserLoadedSuccesfully(state) {
    return !!state.user && state.loading === false && state.hasError === false;

}

function isUserLoadingSuccesfully(state) {
    return state.user === null && state.loading === true && state.hasError === false;
}

