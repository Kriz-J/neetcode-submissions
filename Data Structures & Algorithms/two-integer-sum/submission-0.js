class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map = new Map();
        nums.forEach(function(element, index) {
            map.set(target - element, index);
        });

        let idx1;
        let idx2;

        for (let i = 0; i < nums.length; i++) {
            if (map.get(nums[i]) && (map.get(nums[i]) !== i)){
                idx1 = i;
                idx2 = map.get(nums[i]);
                break;
            }
        }

        const result = idx1 < idx2 ? new Array(idx1, idx2) : new Array(idx2, idx1);

        return result;
    }
}
