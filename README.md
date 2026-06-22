# Web Development Project 3 - Desi Food Flashcards Part 2

Submitted by: **Sumaiya Shumu**

This web app: **A South Asian food flashcard study app where users can guess answers before flipping the card, receive correct or incorrect feedback, move forward and backward through the card set, shuffle cards, and track their current and longest correct-answer streaks.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**

  * [x] Application features a clearly labeled input box with a submit button where users can type in a guess
  * [x] Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong
  * [x] Clicking on the submit button with a **correct** answer shows visual feedback that it is correct

* [x] **The user can navigate through an ordered list of cards**

  * [x] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  * [x] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  * [x] Both the next and back buttons have a visual indication when the user is at the beginning or end of the list by becoming disabled, preventing wrap-around navigation

The following **optional** features are implemented:

* [x] Users can use a shuffle button to randomize the order of the cards

  * [x] Cards remain in the same sequence unless the shuffle button is clicked
  * [x] Cards change to a random sequence once the shuffle button is clicked

* [x] A user’s answer may be counted as correct even when it is slightly different from the target answer

  * [x] Answers are considered correct even if they partially match an accepted answer
  * [x] The answer checking ignores uppercase/lowercase differences and punctuation differences

* [x] A counter displays the user’s current and longest streak of correct responses

  * [x] The current counter increments when a user guesses an answer correctly
  * [x] The current counter resets to 0 when a user guesses an answer incorrectly
  * [x] A separate counter tracks the longest streak and updates when the current streak becomes higher than the longest streak

* [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards

  * [ ] The user can mark a card to indicate that it has been mastered
  * [ ] Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards

The following **additional** features are implemented:

* [x] Added category-based card colors for Easy, Medium, and Hard cards
* [x] Added a card number display to show the user's current position in the card set
* [x] Added hover effects for the flashcards and buttons
* [x] Reset the input box and feedback message when the user moves to another card
* [x] Reset the card to the question side when the user moves to another card

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='walkthrough.gif' title='Video Walkthrough' width='600' alt='Video Walkthrough' />

GIF created with **ScreenToGif**

## Notes

One challenge I encountered was changing the project from a random-card flashcard app into an ordered flashcard app with previous and next navigation. I also had to make sure the previous button was disabled on the first card and the next button was disabled on the last card so that the app did not wrap around. Another challenge was checking the user's guess while allowing slightly different answers to still count as correct.

## License

```
Copyright 2026 Sumaiya Shumu

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
