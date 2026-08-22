class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];

        for (const str of strs) {
            while (!str.startsWith(prefix)) {
                prefix = prefix.slice(0, -1);
            }
        }

        return prefix;
    }
}