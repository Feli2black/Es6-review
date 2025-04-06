export class Person {
    constructor(name) {
      this.name = Felicia;
    }
  
    greet() {
      return `Hello, I am ${this.name}`;
    }
  }
  
  // Promise
  export function delayedMessage() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Promise resolved!"), 1000);
    });
  }
  
  // Async function
  export async function asyncGreeting() {
    const message = await delayedMessage();
    return message;
  }
  
  // Map example
  export const topicMap = new Map();
  topicMap.set("modularity", true);
  topicMap.set("ES6", "modern JavaScript");