/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (let str of strs){
        const charArray = str.split('');
        charArray.sort();
        const tStr = charArray.join('');
        if (map.has(tStr)){
            map.set(tStr,map.get(tStr)+" "+str);
        } else map.set(tStr,str);
    }
    const ans = [];
    map.forEach (function(value, key) {
        const strArray = value.split(" ");
        if (strArray.length > 0)
            ans.push(strArray);
    });
    return ans;
};