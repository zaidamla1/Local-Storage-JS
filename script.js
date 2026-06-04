localStorage.setItem("username", "zaid_amla")
function addNumbers(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum)
}

addNumbers(5, 10, 15)
