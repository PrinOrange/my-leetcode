# 哈夫曼树的构造

## 编程实现

要使用C语言实现 Huffman树 和基本操作，需要定义 Huffman树 的数据结构和相应的函数。下面是一个示例代码，演示了 Huffman树 的实现及其基本操作。

```c
#include <stdio.h>
#include <stdlib.h>

//  Huffman树 节点的数据结构
struct HuffmanNode {
    char data;
    int frequency;
    struct HuffmanNode* left;
    struct HuffmanNode* right;
};

// 创建一个新的 Huffman树 节点
struct HuffmanNode* createNode(char data, int frequency) {
    struct HuffmanNode* node = (struct HuffmanNode*)malloc(sizeof(struct HuffmanNode));
    node->data = data;
    node->frequency = frequency;
    node->left = NULL;
    node->right = NULL;
    return node;
}

// 构建 Huffman树
struct HuffmanNode* buildHuffmanTree(char data[], int frequency[], int size) {
    struct HuffmanNode** nodes = (struct HuffmanNode**)malloc(size * sizeof(struct HuffmanNode*));
    int i;
    for (i = 0; i < size; i++) {
        nodes[i] = createNode(data[i], frequency[i]);
    }

    while (size > 1) {
        struct HuffmanNode* minNode1 = nodes[0];
        struct HuffmanNode* minNode2 = nodes[1];
        int minIndex1 = 0;
        int minIndex2 = 1;

        for (i = 2; i < size; i++) {
            if (nodes[i]->frequency < minNode1->frequency) {
                minNode2 = minNode1;
                minIndex2 = minIndex1;
                minNode1 = nodes[i];
                minIndex1 = i;
            } else if (nodes[i]->frequency < minNode2->frequency) {
                minNode2 = nodes[i];
                minIndex2 = i;
            }
        }

        struct HuffmanNode* newNode = createNode('$', minNode1->frequency + minNode2->frequency);
        newNode->left = minNode1;
        newNode->right = minNode2;

        nodes[minIndex1] = newNode;
        nodes[minIndex2] = nodes[size - 1];

        size--;
    }

    struct HuffmanNode* root = nodes[0];
    free(nodes);
    return root;
}

// 打印 Huffman树
void printHuffmanTree(struct HuffmanNode* root, int depth) {
    if (root == NULL) {
        return;
    }

    int i;
    for (i = 0; i < depth; i++) {
        printf("  ");
    }

    if (root->data == '$') {
        printf("*\n");
    } else {
        printf("%c\n", root->data);
    }

    printHuffmanTree(root->left, depth + 1);
    printHuffmanTree(root->right, depth + 1);
}

// 释放 Huffman树 的内存
void freeHuffmanTree(struct HuffmanNode* root) {
    if (root == NULL) {
        return;
    }

    freeHuffmanTree(root->left);
    freeHuffmanTree(root->right);
    free(root);
}

// 测试代码
int main() {
    char data[] = {'A', 'B', 'C', 'D', 'E'};
    int frequency[] = {5, 3, 8, 2, 6};
    int size = sizeof(data) / sizeof(data[0]);

    struct HuffmanNode* root = buildHuffmanTree(data, frequency, size);
    printf(" Huffman树 :\n");
    printHuffmanTree(root, 0);

    freeHuffmanTree(root);

    return 0;
}
```

在上述示例代码中，定义了`struct HuffmanNode`结构体来表示 Huffman树 的节点。`createNode`函数用于创建一个新的 Huffman树 节点，`buildHuffmanTree`函数用于构建 Huffman树 ，`printHuffmanTree`函数用于打印 Huffman树 的结构，`freeHuffmanTree`函数用于释放 Huffman树 的内存。

在`main`函数中，创建了一个示例的 Huffman树 ，并通过调用`printHuffmanTree`函数打印 Huffman树 的结构。最后，调用`freeHuffmanTree`函数释放 Huffman树 的内存。

请注意，上述代码中的 Huffman树 是基于字符和频率构建的简化版本，仅用于演示 Huffman树 的基本操作。实际的 Huffman树 实现可能需要根据具体需求进行调整和扩展。
