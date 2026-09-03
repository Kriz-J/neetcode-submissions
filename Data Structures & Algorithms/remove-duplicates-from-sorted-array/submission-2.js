class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k = 0;
        let p = 1;

        while (p < nums.length) {
            if (nums[p] !== nums[k]) {
                k++;
                nums[k] = nums[p];
            }
            p++;
        }

        return k + 1;
    }
}
