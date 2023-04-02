/* A program that takes in two numbers and a string operator. Make use of a switch statement
to perform the operation on the two numbersK
The calculator function should:
| Take in two numbers, num1 and num2, and a string representing a mathematical operator, operatorJ
| Use a switch statement to determine which operation to perform based on the value of the operatorJ
| If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
operation and store the result in a variable called resultJ
| If the operator is not one of the valid operators, log "Invalid operator" to the console.
*/
function caculator(num1,num2,operator){
    let result;
    switch (operator) {
        case "+":
            result=num1+num2;
            break;
        case "-":
            result=num1-num2;
            break;
        case "*":
            result=num1*num2
            break;
        case "/":
            result=num1/num2;
            break;
        default:
            console.log("Invalid operator")
            break;
    }
    console.log(result)
}
caculator(3,3,"+")
 caculator(7,4,"-") 
caculator(5,5,"*")
caculator(5,5,"/")
//caculator(2,3,"")//Invalid operator