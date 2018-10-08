function add(number){
    if(number == "") {
        return 0;
    }
    var delimiter = getDelimiter(number);
    if(delimiter == ""){
        if(parseInt(number) > 1000) {
            return 0;
        }
        return parseInt(number);
        
    }
    if(number.includes("//")) {
        number.slice(number.lastIndexOf("\n"));
    }
    var numberArray = number.split(delimiter);
    
    return sum(numberArray);
}

function sum(numberArray) {
    var total = 0;
    var negativeNumbers = "";
        for(var i = 0; i < numberArray.length; i++) {
           if(numberArray[i] < 0) {
                negativeNumbers += numberArray[i] + "";
           }
           if(numberArray[i] <= 1000){
               
               total += parseInt(numberArray[i]);
           }
        }
        if(negativeNumbers != "") {
            throw "Negatives not allowed: " + negativeNumbers;
        }
    return total;
}

function getDelimiter(number) {
    if(number.includes("//")) {
        var check = number.substring(number.lastIndexOf("//") + 2, number.lastIndexOf("\n"))
        console.log(check);
        return check;
    }else if(number.includes(",")) {
        return ",";
    }else if(number.includes("\n")) {
        return "\n";
    }else {
        return "";
    }
}

module.exports = add;