class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let w1 = 0;
        let w2 = 0;
        let res = [];

        while (w1 < word1.length || w2 < word2.length) {
            if (w1 < word1.length) {
                res.push(word1[w1++]);
            }
            if (w2 < word2.length) {
                res.push(word2[w2++]);
            }
        }

        return res.join("");
    }
}
