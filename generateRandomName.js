function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

// Our random username will be a combination of an adjective and a noun with an underscore in between, happy_banana for example. 
// So first we'll add two lists to our index.js, one with adjectives and one with nouns.
const adjectives = ["happy", "blue", "super"];
const nouns = ["banana", "president", "dog"];

//Then we need to fetch one word from the adjectives list and one word from the nouns list. 
//We'll fetch random later, but let's start by getting the first word in each 
//list and then add them together with an underscore in between and write out our result.
const adjective = adjectives[getRandomInt()];
const noun = nouns[getRandomInt()];
const username = `${adjective}_${noun}`;
// const username = adjective + "_" + noun;

module.exports
