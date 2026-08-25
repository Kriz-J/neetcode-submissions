class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        return nums[Math.floor(nums.sort().length/2)];    
    }
}
