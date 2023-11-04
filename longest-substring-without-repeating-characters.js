/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = cur = 0;
    let alphabet = Array(256).fill(0);
    for (let i = 0; i < s.length; i++){
        const x = s[i].charCodeAt(0);
        if (alphabet[x] == 1){
            cur = Math.max(cur,i-start);
            let y = 0;
            do {
                y = s[start].charCodeAt(0);
                alphabet[y] = 0;
                start++;
            } while (x !== y);
        }
        alphabet[x] = 1;
    }
    cur = Math.max((s.length-1)-start+1,cur);
    return cur;
};