const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function (){
    // get random number 
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// function that gets a random number
// math.floor() method rounds down to the nearest integer. This allows us to get whole numbers only.
// math.random() method will return a random whhole number between 0 and the length of the colors array, which is 3.
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
