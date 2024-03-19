const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const inserty = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];



// story text
let  storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// Story generator

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const mcName = customName.value;
    } else {
        mcName = "Bob"
    }
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }
    if (story.value == ''){
    xItem = randomValueFromArray(insertx);
    yItem = randomValueFromArray(inserty);
    zItem = randomValueFromArray(insertz);
    newStory = storyText;
    newStory.replace(':insertx:', xItem);
    newStory.replace(':inserty:', yItem);
    newStory.replace(':insertz:', zItem);
    story.textContent = newStory;
    story.style.visibility = 'visible';
    };
 };



console.log(storyText)
console.log(newStory)
console.log(story)