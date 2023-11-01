/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const sCount = {};
    const tCount = {};

    for (let i = 0; i < s.length; i++) {
        sCount[s[i]] =  sCount[s[i]] ? sCount[s[i]] + 1 : 1;
        tCount[t[i]] = tCount[t[i]] ? tCount[t[i]] + 1 : 1;
    }

    for (const c in sCount) {
        if (tCount[c] !== sCount[c]) return false;
    }

    return true;

};