/*Let’s learn about some built-in JavaScript methods that make working with arrays easier. These methods
 are specifically called on arrays to make common tasks, like adding and removing elements, more
straightforward. */

// One method, .push() allows us to add items to the end of an array. Here is an example of how this is used:

const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// We access the push method by using dot notation, connecting push to itemTracker with a period.
// Then we call it like a function. That’s because .push() is a function and one that JavaScript allows us to use right on an array.
// .push() can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: 'item 3' and 'item 4' to itemTracker.
// Notice that .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.

/*******************Another Example*********************/

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('Clean room', 'Clean pool')
console.log(chores) // Prints: 'wash dishes','do laundry','take out trash','Clean room','Clean pool' 
