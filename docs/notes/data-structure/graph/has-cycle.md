# 判断无向图是否有环

## 算法描述

判断一个无向图是否有环的常用算法是深度优先搜索（DFS）。下面是使用DFS判断无向图是否有环的算法：

1. 初始化一个空的访问列表 `visited`，用于记录已经访问过的节点。
2. 对于图中的每个节点 `v`，如果 `v` 没有被访问过，则执行以下步骤：
   - 如果在以节点 `v` 为根的子图中存在环（即执行DFS时返回True），则说明整个图中存在环，返回True。
   - 如果在以节点 `v` 为根的子图中不存在环，则将节点 `v` 标记为已访问，并继续遍历 `v` 的邻居节点。
3. 如果对于图中的所有节点都执行了步骤2，并没有找到环，则返回False。

## 编程实现

下面是一个使用Python实现DFS判断无向图是否有环的示例代码：

```python
def has_cycle(graph):
    visited = set()

    def dfs(node, parent):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor, node):
                    return True
            elif neighbor != parent:
                return True
        return False

    for node in graph:
        if node not in visited:
            if dfs(node, None):
                return True

    return False
```

在这个示例中，`graph` 是一个表示无向图的字典，其中键表示节点，值表示与节点相邻的节点列表。函数 `has_cycle` 返回一个布尔值，表示图中是否存在环。

你可以根据自己的需求构建无向图，并调用 `has_cycle` 函数进行判断。

需要注意的是，这个算法假设图中不存在自环（即节点与自身相连的边）。
