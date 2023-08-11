# 二叉树的 diff 算法

二叉树的 diff 算法是一种比较两棵二叉树之间差异的算法，它可以找出两棵二叉树之间节点的新增、删除和修改等操作。

## 自然语言表达

具体描述二叉树的 diff 算法如下：

1. 首先比较两棵二叉树的根节点，如果根节点的值不相等，则认为根节点需要修改。
2. 如果根节点的值相等，则递归比较两棵二叉树的左子树和右子树。
3. 递归比较左子树和右子树时，也按照上述步骤进行操作，即先比较根节点的值，再递归比较左子树和右子树。
4. 在比较左子树和右子树时，根据节点的情况进行相应的操作：

   - 如果左子树为空，右子树不为空，则认为右子树中的节点是新增节点。
   - 如果左子树不为空，右子树为空，则认为左子树中的节点是删除节点。
   - 如果左子树和右子树都不为空，则继续递归比较左子树和右子树中的节点。

5. 在递归比较左子树和右子树的过程中，根据节点的情况进行相应的操作：

   - 如果节点的值不相等，则认为节点需要修改。
   - 如果节点在左子树中存在，在右子树中不存在，则认为节点是删除节 点。
   - 如果节点在右子树中存在，在左子树中不存在，则认为节点是新增节点。

6. 递归比较的终止条件是左子树和右子树都为空。
7. 最后，将所有的新增、删除和修改操作记录下来，得到两棵二叉树之间的差异。

二叉树的 diff 算法可以帮助我们了解两棵二叉树之间的差异，可以用于比较两棵二叉树的结构和内容，从而实现二叉树的同步和更新等操作。

## C 代码实现

```c
#include <stdio.h>
#include <stdlib.h>
// 二叉树节点的结构定义
typedef struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

// 创建新的二叉树节点
TreeNode* createNode(int data) {
    TreeNode* newNode = (TreeNode*)malloc(sizeof(TreeNode));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// 递归比较两棵二叉树的差异
void diff(TreeNode* tree1, TreeNode* tree2) {
    if (tree1 == NULL && tree2 == NULL) {
        return;
    }
    else if (tree1 == NULL && tree2 != NULL) {
        printf("新增节点: %d\n", tree2->data);
        diff(NULL, tree2->left);
        diff(NULL, tree2->right);
    }
    else if (tree1 != NULL && tree2 == NULL) {
        printf("删除节点: %d\n", tree1->data);
        diff(tree1->left, NULL);
        diff(tree1->right, NULL);
    }
    else {
        if (tree1->data != tree2->data) {
            printf("修改节点: %d -> %d\n", tree1->data, tree2->data);
        }
        diff(tree1->left, tree2->left);
        diff(tree1->right, tree2->right);
    }
}

int main() {
    // 创建两棵示例二叉树
    TreeNode* tree1 = createNode(1);
    tree1->left = createNode(2);
    tree1->right = createNode(3);
    tree1->left->left = createNode(4);
    TreeNode* tree2 = createNode(1);
    tree2->left = createNode(5);
    tree2->right = createNode(3);
    tree2->left->right = createNode(6);
    // 比较两棵二叉树的差异
    printf("两棵二叉树的差异：\n");
    diff(tree1, tree2);
    return 0;
}
```
