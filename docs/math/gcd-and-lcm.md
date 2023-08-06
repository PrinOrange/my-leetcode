# GCD and LCM

`GCD` 和 `LCM` 函数分别是求最大公因数、最小公倍数的函数。

`GCD` 函数的 C 语言实现如下：

```c
int gcd(int a, int b)
{
    while (b != 0)
    {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

`LCM` 是求两个数的最小公倍数的函数。**根据数学知识，两个数的最小公倍数，等于这两个数的乘积除以这两个数的最大公因数。**

```c
int lcm(int a,int b)
{
    return (a * b) / gcd(a, b);
}
```
