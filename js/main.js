'use strict';

/*  A function that searches for the max and min values ​​of an array.
    And replace max and min elem.
    Also this function return all versions in object  */
function createObj(arr) {
    //The function that finds the sum of the elements of an array
    function findSum() {
        let sum = 0;
        for (let i = 0; i < arr.length; ++i) {
            sum += arr[i]
        }
        return sum;
    }
    //The function that finds the min value
    function findMin(arr) {
        let min = arr[0];
        for (let i = 1; i < arr.length; ++i) {
            if (arr[i] < min)
                min = arr[i];
        }
        return min
    }
    //The function that finds the maximum value
    function findMax(arr) {
        let min = arr[0];
        let max = min;
        arr.forEach(function (elm, index) {
            if (elm > max) {
                max = elm
            }
        });
        return max
    }
    // function what return arr with replace min and max
    function newPosition(arr) {
        let newArr = [];
        let min = arr[0];
        let max = min;
        let indexOfMin;
        let indexOfMax;
        for(let i=0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
                indexOfMin = i;
            }
            if (arr[i] > max) {
                max = arr[i];
                indexOfMax = i;
            }
            newArr[i] = arr[i];
        }
        let buf = newArr[indexOfMin];
        newArr[indexOfMin] = newArr[indexOfMax];
        newArr[indexOfMax] = buf;
        return newArr
    }
    let objSum = findSum(arr);
    let objMin = findMin(arr);
    let objMax = findMax(arr);
    let newArr = newPosition(arr);
    return {
        arr: arr,
        newArr: newArr,
        sum: objSum,
        min: objMin,
        max: objMax
    }
}
/*A function that accepts an array and returns an object,
where properties are indices and keys are values ​​under this index in an array*/
function parseObj(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        let key = arr[i];
        obj[key] = i;
    }
    return obj;
}
//A function that returns function with callback
function funWithCallback(callback) {
    return setTimeout(callback,0);
}
funWithCallback( () => {
    let array = [1,NaN,-3,5,3];
    array .forEach((elem)=>{
        console.log(elem)
    })
});

