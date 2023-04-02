/* A JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color
based on the following criteria:
| If color1 is "red" and color2 is "blue" or vice versa, print "purple"J
| If color1 is "red" and color2 is "yellow" or vice versa, print "orange"J
| If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"J
| If any other combination of colors is input, the program should print "Invalid color combination"
*/
function colorMixture(color1,color2) {
    let result;
    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    result="purple"
                    break;
                case "yellow":
                    result="orange"
            }
            console.log(result);
            break;
        case "blue":
            switch (color2) {
                case "yellow":
                    result="green"
            }
            console.log(result);
            break
        default:
            console.log("invalid color");
            break;
    }
}

colorMixture("red","yellow")
colorMixture("red","blue")
colorMixture("blue","yellow")
colorMixture("white","purple")