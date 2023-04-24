# trainee-academy-assignments

This repository showcases a few of my solutions to the assignments I have done in Trainee Academy. I have chosen three assignments that I thought were educational and interesting. They represent a variety of programming concepts we have learned and that I feel I am now using confidently.

Only the essential parts of the code are included in this document. The full executable versions can be found from this repository.

## Assignment #1: Cleanup

### The assignment

```javascript
const objectArray = [ 
    { x: 14, y: 21, type: "tree", toDelete: false },
    { x: 1, y: 30, type: "house", toDelete: false },
    { x: 22, y: 10, type: "tree", toDelete: true },
    { x: 5, y: 34, type: "rock", toDelete: true },
    null,
    { x: 19, y: 40, type: "tree", toDelete: false },
    { x: 35, y: 35, type: "house", toDelete: false },
    { x: 19, y: 40, type: "tree", toDelete: true },
    { x: 24, y: 31, type: "rock", toDelete: false } 
];
```

There are some entries in the above array that are marked to be deleted.
1. Erase the entries by finding them and setting them to null. Do not replace the original array, but modify it instead.
2. Erase the entries by generating a new array with Array.map where the objects to be deleted have been replaced with null and the rest stay as-is.
3. Imagine that instead of 9 entries, the above array would have 100,000 entries. What would be the implications for performance and memory use between doing it like in 1) or like in 2)? To answer this question, write a comment to your source where you present your thoughts on the subject.


### Initial thoughts

There are two assignments. In both I want the result to be an array with equal amount of elements as in the original array, but with some of the elements being null. In the first one I need to modify the original array, and in the second one I will create a new array.

In the first assignment I need to iterate through every element of the array, modifying it as we move from one to the next. In the second one the array method `map` takes care of the actual iteration and I need just to implement the logic for creating new elements.

I decided to first do 1) and 2), and after having solutions think about 3) when I have something concrete down.

### Solution

#### 1)
```javascript
for (let i = 0; i < objectArray.length; i++) {
    if (objectArray[i] !== null && objectArray[i].toDelete) {
        objectArray[i] = null;
    }
}
```

In this solution to the first part I first check that the objectArray element is not null, since I can't check the value of the toDelete parameter if that would be the case. If the element is not null and it does have the toDelete parameter set to true, the element in question will be set to null.

#### 2)
```javascript
const cleaned = objectArray.map(element => {
    if (element === null || !element.toDelete) {
        return element;
    }

    return null;
});
```

In this solution to the second part I use the map method as required. The callback function that takes the element as parameter first checks if the element is null. If so, the element itself is returned. If the element is not null, it continues to check if it has a truthy toDelete property. If that is not the case, again the element itself is returned.

In all other cases null is returned. This means that null is returned if the element was *not* null *and* it had a truthy toDelete property.

#### 3)
Since the approach used in 2) creates a copy of the array, it takes more memory and typically also executes slower. Assuming no special optimizations, the performance of processing big arrays could be significantly worse with 2), especially if it's done often.


## Assignment #2: ???
