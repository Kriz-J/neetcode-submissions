class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        nums1.splice(m, n, ...nums2);
        nums1.sort((a, b) => a - b);
        
        // let l = 0;
        // let r = nums1.length;

        // while (l < r) {
        //     if (nums2[r] <= nums1[l]) {
        //         [nums1[l], nums2[r]] = [nums2[r], nums1[l]];
        //     }

        //     l++;
        //     r--;
        // }
    }
}
