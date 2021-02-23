/**
 Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

  There is only one repeated number in nums, return this repeated number.

  Leetcode: 287
*/


// Method 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let hash = {};
  for(let i = 0; i < nums.length; i++) {
    if(hash[nums[i]]) return nums[i];
     hash[nums[i]]= true 
  };
};

findDuplicate([1,3,4,2,2]) // output 2
