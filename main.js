const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


// random story items

const insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

const inserty = ['the soup kitchen', 'Disneyland', 'the White House'];

const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

let xItem = randomValueFromArray(insertx);

let yItem = randomValueFromArray(inserty);

let zItem = randomValueFromArray(insertz);


// story text
let  storyText = 'It was 94 fahrenheit outside, so ${xItem} went for a walk.\
When they got to $yItem, they stared in horror for a few moments, then ${zItem}. \
Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.';

// Story generator

let newStory = storyText(xItem, yItem, zItem);
    replaceAll(xItem, yItem, zItem);
    return newStory;

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
};