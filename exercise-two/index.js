require('colors');

/* Check is number pow of two */
function isPow2(number) {
    if (number === 1 || number === 2) {
        return true;
    }
    if (number % 2 == 0) {
        let endIndex = Math.sqrt(number);
        if (Math.sqrt(number) % 2 !== 0) {
            endIndex = Math.sqrt(number / 2)
        }

        for (let index = 2; index <= endIndex; index *= 2) {
            if (index === endIndex) {
                return true;
            }
        }
    }
    return false;
}

/* Get process arguments */
let arr = process.argv;

/* If arguments is not valid */
if (arr.length === 2) {
    process.exit();
}

/* Filter from arguments only numbers and check pow of two or not */
arr = arr.slice(2, arr.length);
let filteredArray = arr.map(i => +i).filter((strNumber) => {
    return isPow2(strNumber);
});

if (filteredArray.length !== arr.length) {
    console.log(`Numbers will be view of 2^n`.red);
    process.exit();
}

let actions = [];
let startIndex;

/* Main logic */
while (filteredArray.length !== 1) {

    /** Detect the start index */
    startIndex = Math.floor(filteredArray.length / 2) + (filteredArray.length % 2);

    /** 
     * If length of array is even , we will go to right 
     * Another case go to left
     */
    go = filteredArray.length % 2 === 0 ? "right" : "left";
    actions.push(go);

    /* Sum of the two pair numbers */
    let sum = filteredArray[startIndex] + filteredArray[startIndex - 1];

    /* Shift numbers */
    let spliceIndex = (startIndex - 1);

    filteredArray.splice(spliceIndex, 2, sum);

    console.log('In Time Execute '.red, filteredArray);
}

console.log('Steps  = '.red, actions);
console.log('Result = '.green, filteredArray);
