# 二叉堆

## 堆调整方法

下滤：从根结点出发，除根节点外，对途中每一个结点，依次访问其父结点。如果该结点比父结点大（或小），则与子结点替换位置，直到满足调整后的父结点都大于（或小于所有子结点）。再对每一个后续子结点进行同样的操作。

上滤：从最后一个结点出发，对途中的每一个结点，依次访问其父结点。调整父结点、该结点的位置，满足调整后父结点都大于（或小于所有子结点）。再对后续祖父节点进行同样的操作。

## 构造二叉堆

构建一棵完全二叉树，使其结点数量等于序列长度。将序列元素依次填入到二叉树中，构造完全无序的二叉树，再对该二叉树进行下滤调整，使得该二叉树满足堆序性。

## 插入元素

将新节点插入到最后一棵结点之后，再进行上滤操作。

## 删除元素

将根节点移除，取而代之的是堆中最后一棵结点放到根节点位置，再进行下滤调整。

## 编程实现

当涉及到二叉堆的实现和基本操作时，通常有两种类型的二叉堆：大根堆（Max Heap）和小根堆（Min Heap）。现在使用C语言实现堆的基本操作，以大根堆为的示例，包括插入元素、删除堆顶元素和打印堆元素的基本操作。

```c
#include <stdio.h>
#include <stdlib.h>

#define MAX_HEAP_SIZE 100

typedef struct {
    int* heapArray;
    int size;
    int capacity;
} MaxHeap;

// 创建一个新的大根堆
MaxHeap* createHeap(int capacity) {
    MaxHeap* heap = (MaxHeap*)malloc(sizeof(MaxHeap));
    heap->heapArray = (int*)malloc(sizeof(int) * capacity);
    heap->size = 0;
    heap->capacity = capacity;
    return heap;
}

// 交换数组中两个元素的值
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// 上滤操作
void percolateUp(MaxHeap* heap, int index) {
    int* arr = heap->heapArray;
    while (index > 0 && arr[index] > arr[(index - 1) / 2]) {
        swap(&arr[index], &arr[(index - 1) / 2]);
        index = (index - 1) / 2;
    }
}

// 下滤操作
void percolateDown(MaxHeap* heap, int index) {
    int* arr = heap->heapArray;
    int leftChild, rightChild, maxIndex;
    while (1) {
        leftChild = 2 * index + 1;
        rightChild = 2 * index + 2;
        maxIndex = index;

        if (leftChild < heap->size && arr[leftChild] > arr[maxIndex])
            maxIndex = leftChild;

        if (rightChild < heap->size && arr[rightChild] > arr[maxIndex])
            maxIndex = rightChild;

        if (maxIndex == index)
            break;

        swap(&arr[index], &arr[maxIndex]);
        index = maxIndex;
    }
}

// 插入元素到大根堆
void insert(MaxHeap* heap, int value) {
    if (heap->size >= heap->capacity) {
        printf("Heap is full. Cannot insert element.\n");
        return;
    }

    heap->heapArray[heap->size] = value;
    percolateUp(heap, heap->size);
    heap->size++;
}

// 删除堆顶元素（最大值）
void deleteMax(MaxHeap* heap) {
    if (heap->size <= 0) {
        printf("Heap is empty. Cannot delete element.\n");
        return;
    }

    heap->heapArray[0] = heap->heapArray[heap->size - 1];
    heap->size--;
    percolateDown(heap, 0);
}

// 打印堆中的元素
void printHeap(MaxHeap* heap) {
    printf("Heap elements: ");
    for (int i = 0; i < heap->size; i++) {
        printf("%d ", heap->heapArray[i]);
    }
    printf("\n");
}

// 释放堆内存
void destroyHeap(MaxHeap* heap) {
    free(heap->heapArray);
    free(heap);
}

int main() {
    MaxHeap* heap = createHeap(MAX_HEAP_SIZE);

    // 插入元素到堆中
    insert(heap, 10);
    insert(heap, 5);
    insert(heap, 7);
    insert(heap, 12);
    insert(heap, 3);

    // 打印堆中的元素
    printHeap(heap);

    // 删除堆顶元素
    deleteMax(heap);

    // 打印删除堆顶元素后的堆
    printHeap(heap);

    // 释放堆内存
    destroyHeap(heap);

    return 0;
}
```

上述代码中，我们使用`MaxHeap`结构体来表示大根堆，其中包含一个整型数组`heapArray`用于存储堆的元素，`size`表示堆中元素的数量，`capacity`表示堆的容量。然后，我们实现了创建堆、交换元素、上滤、下滤、插入元素、删除堆顶元素和打印堆元素等基本操作。

在`main`函数中，我们创建了一个大根堆，插入了一些元素，然后打印堆中的元素。接下来，我们删除堆顶元素，并再次打印堆中的元素。最后，我们释放了堆的内存。

请注意，上述代码仅实现了大根堆的基本操作。如果您想要实现小根堆，只需稍作修改即可，例如在上滤和下滤操作中使用相反的比较符号即可。
