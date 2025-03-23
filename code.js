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
                if(array[leftIndex] <= array[j])
                {
                    leftIndex++;
                }
                // Else, the element at the rightIndex needs moved to leftIndex.
                else
                {
                    var temp = array[rightIndex];
                    // All elements get shifted from leftIndex through rightIndex -1 one to the right.
                    // This maintains order of unsorted portion of two sorted "subarrays".
                    for(var shiftIndex = rightIndex; shiftIndex > leftIndex; rightIndex--)
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

    // // Keep sorting "subarrays" 'til the entire array is encompassed in a single sort.
    // while(sortWidth < array.length)
    // {
    //     var numSubArrays = Math.ceil(array.length / sortWidth);
    //     for(var subArrayIndex = 0; subArrayIndex < numSubArrays; subArrayIndex++)
    //     {
    //         var leftSortBound = sortWidth * subArrayIndex;
    //         var rightSortBound = leftSortBound + Math.floor(sortWidth / 2);
    //         while()
    //     }
    // }


// function mergesort(array)
// {
//     // Base case
//     if(array.length <= 1)
//     {
//         return array;
//     }
//
//     // Split array into left and right halves.
//     var mid = Math.floor(array.length / 2);
//     var left = mergesort(array.slice(0, mid));
//     var right = mergesort(array.slice(mid));
//
//     // Merge sorted halves.
//     return merge(left, right);
// }
//
// function merge(left, right)
// {
//     var newArr = [];
//     var leftIndex = 0, rightIndex = 0;
//
//     while(leftIndex < left.length && rightIndex <right.length)
//     {
//         if(left[leftIndex] < right[rightIndex])
//         {
//             newArr.push(left[leftIndex]);
//             leftIndex += 1;
//         }
//         else
//         {
//             newArr.push(right[rightIndex]);
//             rightIndex += 1;
//         }
//     }
//
//     // Add and retur any remaining elements.
//     return newArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }
