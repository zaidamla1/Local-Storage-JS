localStorage.setItem("username", "manish_sharma")
function addNumbers(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum)
}

addNumbers(50, 100, 150)

function subtract(a,b){
    return a - b;
}

console.log(subtract(50,35));