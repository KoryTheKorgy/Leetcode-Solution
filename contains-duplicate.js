/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let HashMap = {};
    for (const num of nums){
        if (HashMap[num] !== undefined)
            return true;
        HashMap[num] = 1;
    }
    return false;
};