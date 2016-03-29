var deck = [
  {
    cardPosition: "1",
    front: "love",
    back: "αγάπη",
  },

  {
    cardPosition: "2",
    front: "encourage",
    back: "ενθαρρύνω",
  },

  {
    cardPosition: "3",
    front: "father",
    back: "πατέρας",
  },
];

// Show 1st card
var current = 0
var currentCard = deck[current]
var display = document.querySelector(".porch");
display.innerHTML = currentCard.front


// Flip current card
function flip (){
  if(display.innerHTML == currentCard.front) {
    display.innerHTML = currentCard.back
  }
  else {
    display.innerHTML = currentCard.front
  }
};

display.addEventListener("click", flip)


// Next Button
var nextButton = document.querySelector("#nextButton");

function nextCard () {
  current = current + 1
  currentCard = deck[current]
  display.innerHTML = currentCard.front
}

nextButton.addEventListener("click", nextCard)


// Previous Button
var previousButton = document.querySelector("#previousButton");

function previousCard () {
  current = current - 1
  currentCard = deck[current]
  display.innerHTML = currentCard.front
}

previousButton.addEventListener("click", previousCard)
