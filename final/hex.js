const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // Explaination of for loop 
    // i = 0 sets a variable before the loop starts. 
    // i < 6 defines the condition for the loop to run (i must be less than 6). 
    // i++ increases the value each time the code of block in the loop as been executed.  
    // color will change to whatever random hexColor that is selected
    // backgroundColor will also be set the hexColor that is selected
    
    let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber()];
    }
    // console.log(hexColor)

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// function that gets a random number
// math.floor() method rounds down to the nearest integer. This allows us to get whole numbers only.
// math.random() method will return a random whhole number between 0 and the length of the colors array, which is 3.
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};