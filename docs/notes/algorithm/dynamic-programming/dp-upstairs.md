# 爬楼梯问题之动态规划解法

**问题：** 现在要爬上 $n$ 个台阶的楼梯。已知：上一个台阶有一种方案，即直接迈一步入一个台阶。上两个台阶有两个方案：一步迈两个台阶、迈两步每步一个台阶。现在要爬上 $n$ 个台阶，一共有多少方案？

**问题分析：**
我们可以使用动态规划的方法解决这个问题。假设要爬上 $n$ 个台阶，我们可以从第 $n-1$ 个台阶迈一步到达第 $n$ 个台阶，或者从第 $n-2$ 个台阶迈两步到达第 $n$ 个台阶。因此，到达第 $n$ 个台阶的方案数等于到达第 $n-1$ 个台阶的方案数加上到达第 $n-2$ 个台阶的方案数。特殊情况下，当 $n=1$ 时，只有一种方案；当 $n=2$ 时，有两种方案。

**公式：**
设 $dp[i]$ 表示到达第 $i$ 个台阶的方案数，则有以下递推关系：

$$
dp[i] = dp[i-1] + dp[i-2]
$$

代码实现：

```c
#include <stdio.h>

int climbStairs(int n) {
    if (n <= 2) {
        return n;
    }

    int dp[n+1];
    dp[1] = 1;
    dp[2] = 2;

    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}

int main() {
    int n = 5;
    int result = climbStairs(n);
    printf("爬上 %d 个台阶的方案数为：%d\n", n, result);

    return 0;
}
```

在上述代码中，我们使用 `climbStairs` 函数来计算爬上 n 个台阶的方案数。我们使用一个数组 `dp` 来保存每个台阶的方案数。首先初始化 `dp[1]` 和 `dp[2]`，然后使用循环计算 `dp[i]` 的值，直到计算到第 n 个台阶的方案数。最后返回 `dp[n]` 即可得到答案。

在 `main` 函数中，我们测试了爬上 5 个台阶的方案数，并打印结果。

请注意，这里的代码假设台阶数 $n$ 是一个正整数。如果 $n$ 是负数或零，可以根据实际情况进行错误处理。
