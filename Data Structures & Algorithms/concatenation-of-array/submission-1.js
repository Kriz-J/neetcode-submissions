class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    getConcatenation(nums) {
        let ans = nums.slice(0);
        for (const num of nums){
            ans.push(num);
        }
        return ans;
    }

    // getConcatenation(nums){
    //     return [...nums, ...nums];
    // }

    // getConcatenation(nums){
    //     return nums.concat(nums);
    // }

    // getConcatenation = nums => nums.concat(nums);
}
