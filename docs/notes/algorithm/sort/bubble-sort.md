# 冒泡排序

冒泡排序是一种简单的排序算法，它通过多次比较相邻的元素并交换它们的位置来将数组中较大（或较小）的元素逐步移动到数组的一端。这个过程类似于冒泡的过程，因此得名冒泡排序。

下面是冒泡排序算法的自然语言表达：

1. 从数组的第一个元素开始，依次比较相邻的两个元素的值。
2. 如果前面的元素大于（或小于）后面的元素，就交换它们的位置。
3. 继续向后比较，重复步骤 2，直到将最大（或最小）的元素交换到数组的最后一个位置。
4. 重复执行步骤 1~3，但是每次比较的元素数量减少 1，即不再比较已经排好序的部分。
5. 重复执行步骤 1~4，直到整个数组排序完成。

这个算法的核心思想是通过多次遍历和比较来逐步确定每个元素的正确位置，从而实现排序。冒泡排序的时间复杂度为 $O(n^2)$，其中 $n$ 是数组的长度。虽然冒泡排序效率较低，但对于小规模的数据集合或部分有序的数组，它仍然是一个简单且有效的排序算法。

```c
#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // 交换 arr[j] 和 arr[j + 1] 的值
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    printf("排序后的数组：\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}

```