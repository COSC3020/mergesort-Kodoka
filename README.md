# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

After each iteration, sortWidth doubles, so after x iterations, sortWidth will
be $2^x$, and my outer while loop runs while $2^{x+1} < 2n$, as it must run so that
it performs at least one iteration encompassing the entire input array.  
Taking $\log_{2}$ of both sides of the inequality:  
$\log_{2} 2^{x+1} < \log_{2} 2n$  
$x + 1 < 1 + \log_{2} n$  
$x < \log_{2} n$  
So the outerloop runs in $\Theta(log n)$.  

The for loop that iterates through subArrays will run $frac{n}{sortWidth} times, or
$\frac{n}{2}+\frac{n}{4}+\frac{n}{8}+...$, summing up to $n$, giving us $\Theta(n)$.  

The next while loop, will run $O(m)$ times, where m is the size of the subArrays its
merging, and when $subArrayMid \not\geq rightSortBound$, the for loop within may
need to run a further $O(m)$ times, so when needing to shift m elements m times,
we get $\Theta(n^2)$  

Adding up these we get $\Theta(log_{2} n) + \Theta(2) +\Theta(n^2)$. As we don't
account for lower order terms, or constants, that gives us a final worst case
scenario time complexity of $\Theta(n^2)$ for my iterative in place merge sort.

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
