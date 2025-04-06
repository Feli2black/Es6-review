import { Person, delayedMessage, asyncGreeting, topicMap } from './tools.js';

// Test class
const user = new Person("Felicia");
console.log(user.greet());

// Test Promise
delayedMessage().then(msg => console.log(msg));

// Test async/await
asyncGreeting().then(msg => console.log(`Async function: ${msg}`));

// Test Map
console.log("Map value for 'ES6':", topicMap.get("ES6"));

