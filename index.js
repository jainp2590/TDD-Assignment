

class StringCalculator {

    add(str) {
        //base case if str is undefined or it's length is 0
        if (!str) {
            return 0;
        }
        //separating str and delimeters from input
        let { actual_str, delimeters } = this.#getDelimeters(str);
        //creating an array of numbers from the string
        const numbers = this.#convertStringToNumbers(actual_str, delimeters);
        //calculating the sum
        let sum = 0;
        for (const number of numbers) {
            sum += number;
        }
        return sum;
    }

    #getDelimeters(str) {
        //if str starts with '//' it means str has specific delimeter
        if (str.startsWith('//')) {
            const [delimeter_str, actual_str] = str.split('\n');
            return { delimeters: delimeter_str[2], actual_str: actual_str };
        } else {
            // ',', '\n' will be default delimeters
            return { delimeters: [',', '\n'], actual_str: str };
        }
    }

    #convertStringToNumbers(str, delimeters) {
        const numbers = [];
        const negative_numbers = [];
        let num_str = '';
        for (const s of str) {
            //if we encounter any delimeter, it means we have got our number
            if (delimeters.includes(s)) {
                this.#checkForNumber(num_str, numbers);
                num_str = '';
            } else {
                num_str += s;
            }
        }
        //checking for remaining num str
        this.#checkForNumber(num_str, numbers);
        //if any negative numbers are found then throw an error
        if (negative_numbers.length > 0) {
            return this.#throwError(negative_numbers);
        }
        return numbers;
    }

    #checkForNumber(num_str, numbers) {
        const number = Number(num_str);
        if (number < 0) {
            negative_numbers.push(number)
        } else {
            numbers.push(number);
        }
    }

    #throwError(negative_numbers) {
        throw `negatives not allowed: ${negative_numbers.join(' ')}`;
    }
}

console.log(new StringCalculator().add());
console.log(new StringCalculator().add(""));
console.log(new StringCalculator().add("1"));
console.log(new StringCalculator().add("1,5"));
console.log(new StringCalculator().add("1\n2,3"));
console.log(new StringCalculator().add("//;\n1;2"));
console.log(new StringCalculator().add("//;\n1;21"));
console.log(new StringCalculator().add("//@\n1@2@4"));
console.log(new StringCalculator().add("//@\n-1@2@4"));