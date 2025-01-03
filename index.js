

class StringCalculator {

    add(str) {
        //base case if str is undefined or it's length is 0
        if (!str) {
            return 0;
        }
        //creating an array from the string
        const str_numbers = str.split(',');
        //converting string to a number
        const numbers = str_numbers.map(n => Number(n));
        //calculating the sum
        let sum = 0;
        for (const number of numbers) {
            sum += number;
        }
        return sum;
    }
}

console.log(new StringCalculator().add());
console.log(new StringCalculator().add(""));
console.log(new StringCalculator().add("1"));
console.log(new StringCalculator().add("1,5"));