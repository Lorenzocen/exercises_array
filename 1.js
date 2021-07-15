// 两数之和
var twoSum = function(nums, target) {
    var result=[];
    for (var i=0;i<nums.length;i++ ){
        for (var j=i+1;j<nums.length;j++ ){
            if(nums[i]+nums[j]==target){
                result[0]=i;
                result[1]=j;
                return result;
            }
        }
    }
};

var nums = [1,2,3,4,5];
var target = 4;
var result = twoSum(nums, target);
console,console.log((result));

//该解法为暴力破解，时间复杂度为n^2，存在时间复杂度更低的方式，哈希表？但现在还不知道哈希表是什么。。。。。。