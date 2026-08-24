class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;
        let n = nums.length;

        while (k < n) {
            if (nums[k] === val) {
                nums[k] = nums[--n];
            } else {
                k++;
            }
        }

        return k;
    }
}
