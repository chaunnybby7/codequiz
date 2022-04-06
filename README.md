# codequiz

I built a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. 

## Acceptance Criteria

GIVEN I am taking a code quiz
<em>WHEN I click the start button</em>
__THEN a timer starts and I am presented with a question__
WHEN I answer a question
__THEN I am presented with another question__
WHEN I answer a question incorrectly
__THEN time is subtracted from the clock__
WHEN all questions are answered or the timer reaches 0
__THEN the game is over__
WHEN the game is over
__THEN I can save my initials and my score__


## User Story

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers



## What you will find on my website:

**Step 1**: Click on <Start Quiz>
    - Timer is on the top right of the landing page
    - The countdown timer total time is 180 seconds with 12 questions
    - The <View High Scores> link is on the top left of the landing page, it will redirect user to view all the high scores. 

**Step** 2: Multiple Choice Questions quiz 
    - If the user answered the question wrong, 10 seconds will be penalized
    - If the user answered the question correctly, the score will be incremented by one
    - Below the answers, there will be an alert message notifying the user if answer is correct or wrong. If the answer is wrong, there will be a correct answer shown. 

**Step 3**: Game is over when all questions have been answered or if the timer reaches zero. 

**Step 4**: When the quiz ends, the user is prompted to enter name and the score will be saved to local storage after clicking the <Submit> button. 
    - Sringify array in order to store in local
    - Create a show current highscores function
    - Check if there is any in local storage
    - FOR loop created to iterate the stored high scores and <append()> method for each round of new high score.  

**Step 5**: User can click "Reset High Scores" to clear the saved scores and click on <em>"Go Back"</em> to start quiz again. 



 

## Demo


![My Gif](https://media.giphy.com/media/l93HbL14fFyuWhMBni/giphy.gif)




## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Google Font] (https://fonts.google.com/)

## Deployed Link

* https://chaunnybby7.github.io/codequiz/


## Authors

* **YiLin Ong** 

- [Link to Portfolio Site](https://github.com/chaunnybby7/codequiz)
- [Link to Github](https://github.com/chaunnybby7)
- [Link to LinkedIn](https://www.linkedin.com/in/chauntelleong)


