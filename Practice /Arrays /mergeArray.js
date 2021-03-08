/**
 Given two sorted arrays arr1 of size N and arr2 of size M. Each array is sorted in non-decreasing order. Merge the two arrays into one sorted array in non-decreasing order without using any extra space.

 Input: []
 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;

  for(let i = m + n -1; i >= 0; i--) {
      if(second < 0) break;
      
      if(nums1[first] > nums2[second]) {
         nums1[i] = nums1[first];
        first--;
      }else {
          nums1[i] = nums2[second];
          second--;
      }
  }
};