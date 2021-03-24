import { isYes, gradeScore } from './utils.js';

const launchQuizButton = document.getElementById('launch-quiz-button');
const finalScore = document.getElementById('final-score');

launchQuizButton.addEventListener('click', () => {    
    //confirm user wants to take the test, if not return
    const userConfirm = confirm('Are you sure you want to take this test? y/n');
    if (!userConfirm) return;

    //ask user for name and store
    const name = prompt('What is your name?');

    //ask three questions via prompt and keep score
    let score = 0;
    const firstAnswer = prompt('Do avalanche dogs fly in helicopters?');
    const secondAnswer = prompt('Do avalanche dogs get on their handler\'s shoulders to ski?');
    const thirdAnswer = prompt('Do avalanche dogs really carry booze around their necks?');

    if (isYes(firstAnswer)) score ++;
    if (isYes(secondAnswer)) score ++;
    if (!isYes(thirdAnswer)) score ++;
    alert('Congrats, you finished. See your results below');
    const scoreResults = `${name}, you got ${score} answer right.`;

    finalScore.textContent = scoreResults;
    gradeScore(score);
});