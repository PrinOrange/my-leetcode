# KMP 字符串匹配算法

## 相关概念

- 主串：用于需要从中获取匹配内容的字符串，用符号记为 $S$。
- 模式串：匹配目标的字符串，用符号记为 $P$ 。
- NEXT 数组：一个一维数组，用于计算下一步“跳”过比较元素的步数。

## NEXT 数组的计算

NEXT 数组的第 $i$ 个元素 $next[i]$ 表示模式串 $P_{0}$ 到 $P_{i}$ 中使得前 $k$ 个字符等于后 $k$ 个字符的最大 $k$ 值。

比如对于字符串 $ABCADABC$

| index | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| char  | A   | B   | C   | A   | D   | A   | B   | C   |
| next  | 0   | 0   | 0   | 1   | 0   | 1   | 2   | 3   |

注意：$k<=i+1$

## “跳跃”与匹配

1. 首先主串与模式串均从 $i=0$ 处开始比较。比如 $S[0]$ 与 $P[0]$ 比较，若匹配，则开始 $S[1]$ 与 $P[1]$ 比较，以此类推。
2. 遇到不匹配的字符时则中止，设之前匹配的数量为 $n$ 。此时可以跳过 $m=n-next[n-1]$步。
3. 此时主串从 $i=m$ 处与模式串 $i=0$ 处开始新一轮比较。若仍有不匹配字符，则跳到第 2 步，否则到第 4 步。
4. 若没有遇到不匹配的字符，即全匹配时，返回 $m$ 值。

## 自然语言表述

输入：文本串 $text$ 和模式串 $pattern$

1. 初始化两个指针 $i$ 和 $j$ ，分别指向文本串和模式串的起始位置。
2. 构造 $next$ 数组，用于快速跳过不匹配的部分：
   - 初始化 $next[0] = -1$。
   - 当 $i < len(text)$ 时执行以下步骤：
     - 如果 $j = -1$ 或者 $text[i] = pattern[j]$ ，则递增 $i$ 和 $j$ ，并设置 $next[i] = j$。
     - 否则，更新 $j$ 为 $next[j]$ ，继续比较 $text[i]$ 和 $pattern[j]$ 。
3. 在循环中，进行模式匹配：

   - 当 $i < len(text)$ 且 $j < len(pattern)$ 时执行以下步骤：
     - 如果 $j = -1$ 或者 $text[i] = pattern[j]$ ，则递增 $i$ 和 $j$。
     - 否则，更新 $j$ 为 $next[j]$，继续比较 $text[i]$ 和 $pattern[j]$ 。
   - 如果 $j = len(pattern)$，表示模式串完全匹配，返回当前匹配位置 $i - j$。
   - 否则，表示匹配失败，返回匹配失败的标记（例如$-1$）。

4. 结束算法。

## C 语言代码的实现

```c
#include <stdio.h>
#include <string.h>

void getNext(const char* pattern, int* next) {
    int i = 0;
    int j = -1;
    int len = strlen(pattern);

    next[0] = -1;

    while (i < len - 1) {
        if (j == -1 || pattern[i] == pattern[j]) {
            i++;
            j++;
            next[i] = j;
        } else {
            j = next[j];
        }
    }
}

int kmpSearch(const char* text, const char* pattern) {
    int textLen = strlen(text);
    int patternLen = strlen(pattern);
    int* next = (int*)malloc(sizeof(int) * patternLen);

    getNext(pattern, next);

    int i = 0;
    int j = 0;

    while (i < textLen && j < patternLen) {
        if (j == -1 || text[i] == pattern[j]) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }

    free(next);

    if (j == patternLen) {
        return i - j; // 返回匹配位置的起始索引
    } else {
        return -1; // 匹配失败
    }
}

int main() {
    const char* text = "ABABABABCABABABA";
    const char* pattern = "ABABC";

    int result = kmpSearch(text, pattern);

    if (result != -1) {
        printf("Pattern found at index: %d\n", result);
    } else {
        printf("Pattern not found\n");
    }

    return 0;
}

```
