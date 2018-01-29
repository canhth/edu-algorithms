# Look and Say

There's a famous look-and-say sequence, which is the following: `1 11 21 1211 111221 312211 ...`.
The trick is that the next number writes exactly like the previous one sounds. So `1` is `one`,
will count the number of digits and say `one 1`. Then, `11` is `two ones`, hence the next is `21`.

Given a seed number, generate `n` numbers of this sequence.

Example
-------

```javascript
generate(2, 5) // seed = 2, n = 5, returns [2, 12, 1112, 3112, 132112]
```

---

[Problem Source](https://nikita.tk).