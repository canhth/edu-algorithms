# Word Ladder

Given two words (`beginWord` and `endWord`), and a dictionary's word list, find all shortest 
transformation sequence(s) from `beginWord` to `endWord`, such that:

1. Only one letter can be changed at a time
2. Each transformed word must exist in the word list. `beginWord` is not a transformed word.

Example
-------

Given:

```js
beginWord = "hit";
endWord = "cog";
wordList = ["hot","dot","dog","lot","log","cog"];
```

return

```js
answ = [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
]
```

Graphics
--------

![Whiteboard](https://user-images.githubusercontent.com/4989256/32445032-2bbe4a76-c30d-11e7-8ad4-dfba358d02b1.jpg)

---

[Problem Source](https://leetcode.com/problems/word-ladder-ii/description/).