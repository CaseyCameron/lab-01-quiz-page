export function isYes(userInput){
    return userInput[0].toLowerCase() === 'y';
}

export function gradeScore(score, name, scoreResults){
    const finalScore = document.getElementById('final-score');
    const roundedScore = roundScore(score);
    if (score === 3){
        finalScore.style.fontFamily = 'Coming Soon';
        scoreResults = `Awesome! ${name}, you got ${score} answers right. That's ${roundedScore}%!`; 
    } else if (score === 0){
        finalScore.fontFamily = 'Nerko One';
        finalScore.fontWeight = 'bold';
        scoreResults = `Ouch! ${name}, you got ${score} answers right. That's ${roundedScore}%.`;
    } else {
        scoreResults = `${name}, you got ${score} answers right. That's ${roundedScore}%!`;
    }
    finalScore.textContent = scoreResults;

}

function roundScore(score){
    return Math.round((score / 3) * 100);
}
