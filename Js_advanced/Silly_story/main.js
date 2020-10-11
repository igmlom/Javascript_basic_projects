const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

console.log(Math.round(300));
console.log(Math.round(94));


const insertx = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
]
const inserty = [
    "the soup kitchen",
    "Disneyland",
    "the White House"
]
const insertz = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
]

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    story.textContent = `It was 94 fahrenheit outside, so ${randomValueFromArray(insertx)} went for a walk. When they got to ${randomValueFromArray(inserty)}, they stared in horror for a few moments, then ${randomValueFromArray(insertz)}. Bob saw the whole thing, but was not surprised — ${randomValueFromArray(insertx)} weighs 300 pounds, and it was a hot day.`;

    if (customName.value !== '') {
        let name = customName.value;
        story.textContent = story.textContent.replace("bob", name);
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300 / 14);
        let temperature = Math.round(94 * 5 / 9);
        story.textContent = story.textContent.replace("94 fahrenheit", weight + ' centigrade');
        story.textContent = story.textContent.replace("300 pounds", temperature + ' stone');
    }



    story.style.visibility = 'visible';
}