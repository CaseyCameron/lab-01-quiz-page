## The Setup
1) Layout Image - H1 - Text - Launch Quiz button - quiz results (all in 1 column center)
2) Content - Photo - Boozehound. About - Boozehounds
3) Create a Launch Quiz button with an id
    - Why? To tell the site WHEN to launch the quiz
    - How? lauchQuizButton.addEventListener('click', () => {});
    - Questions? 
    1) What is your name?
    2) Boozehound Q1 
    3) Boozehound Q2
    4) Boozehound Q3
4) Make a results section with an id
    - Why? To display the quiz score
    - How? results.textContent = "Your results..."

## What does it mean to launch a quiz?
    - Announce that there is a quiz
        - How? `alert()`
    - Check to see if the user wants to take it
        - How? `confirm()`
    - Get the user's name
        - How? `prompt()`
    - Ask three questions
        - How?  `prompt()`
    - Score the quiz
        - How? `isYes()`
    - Display the results
        - How? `textContent = 'whatever'`

## Create a function isAYes and test it
    - The function takes in a user input
    - Returns a boolean based on whether the string supplied counts as a yes. 
    - The criteria being it starts with a 'y'
    1) Should be exported from /utils.js
    2) The test should live at /test/utils.test.js
    3) Don't forget to import './utils.test.js'; in file /test/tests.js!

## Stretch Goals
    1) Add a class to style the result differently based on a perfect score or zero score
    2) Add a line that congratulates, or encourages improvement
    3) Include a percentage without decimal places. 
