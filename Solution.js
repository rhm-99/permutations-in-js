/**
 * The following is the function where the solution shall be written
 */

function solution(input) {

    let final;
// logic here

    const userInput = clean(input); // calls the clean function
    console.log(userInput); // logs
    const intArr = `${userInput}`.split("").map(x => Number(x)); // separates numbers into array

    let permutationsArr = permutations(intArr);
    const finalArr = [];
    let eachElement;
    let eachNumber;
    for (let i = 0; i < permutationsArr.length; i++) {
        eachElement = permutationsArr[i];

        // loops each array to make the line an array instead of each character the array

        final = '';
        for (let j = 0; j < eachElement.length; j++) {

            eachNumber = eachElement[j];
            final = final.concat(eachNumber); // where the integers get linked together

        }

        finalArr.push(parseInt(final)); // converts the array into a string
    }
    // for (userInput.includes("0"), final < 3, final++) {
    //     final[k] = "0" + finalArr[k];
    //
    // }
    if (finalArr == false) {
        return 'Error! No integers.'; // returns the error if there is nothing to be permuted
    } else {
        console.log(finalArr.sort(function (a, b) {
            return b - a;
        })); // sorts into descending order
    }
}

function clean(str) {
    return str.replace(/\D/g, '');
    // removes the whitespaces and letters in the input

}

const permutations = sol => {
    if (sol.length <= 2) return sol.length === 2 ? [sol, [sol[1], sol[0]]] : sol;
    return sol.reduce(
        (acc, item, i) =>
            acc.concat(
                permutations([...sol.slice(0, i), ...sol.slice(i + 1)]).map(val => [
                    item,
                    ...val,
                ])
            ),
        []
    );
}; // does the permutations (combines all of the combinations of the input)


// some example inputs
console.log(solution('326')); // expected output 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected output 632,623,362,326,263,236
console.log(solution('a123 4trsRR')); // additional testings
console.log(solution('133')); // expected output 331, 313, 133
console.log(solution('405')); // expected output 540, 504, 450, 405, 054, 045
console.log(solution('A B C d e f ')); // additional testings

