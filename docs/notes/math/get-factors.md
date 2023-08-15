# 求出某正整数的所有因子

要求一个数的所有因子，可以使用以下算法：

1. 初始化一个空的因子列表。

2. 从 $1$ 开始迭代到该数的平方根，记为 $i$ 。

3. 如果 $i$ 是该数的因子（也就是该数与 $i$ 取模为 $0$ ），则将 $i$ 添加到因子列表中，并将该数除以 $i$ 得到另一个因子 $j$。同时将 $j$ 添加到因子列表中。

4. 如果 i 的平方等于该数，则只将 i 添加到因子列表中。

5. 返回因子列表作为结果。

以下是一个示例的实现：

```c
#include <stdio.h>
#include <stdlib.h>

int *findFactors(int num, int *factorCount)
{
  int *factors = malloc(sizeof(int) * num);
  *factorCount = 0;

  for (int i = 1; i * i <= num; i++)
  {
    if (num % i == 0)
    {
      factors[(*factorCount)++] = i;

      if (i * i != num)
      {
        factors[(*factorCount)++] = num / i;
      }
    }
  }

  return factors;
}

int main()
{
  int num = 36;
  int factorCount;
  int *factors = findFactors(num, &factorCount);

  printf("Factors of %d: ", num);
  for (int i = 0; i < factorCount; i++)
  {
    printf("%d ", factors[i]);
  }
  printf("\n");

  free(factors);

  return 0;
}
```

在上述示例中，我们计算了数字 $36$ 的所有因子，并打印出来。你可以根据需要修改 `num` 的值来计算其他数字的因子。

以上算法的时间复杂度为 $O(\sqrt{n})$，其中 $n$ 是给定数字。

在算法中，我们从 $1$ 迭代到该数的平方根，因此迭代的次数为 $\sqrt{n}$ 。对于每个迭代步骤，我们执行一些常数时间的操作，例如取模和除法。因此，总体而言，算法的时间复杂度是 $O(\sqrt{n})$。

这是因为一个数的因子中，较小的因子会成对地出现在较大的因子之前。例如，对于数字 $36$，它的因子有 $1、2、3、4、6、12$ 。我们可以观察到，较小的因子 $1$ 和 $2$ 出现在较大的因子 $6$ 和 $12$ 之前。因此，在迭代过程中，我们只需要迭代到平方根，就可以获取到所有的因子。

因此，该算法的时间复杂度为 $O(\sqrt{n})$，在大多数情况下，它比直接遍历所有数字要高效。
