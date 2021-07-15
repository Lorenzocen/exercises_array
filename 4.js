//给定两个大小分别为m和n的正序（从小到大）数组nums1和nums2。请你找出并返回这两个正序数组的中位数。
//希望时间复杂度为log(m+n)。所以不能通过遍历来解决问题。
//以二分查找为基石，寻找到合适的判断条件，进行操作。

var findMedianSortedArrays = function (nums1, nums2) {
    //需要先以某个数组为基准进行考虑，目前先以短的数组为基准，长数组可能的风险尚不明确。
    var m = nums1.length, n = nums2.length;
    var result = 0;
    var num1 = 0; numb2 = 0;
    if (m > n) {
        var temp = nums1;
        nums1 = nums2;
        nums2 = temp;
        m = nums1.length, n = nums2.length;
    }
    //确定左边元素个数
    var leftnumbers = parseInt((m + n + 1) / 2);
    var i, i1, i2, j;
    i = parseInt((m + 1) / 2);
    i1 = 1;
    i2 = m;
    j = leftnumbers - i;

    //考虑1的特殊情形
    if (m == 1) {
        if (n == 1) {
            result = (nums1[0] + nums2[0]) / 2;
        } else {
            if (nums1[0] > nums2[j]) {
                if ((m + n) % 2 != 0) {
                    result = nums2[j];
                } else {
                    if (nums1[0] > nums2[j + 1]) {
                        num2 = nums2[j + 1];
                    } else {
                        num2 = nums1[0];
                    }
                    result = (nums2[j] + num2) / 2;
                }
            } else {
                if ((m + n) % 2 != 0) {
                    if (nums1[0] > nums2[j - 1]) {
                        result = nums1[0];
                    } else {
                        result = nums2[j - 1];
                    }
                } else {
                    if (nums1[0] > nums2[j - 1]) {
                        num1 = nums1[0];
                    } else {
                        num1 = nums2[j - 1];
                    }
                    result = (num1 + nums2[j]) / 2;
                }
            }
        }
        //考虑2的特殊情形
    } else if (m == 2) {
        if (nums1[i - 1] <= nums2[j] && nums1[i] >= nums2[j - 1]) {
            if ((m + n) % 2 != 0) {
                if (nums1[i - 1] >= nums2[j - 1]) {
                    result = nums1[i - 1];
                } else {
                    result = nums2[j - 1];
                }
            } else {
                if (nums1[i - 1] >= nums2[j - 1]) {
                    num1 = nums1[i - 1];
                } else {
                    num1 = nums2[j - 1];
                }
                if (nums1[i] <= nums2[j]) {
                    num2 = nums1[i];
                } else {
                    num2 = nums2[j];
                }
                result = (num1 + num2) / 2;
            }
        } else if (nums1[i - 1] > nums2[j]) {
            if ((m + n) % 2 != 0) {
                result = nums2[j];
            } else {
                if (n == 2) {
                    result = (nums1[0] + nums2[1]) / 2;
                } else {
                    num1 = nums2[j];
                    if (nums1[i - 1] <= nums2[j + 1]) {
                        num2 = nums1[i - 1];
                    } else {
                        num2 = nums2[j + 1];
                    }
                    result = (num1 + num2) / 2;
                }
            }

        } else {
            if ((m + n) % 2 != 0) {
                if (nums1[i] >= nums2[j - 2]) {
                    result = nums1[i];
                } else {
                    result = nums2[j - 2];
                }
            } else {
                if (n == 2) {
                    result = (nums1[1] + nums2[0]) / 2;
                } else {
                    if (nums1[i] >= nums2[j - 2]) {
                        num1 = nums1[i];
                    } else {
                        num1 = nums2[j - 2];
                    }
                    num2 = nums2[j - 1]
                    result = (num1 + num2) / 2;
                }
            }
        }
    } else {
        while (nums1[i - 1] > nums2[j] || nums1[i] < nums2[j - 1]) {
            if (nums1[i - 1] > nums2[j]) {
                i2 = i;
                i = parseInt((i + i1) / 2);
            } else {
                i1 = i;
                i = parseInt((i + i2) / 2);
            }
            j = leftnumbers - i;
            if (i == 1 || i == m - 1) {
                break;
            }
        }
        if ((m + n) % 2 != 0) {
            if (i != 1 && i != m - 1) {
                if (nums1[i - 1] >= nums2[j - 1]) {
                    result = nums1[i - 1];
                } else {
                    result = nums2[j - 1];
                }
            } else if (i == 1) {
                if (nums1[0] >= nums2[j]) {
                    result = nums2[j];
                } else {
                    if (nums1[i - 1] >= nums2[j - 1]) {
                        result = nums1[i - 1];
                    } else {
                        result = nums2[j - 1];
                    }
                }
            } else {
                if (nums1[i] < nums2[j - 1]) {
                    if (nums1[m - 1] >= nums2[j - 2]) {
                        result = nums1[m - 1];
                    } else {
                        result = nums2[j - 2];
                    }
                } else {
                    if (nums1[i - 1] >= nums2[j - 1]) {
                        result = nums1[i - 1];
                    } else {
                        result = nums2[j - 1];
                    }
                }
            }

        } else {
            if (i != 1 && i != m - 1) {
                if (nums1[i - 1] >= nums2[j - 1]) {
                    num1 = nums1[i - 1];
                } else {
                    num1 = nums2[j - 1];
                }
                if (nums1[i] <= nums2[j]) {
                    num2 = nums1[i];
                } else {
                    num2 = nums2[j];
                }
                result = (num1 + num2) / 2;
            } else if (i == 1) {
                if (m == n) {
                    if (nums1[0] > nums2[j]) {
                        result = (nums2[j] + nums1[0]) / 2;
                    } else {
                        if (nums1[i - 1] >= nums2[j - 1]) {
                            num1 = nums1[i - 1];
                        } else {
                            num1 = nums2[j - 1];
                        }
                        if (nums1[i] <= nums2[j]) {
                            num2 = nums1[i];
                        } else {
                            num2 = nums2[j];
                        }
                        result = (num1 + num2) / 2;
                    }
                } else {
                    if (nums1[0] > nums2[j]) {
                        if (nums1[0] >= nums2[j + 1]) {
                            num2 = nums2[j + 1];
                        } else {
                            num2 = nums1[0];
                        }
                        result = (nums2[j] + num2) / 2;
                    } else {
                        if (nums1[i - 1] >= nums2[j - 1]) {
                            num1 = nums1[i - 1];
                        } else {
                            num1 = nums2[j - 1];
                        }
                        if (nums1[i] <= nums2[j]) {
                            num2 = nums1[i];
                        } else {
                            num2 = nums2[j];
                        }
                        result = (num1 + num2) / 2;
                    }
                }
            } else {
                if (nums1[i] < nums2[j - 1]) {
                    if (m == n) {
                        result = (nums1[m - 1] + nums2[0]) / 2
                    } else {
                        if (nums1[m - 1] >= nums2[j - 2]) {
                            num1 = nums1[m - 1];
                        } else {
                            num1 = nums2[j - 2];
                        }
                        num2 = nums2[j - 1];
                        result = (num1 + num2) / 2;
                    }
                } else {
                    if (nums1[i - 1] >= nums2[j - 1]) {
                        num1 = nums1[i - 1];
                    } else {
                        num1 = nums2[j - 1];
                    }
                    if (nums1[i] <= nums2[j]) {
                        num2 = nums1[i];
                    } else {
                        num2 = nums2[j];
                    }
                    result = (num1 + num2) / 2;
                }

            }
        }
    }
    return result;
};

var nums1 = [5, 6, 7];
var nums2 = [1, 2, 3, 4, 8];
var result = findMedianSortedArrays(nums1, nums2);
console.log((result));