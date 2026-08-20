class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const frequencies = new Array(26).fill(0);
        const a = 'a'.charCodeAt(0);

        for (let i = 0; i < s.length; i++) {
            frequencies[s.charCodeAt(i) - a]++;
            frequencies[t.charCodeAt(i) - a]--;
        }

        for (const f of frequencies){
            if (f !== 0) {
                return false;
            }
        }

        return true;
    }
}
