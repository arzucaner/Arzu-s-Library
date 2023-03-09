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