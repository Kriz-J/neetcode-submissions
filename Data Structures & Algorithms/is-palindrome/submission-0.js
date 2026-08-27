class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        //0:48
        //9:57
        //A:65
        //Z:90
        //a:97
        //z:122
        let input = s.toLowerCase()
        //'A'.charCodeAt(0)

        while (l < r) {

            let lDec = s.charCodeAt(l);
            let rDec = s.charCodeAt(r);

            if (!(lDec >= 48 && lDec <= 57 || lDec >= 65 && lDec <= 90 || lDec >= 97 && lDec <= 122)) {
                l++;
                continue;
            }

            if (!(rDec >= 48 && rDec <= 57 || rDec >= 65 && rDec <= 90 || rDec >= 97 && rDec <= 122)) {
                r--;
                continue;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
