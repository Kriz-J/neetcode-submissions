class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let p1 = m - 1;
        let p2 = m;
        let mov = 0;

        for (let i = 0; i < n; i++) {
            nums1[i + m] = nums2[i];
        }

        while (mov < n) {
            while (nums1[p2] < nums1[p1] && p1 >= 0){
                [nums1[p1], nums1[p2]] = [nums1[p2], nums1[p1]];
                p1--;
                p2--;
            }
            
            mov++;

            p1 = m - 1 + mov;
            p2 = m + mov
        }
    }
}
