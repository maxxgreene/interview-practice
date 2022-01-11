
const binarySearch = (target, nums) => {
    const pivot = Math.floor(nums.length / 2);
    if (target === nums[pivot]) {
        return pivot;
    } else if (nums.length === 1) {
        return -1
    }
    const slicedNums = target > nums[pivot]
        ? nums.slice(pivot, nums.length)
        : nums.slice(0, pivot);
    const res = binarySearch(target, slicedNums);
    if (res !== -1) {
        return target > nums[pivot] 
            ? pivot + res
            : res;
    }
    return res;
}

module.exports = binarySearch;