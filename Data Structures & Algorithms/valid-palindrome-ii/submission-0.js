class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        for (let i = -1; i < s.length; i++) {
            while (l < r) {

                if (l === i) {
                    l++;
                }

                if (r === i) {
                    r--;
                }

                if (s[l] !== s[r]) {
                    break;
                }

                l++;
                r--;
            }

            if (l >= r) {
                return true;
            }

            l = 0;
            r = s.length - 1;
        }

        return false;
    }
}
