function convertFahrToCelcius(data) {
    // Convert data to a number
    let num = Number(data)
    if (isNaN(num)) { //Checks if its not a number
        return `${data} is not a valid number but a/an ${typeof data}`
    } else if(Array.isArray(data)) { //Checks if it's an array
        return `[${data}] is not a valid number but a/an array`
    } else {
        return ((num - 32) * (5 / 9)).toFixed(4);
    }
}
convertFahrToCelcius(44);
convertFahrToCelcius('44');


function checkYuGiHo(parameter) {
    // Convert parameter to number
    let num = Number(parameter);

    // Checks if it's a number
    if (isNaN(num)) {
        return `invalid parameter: "${parameter}"`;
    } else {
        let result = [];
        for (let i=1; i<=num; i++) {
            //checks if its divisible by 2,3 & 5
            if (i%2===0 && i%3===0 && i%5===0) {
                result.push('yu-gi-oh');
            } else if (i%2===0 && i%3===0) {//checks if its divisible by 2 & 3
                result.push('yu-gi');
            } else if (i%2===0 && i%5===0) {//checks if its divisible by 2 & 5
                result.push('yu-oh');
            } else if (i%3===0 && i%5===0) {//checks if its divisible by 3 & 5
                result.push('gi-oh');
            } else if (i%2===0) {//checks if its divisible by 2
                result.push('yu');
            } else if (i%3===0) {//checks if its divisible by 3
                result.push('gi');
            } else if (i%5===0) {//checks if its divisible by 5
                result.push('oh');
            } else result.push(i);//pushes the number
            
        }

        return result;//returns the array containing result
        
    }
}

checkYuGiHo('none');
checkYuGiHo('50');
