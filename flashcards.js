var cardsAdmin = {
  cards: [],
  cardIndex: 0,
  cardSide: 0,
  cardButton:document.querySelector(".cardButton"),
  cardText:document.querySelector(".cardText"),
  cardPosition:document.querySelector(".positionIndex"),
  cardCurrent: function() {
    var currentCard = this.cards[this.cardIndex];
    this.cardText.innerHTML = currentCard.display(this.cardSide);
    this.cardPosition.innerHTML = (this.cardIndex + 1) + "/" + this.cards.length;
  },

  cardFlip: function() {
    if (this.cardSide === 0) {
      this.cardSide = this.cardSide + 1
    }
    else {
      this.cardSide = 0
    }
  },
  cardNav: function(navBy) {
    this.cardIndex += navBy;
    if(this.cardIndex < 0){
      this.cardIndex += this.cards.length;
    }
    else {
    this.cardIndex = this.cardIndex % this.cards.length;
    }
    //Reset next card to front
    this.cardSide = 0;
    this.cardCurrent();
  },
  cardClick: function() {
    this.cardFlip();
    this.cardCurrent();
  },
  cardAdd: function(front, back) {
  this.cards.push(new Card(front, back));
  }
};

// Add value to card for use in card
function Card(front, back) {
  this.frontValue = front;
  this.backValue = back;
  this.display = function(side) {
    if(side === 0) {
      return front;
    }
    else {
      return back;
    }
  };
}

function cardMove() {
  cardsAdmin.cardClick();
}

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


cardsAdmin.cardText.addEventListener("click", cardMove);
