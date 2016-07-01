## **Project One**
### *Emoji Game*
#### Overview
This is a two person game that tests how well the players can decode the emojis into common phrases. The players are presented with two emojis each time and they can input their answers into an empty field. When they hit enter, they are automatically alerted whether they are correct or incorrect. The first player goes through all of the questions before passing it over to the second player. The player is awarded one point for every correct answer. The player with the most points wins the game.

#### Technology Used
I used the HTML to create two pages for my game. An introduction page that contains an emoji background and button leading to another page where the players would mostly interact with.

The images of the emojis which are the questions, are stored in the JavaScript file. The questions and the corresponding answers are stored in arrays. I can call on a function where if I click on an image, it will change my image and allow me to proceed to the next image in the order in which it was placed in the array. There is an if/else statement that allows the player to keep on clicking on the image, cycling through the images over and over again. If the player goes over the amount of images available, it will bring them back to the beginning. So I had to find a way to be able to switch players.

The way the game switches players is when the first player reaches the last question and is displayed a game over sign. Once the game over sign is displayed, the variable for turn goes from "false" to "true" indicating that the turn has been passed from the first player to the second player.


An event listener was created to listen for a "key down". The key down triggers two things:
1. Is there a match between the players' input? If so, alert that they are right or wrong
2. Get score. If the players' input is correct, the getScore function is called which will +1 to the players' current score.

There are two ways that the player can clear the input field, by clicking on the field or hitting the clear button.

CSS was used to style the introductory page and the page that had the game content.


#### Any unsolved problems
There are some things I want to look into to improve the game:
  * Figure out how to properly end the game
  * Once I figure out the above, then getting the code to compare the two players score' would be much more feasible, leading to an alert to congratulate the winner.
  * Every time a new question loads, I would like the field to automatically clear instead of having the user click on the input field or clear button to clear a previous answer.

#### Link
[Emoji Game](https://mimiwu02.github.io/ProjectOne/Emoji_Game/index.html)

#### Sources
* I was introduced to the ternary operator [here](http://stackoverflow.com/questions/23169501/how-to-change-between-3-images-with-javascript-onclick-event) while doing some research on how to change multiple images by clicking.

* Learning how to clear a form field [here](http://stackoverflow.com/questions/16198652/clearing-a-form-field-in-javascript-upon-click)


### *Find My Heart*
#### Overview
Magikoopa Kamek's (the character from Super Mario Brothers) first victim was actually Mr. Robot. He has taken Mr. Robot's heart away so he has turn SUPER evil.

This is a two person game where each player is a knight who tries to find Mr. Robot's heart. They compete with each other to see who will find the heart first to be deemed the hero. The heart is hidden in one of many Magikoopa's magic carpets. Along with the heart, there are also gems that can give them added points. The points are used to purchase skills which will be helpful as the level of difficulty increases throughout the game (future game expansion idea).

The knights are given a minute to take turns to find the heart. The heart is the grand prize. For each level in which the heart is found, it unlocks one of Mr. Robot's precious memories to remind him that he was once good. If the knights fail to find the heart, they have to start over and the scoreboard is reset.

#### Technology Used
HTML was used to create an introductory page that contained the game story as well as the objective. It leads to another page where the game content resides. CSS was used to style both pages.

This game is still a work in progress. The JavaScript will allow me to manipulate the grid layout that I will build using CSS. The grid will contain the image of the gems and the heart. A function to flip the "magic carpet" will be put in place as well.

Since the heart and gems are worth a certain amount of points depending on what gem is found, a function will be called to calculate the current score. If the heart is found before the minute is over, there will be a function that is called to declare the appropriate winner. Once the heart is found, the game is over, so there is no way to find any remaining gems. After the winner is declared, an image of one of the robot's memories is triggered and will be displayed on the screen.

If the heart is not found and time is up, both players lose and the scoreboard is cleared. So they both get a clean slate.

The coding for this game will only be completed for the first level with the potential of expanding the game in the future, with additional levels, difficulties, and more robot memories to collect.

#### Unresolved Problems
Not applicable. Game is still work in progress.

#### Link
[Find My Heart](https://mimiwu02.github.io/ProjectOne/Game-Find_my_heart/index.html)
