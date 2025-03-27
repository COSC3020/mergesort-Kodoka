function mergesort(array) {
    // Bypass base case, single element, as single elements are trivially sorted.
    var sortWidth = 2;

    // Keep sorting "subarrays" 'til the entire array is encompassed in a single sort.
    while (sortWidth < 2 * array.length) {
        // Calculate number of "subarrays" of length sortWidth will be sorted this round.
        var numSubArrays = Math.ceil(array.length / sortWidth);

        // For each "subarray", "merge" the sorted halves.
        for (var subArrayIndex = 0; subArrayIndex < array.length; subArrayIndex++) {
            var leftSortBound = sortWidth * subArrayIndex;
            // subArrayMid represents the start of the right "subarray".
            var subArrayMid = leftSortBound + Math.floor(sortWidth / 2);
            // rightSortBound represents the end of the current "subarray", or end of the array.
            var rightSortBound = Math.min(leftSortBound + sortWidth, array.length);

            // Skip "merge" if right half doesn't exist.
            if(subArrayMid >= rightSortBound)
            {
                continue;
            }

            // We merge in place the two "subarrays" by working through elements of the left
            // "subarrray", array[LeftSortBound] through array[subArrayMid - 1], and
            // array[subArrayMid] through array[rightSortBound - 1].
            var leftIndex = leftSortBound;
            var rightIndex = subArrayMid;

            while(leftIndex < rightIndex && rightIndex < rightSortBound)
            {
                // If the current element in the left "subarray" is correct, move on.
                if(array[leftIndex] <= array[rightIndex])
                {
                    leftIndex++;
                }
                // Else, the element at the rightIndex needs moved to leftIndex.
                else
                {
                    var temp = array[rightIndex];
                    // All elements get shifted from leftIndex through rightIndex -1 one to the right.
                    // This maintains order of unsorted portion of two sorted "subarrays".
                    for(var shiftIndex = rightIndex; shiftIndex > leftIndex; shiftIndex--)
                    {
                        array[shiftIndex] = array[shiftIndex - 1];
                    }
                    // Temp value gets put in correct spot, after all shifting occurs.
                    array[leftIndex] = temp;
                    leftIndex++;
                    rightIndex++;
                    subArrayMid++;
                }
            }
        }
        // sortWidth is double, so next sort handles two of the current iteration's "subarrays".
        sortWidth *= 2;
    }
    return array;
}