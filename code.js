function mergesort(array)
{
    // Base case
    if(array.length <= 1)
    {
        return array;
    }

    // Split array into left and right halves.
    var mid = Math.floor(array.length / 2);
    var left = mergesort(array.slice(0, mid));
    var right = mergesort(array.slice(mid));

    // Merge sorted halves.
    return merge(left, right);
}

function merge(left, right)
{
    var newArr = [];
    var leftIndex = 0, rightIndex = 0;

    while(leftIndex < left.length && rightIndex <right.length)
    {
        if(left[leftIndex] < right[rightIndex])
        {
            newArr.push(left[leftIndex]);
            leftIndex += 1;
        }
        else
        {
            newArr.push(right[rightIndex]);
            rightIndex += 1;
        }
    }

    // Add and retur any remaining elements.
    return newArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
