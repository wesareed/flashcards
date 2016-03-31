var cardsAdmin = {
    cards: [],
    cardIndex: 0,
    cardSide: 0,
    cardButton: document.querySelector(".cardButton"),
    cardText: document.querySelector(".cardText"),
    cardPrev: document.querySelector("#previousCard"),
    cardNext: document.querySelector("#nextCard"),
    cardPosition: document.querySelector(".positionIndex"),
    cardUser: document.querySelector("#addButton"),
    cardCurrent: function() {
        var currentCard = this.cards[this.cardIndex];
        this.cardText.innerHTML = currentCard.display(this.cardSide);
        this.cardPosition.innerHTML = (this.cardIndex + 1) + "/" + this.cards.length;
    },

    cardFlip: function() {
        if (this.cardSide === 0) {
            this.cardSide = this.cardSide + 1
        } else {
            this.cardSide = 0
        }
    },
    cardNav: function(navBy) {
        this.cardIndex += navBy;
        if (this.cardIndex < 0) {
            this.cardIndex = this.cardIndex + this.cards.length;
        } else {
            this.cardIndex = this.cardIndex % this.cards.length;
        }
        //Reset next card to show front
        this.cardSide = 0;
        this.cardCurrent();
    },
    cardClick: function() {
        this.cardFlip();
        this.cardCurrent(); //Displays card on refresh
    },
    cardAdd: function(front, back) {
        this.cards.push(new Card(front, back));
    }
};

// Add value to card for use in cardAdd

function Card(front, back) {
    this.frontValue = front;
    this.backValue = back;
    this.display = function(side) {
        if (side === 0) {
            return front;
        } else {
            return back;
        }
    };
}


// Function for event listeners

function cardMinus() {
  cardsAdmin.cardNav(-1);
}

function cardPlus() {
  cardsAdmin.cardNav(1);
}

// New cards

cardsAdmin.cardAdd("love", "αγάπη");
cardsAdmin.cardAdd("truth", "αλήθεια");
cardsAdmin.cardAdd("fear", "φόβος");
cardsAdmin.cardAdd("mankind", "ανθρωπότητα");
cardsAdmin.cardAdd("scripture", "γραφή");
cardsAdmin.cardAdd("good news", "Ευαγγέλιο");
cardsAdmin.cardAdd("world", "κόσμος");
cardsAdmin.cardAdd("money", "χρήματα");
cardsAdmin.cardAdd("seek", "ψάχνω");
cardsAdmin.cardAdd("glory", "δόξα");
cardsAdmin.cardCurrent();


// Checks for whitespace and returns if there is

function isEmpty(string) {
  return (string.length === 0 || !string.trim());
}

var cardEntry = function() {
    var newFront = document.querySelector("#newFront");
    var newBack = document.querySelector("#newBack");
    if (isEmpty(newFront.value) || isEmpty(newBack.value))
        return

    cardsAdmin.cardAdd(newFront.value, newBack.value);
    newFront.value = "";
    newBack.value = "";
    cardsAdmin.cardCurrent();
}


// Event listeners

cardsAdmin.cardText.addEventListener("click", function() {
  cardsAdmin.cardClick();
});
cardsAdmin.cardPrev.addEventListener("click", cardMinus);
cardsAdmin.cardNext.addEventListener("click", cardPlus);
cardsAdmin.cardUser.addEventListener("click", function() {
  cardEntry();
});
