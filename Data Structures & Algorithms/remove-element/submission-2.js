class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let p1 = 0;
        let p2 = nums.length - 1;
        let count = 0;

        while (p1 <= p2) {
            if (nums[p2] === val) {
                count++;
                p2--;
            } else if (nums[p1] !== val) {
                p1++;
            } else if (nums[p1] === val) {
                [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
            }
        }

        return nums.length - count;
    }
}
