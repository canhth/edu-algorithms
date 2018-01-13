# The Shortest Path of Friendship

Given a list of people, and an array of each people's friends, find the shortest path(s) from the 
person A to the person B to reach by their friends. Output this path(s).  

Example
-------

```javascript
const network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam'    : ['Nathan', 'Jayden', 'William'],
    'Omar'    : ['Ren', 'Min', 'Scott'],
    ...
};

const path = ['Jayden', 'Amelia', 'Adam']; // a path from Jayden to Adam should have this route
```

---

[Problem Source](https://www.interviewcake.com/question/javascript/mesh-message)
