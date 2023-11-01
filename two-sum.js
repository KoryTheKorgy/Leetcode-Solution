/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var maps = {};
    for (let i = 0; i < nums.length; i++) {
        var subs = target-nums[i];
        if (typeof maps[subs] !== "undefined"){
            return [i, maps[subs]];
        } else {
            maps[nums[i]] = i;
        }
    }
    return [-1,-1];
};