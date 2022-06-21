# memory-card-game
###### Click each card once as it reshuffles
![](https://github.com/TYLPHE/TYLPHE/blob/main/readmeAssets/memory-card-game.gif)

## Links
- [Try Memory Card Game here!](https://tylphe.github.io/memory-card-game/)

- [Link to the Assignment](https://www.theodinproject.com/lessons/node-path-javascript-memory-card)

## Features
- Click on each card once to earn a high score of 9
- Second project created with React.js

## About
Memory Card Game the first assignment that requires function components. It a state to keep track of the user's selected cards and another state to keep track of scores.

## Challenges
### Handling the shuffle 
The way I handled my randomization was to assign each image a key from 0 - 8. Next, I created a randomizer that pushed random numbers into an array:
```javascript
function randomizer() {
  const randArr = [];
  while (randArr.length < 9) {
    let num = Math.floor(Math.random()*9);
    const dupe = randArr.filter(number => number === num)
    if(dupe.length === 0) {
      randArr.push(num)
    }
  }
  return randArr
}
```

Finally, I matched the image key with the randomized array into a new array with all the images to display on the web page:
```javascript
const arr = [];
const random = randomizer();
for (let i = 0; i < crewArr.length; i += 1) {
  for (let j = 0; j < random.length; j += 1) {
    if (crewArr[i].pos === random[j]) {
      arr.push(
        <div className='img-container' key={`img${j}`}>
          <img 
            src={crewArr[j].png}
            alt={crewArr[j].alt}
            onClick={(e) => scoreLogic(e)}
            draggable={false}
          />
        </div>
      )
    }
  }
}
```

This utilizes a double for-loop, which I hear isn't an efficient way. I should look for a better way to match two arrays...