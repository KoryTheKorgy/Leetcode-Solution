/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let num of nums){
        if (map.has(num))
            map.set(num,map.get(num)+1);
        else map.set(num,1);
    }
    map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    const ans = [];
    map.forEach((value, key) => {
        if (k > 0) {
            ans.push(key);
            k--;
        }
    });
    return ans;
};