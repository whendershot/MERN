const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

const { performance } = require('perf_hooks');
let start = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log("Reversed output: " + reversed1);
console.log(`This took ${performance.now() - start} milliseconds to run`);

start = performance.now();
//Remember that js strings are imutable
let reversed2 = story.split("");
let temp = "";
let lastIndex = reversed2.length - 1;
for ( let i = 0; i < (reversed2.length / 2) - 1; i++ ) {
    temp = reversed2[i];
    reversed2[i] = reversed2[lastIndex - i];
    reversed2[lastIndex - i] = temp;
}
reversed2 = reversed2.join("");
console.log();
console.log("Using a replace method.");
console.log("Reversed output: " + reversed2);
console.log(`This took ${performance.now() - start} milliseconds to run`);

console.log("Both strings are the same: " + (reversed1 === reversed2));