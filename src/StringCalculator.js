function add(number){
    if(number == "") {
        return 0;
    }

    if(number.includes(",")) {
        
        var numberArray = number.split(",");
        
        return sum(numberArray);
    
    } else if(number.includes("\n")) {

        var numberArray = number.split("\n");
        
        return sum(numberArray);
    
    } else {
        if(parseInt(number) > 1000) {
            return 0;
        }
        return parseInt(number);
    
    }
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

module.exports = add;