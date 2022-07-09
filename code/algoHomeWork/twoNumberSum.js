/**
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 You may assume that each input would have exactly one solution, and you may not use the same element twice.
 You can return the answer in any order.

 * Example 1:

 Input: nums = [2,7,11,15], target = 9
 Output: [0,1]
 Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 Example 2:

 Input: nums = [3,2,4], target = 6
 Output: [1,2]
 Example 3:

 Input: nums = [3,3], target = 6
 Output: [0,1]
 */

const twoNumberSum = (nums, target) => {
    let result = []
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i, j)
            }
        }
    }
    console.log(result)
    return result
}

//twoNumberSum([2, 7, 11, 15], 9)
//twoNumberSum([3, 2, 4], 6)
//twoNumberSum([3, 3], 6)

const twoNumberSum_2 = (nums, target) => {
    //FIRST STEP: create an empty Object

    let numObject = {}

//SECOND STEP: use a for-loop to iterate through the array

    for (let eachNum in nums) {
        //we'll check for otherNum in the object and if it's there, we got it and can push in our result array.
        let otherNum = target - nums[eachNum]
        if (otherNum in numObject) {
            let resultArr = [];
            resultArr.push(otherNum, nums[eachNum])
            return resultArr;
        }
//NB! adding key/value has to go after the if-statement to avoid adding the same index twice. We add the value or a new pair on each iteration.
        numObject[nums[eachNum]] = eachNum
    }
    return "not found";
}
console.log(
    twoNumberSum_2([2, 7, 11, 15], 9)
)

let test = -2 + 1 + -3 + 4 + -1 + 2 + -5 + 4
let test_2 = -2 + 1 + -3 + 4 + -1 + 2 + -5 + 4

console.log(test)
