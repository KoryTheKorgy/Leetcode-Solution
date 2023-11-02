/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums = nums.sort((a, b) => a - b);
    if (nums.length == 0) return 0;
    let ans = cur = 1;
    for (let i = 1; i < nums.length; i++){
        if (nums[i]-nums[i-1] > 1){
            ans = Math.max(ans,cur);
            cur = 1;
        } else if (nums[i]-nums[i-1] == 1) cur++;
    }
    ans = Math.max(ans,cur);
    return ans;
};