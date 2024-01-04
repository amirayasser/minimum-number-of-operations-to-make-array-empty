var nums = [2, 3, 3, 2, 2, 4, 2, 3, 4]

// minimum-number-of-operations-to-make-array-empty

// 1) using splice method
nums.splice(0,nums.length)
console.log(nums) // Array(0) length: 0

/*  arrName.splice(index, how many, item1,item2,....)
index where new elements should be added
how many elements should be removed
The rest of parameters define new elements to be added.
*/

// ----------------------------------

// 2) using shift or pop methods in a loop over array
const length = nums.length   
// if u don't save original array length in a constant the array length will change every iteration 
// because array elements decrease one each iteration  
// This ensures that the loop runs for the original number of elements in the array, and you effectively remove all elements from the array

for(let i = 0; i < length; i++){
    nums.shift()
}
console.log(nums) // [] 

// ----------------------------------------

// 3) Setting Length to 0
nums.length = 0
console.log(nums) // []

// -------------------------------------

// 4) Reassignment to an Empty Array
nums = []
console.log(nums) // []









