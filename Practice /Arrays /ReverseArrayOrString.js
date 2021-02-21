/**
 
Write a program to reverse an array or string
Given an array (or string), the task is to reverse the array/string.

Examples : 

Input = [1, 2, 3]
Output = [3, 2, 1]

Input = [4, 5, 1, 2]
Output = [2, 1, 5, 4]

LeetCode :344, 
*/

function reverseArrayOrString(input) {
    let start = 0, end = input.length-1;
    while(start < end) {
        let temp = input[start];
        input[start] = input[end];
        input[end] = temp;
        start++;
        end--;
    }
    
    return input;
}

reverseArrayOrString([3, 2, 1]);
reverseArrayOrString(["h","e","l","l","o"]);

/* Recursive Approach */

function reverseArrayOrStringRescursive(input, start, end) {
    if(start < end) return input;
        let temp = input[start];
        input[start] = input[end];
        input[end] = temp;

    reverseArrayOrStringRescursive(input, start+1, end-1);
}

reverseArrayOrStringRescursive([3, 2, 1], 0, 3);