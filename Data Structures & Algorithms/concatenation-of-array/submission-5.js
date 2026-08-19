class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // getConcatenation(nums) {
    //     const len = nums.length;
    //     const ans = new Array (len * 2);
    //     for (let i = 0 ; i < len ; i++) {
    //         ans[i] = ans[i + len] = nums[i];
    //     }
    //     return ans;
    // }

    // getConcatenation(nums) {
    //     let ans = nums.slice(0);
    //     for (const num of nums){
    //         ans.push(num);
    //     }
    //     return ans;
    // }

    // getConcatenation(nums){
    //     return [...nums, ...nums];
    // }

    // getConcatenation(nums){
    //     return nums.concat(nums);
    // }

    getConcatenation = nums => nums.concat(nums);
}
