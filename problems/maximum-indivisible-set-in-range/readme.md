# Maximum Indivisible Set in Range

You are given a range of positive integers `[a, b]`, `a > 0`, `b > a`. Return the longest set of 
integers of size `X` which is not divisible by no single integer of this set. If it is impossible to
create such set, return an empty set.

Example
-------

You are given a range `[1, 7]` and `X = 4`. Any following answer is correct:

```javascript
[2, 3, 5, 7]
[3, 4, 5, 7]
[4, 5, 6, 7]
```

For example, set `[2, 3, 4, 5]` is not valid, because `4` is divisible by `2`. Neither valid the set
`[1, 2, 3, 5]`, because integers `2`, `3` and `5` are all divisible by `1`.

---

[Problem Source](https://www.hackerrank.com/contests/hourrank-24/challenges/mutual-indivisibility/).