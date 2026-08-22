class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = "";
        let idx = 0;
        let shortest = Infinity;
        strs.forEach(w => {
            if (w.length <= shortest){
                shortest = w.length;
            }
        })

        while (true) {
            for (let i = 0; i < strs.length; i++) {
                if (prefix.length === idx) {
                    prefix += strs[i][idx];
                }

                if (strs[i][idx] !== prefix[idx]) {
                    return prefix.slice(0, idx);
                }
            }

            idx++;
            if (idx > shortest){
                break;
            }
        }

        return prefix;
    }
}