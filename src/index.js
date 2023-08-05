module.exports = function toReadable (number) {
    let readableStr = ""
    let first_twenty = [ "zero", "one", "two", "three", 
                        "four", "five", "six", 
                        "seven", "eight", "nine", 
                        "ten", "eleven", "twelve",
                        "thirteen", "fourteen", "fifteen",
                        "sixteen", "seventeen", "eighteen",
                        "nineteen"]

    let tens = ["", "", "twenty", "thirty", "forty",
                "fifty", "sixty", "seventy",
                "eighty", "ninety"]

    if (Math.floor(number/100) > 0 && number >= 100) {
        readableStr = first_twenty[Math.floor(number/100)] + " hundred"
        number = number - Math.floor(number/100) * 100
        
        if (number >= 1 && number <= 19) {
            readableStr += " " + first_twenty[number]
        }
        else if (Math.floor(number/10) > 0) {
            readableStr += " " + tens[Math.floor(number/10)]
            number = number - Math.floor(number/10) * 10
            if (number >= 1 && number <= 9) {
                readableStr += " " + first_twenty[number]
            }
        }
    }
    else {
        if (number >= 0 && number <= 19) {
            readableStr = first_twenty[number]
        }
        else if (Math.floor(number/10) > 0) {
            readableStr = tens[Math.floor(number/10)]
            number = number - Math.floor(number/10) * 10
            if (number >= 1 && number <= 9) {
                readableStr += " " + first_twenty[number]
            }
        }
    }
    return readableStr;
}
