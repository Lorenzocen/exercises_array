//盛水最多的容器，暴力解法，遍历所有两数组合，时间复杂度在n^2。显然不可行
// 使用双指针，从两端开始遍历，问题的关键在于盛水容积只取决于短的那一边，每次移动都抛弃了所有短边相关的结果。
// 证明该解法的思路为明确每次被抛弃的可能性都不可能成为最优解。

var maxArea = function (height) {
    var i = 0;
    var j = height.length - 1;
    var result = 0;
    while (i < j) {
        var volume = 0;
        if (height[i] > height[j]) {
            volume = height[j] * (j - i);
            result = (result > volume) ? result : volume;
            j--;
        } else {
            volume = height[i] * (j - i);
            result = (result > volume) ? result : volume;
            i++;
        }
    }
    return result;
};