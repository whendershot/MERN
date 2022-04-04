
//Hoare's partitioning algorithm
function quicksort(array) {
    let i = 0;
    let j = array.length -1;
    // console.log("Quicksort called!: [" + i + "," + j + "]");
    _quicksort(array, i, j);
}

function _quicksort(array, i, j) {
    // console.log("Inner Quicksort called!: [" + i + "," + j + "]");
    if (i < j) {
        let p = getRandomInt(i, j);
        let temp = 0;
        let _i = i, _j = j;
        while (_i < _j) {
            for (; _i<p && array[_i] < array[p]; _i++) {}
            for (; _j>p && array[_j] > array[p]; _j--) {}
            if (_i != _j) {
                temp = array[_i];
                array[_i] = array[_j];
                array[_j] = temp;
            }
        }
        _quicksort(array, i, _j - 1);
        _quicksort(array, _j + 1, j);
    }
}



//Mozilla example for random ints from inclusive intervals and even distribution.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let test1 = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30];
let test2 = [1, 3, 5, 4, 8, 30, 20, 17, 7];

console.log("Test1");
console.log(test1);
quicksort(test1);
console.log(test1);

console.log("\nTest2");
console.log(test2);
quicksort(test2);
console.log(test2);