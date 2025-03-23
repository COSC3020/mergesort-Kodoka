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
