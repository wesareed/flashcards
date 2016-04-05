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
            this.cardSide = this.cardSide + 1;
        } else {
            this.cardSide = 0;
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

// User card entry

// Checks for whitespace and returns if there is
function isEmpty(value) {
  return (value.length === 0 || !value.trim());
}


var cardEntry = function() {
    var newFront = document.querySelector("#newFront");
    var newBack = document.querySelector("#newBack");
    if (isEmpty(newFront.value) || isEmpty(newBack.value))
        return;

    cardsAdmin.cardAdd(newFront.value, newBack.value);
    newFront.value = "";
    newBack.value = "";
    cardsAdmin.cardCurrent();
};

// New cards

cardsAdmin.cardAdd("a", "α - Alpha");
cardsAdmin.cardAdd("b", "β - Beta");
cardsAdmin.cardAdd("g", "γ - Gamma");
cardsAdmin.cardAdd("d", "δ - Delta");
cardsAdmin.cardAdd("e", "ε - Epsilon");
cardsAdmin.cardAdd("z", "ζ - Zeta");
cardsAdmin.cardAdd("h", "η - Eta");
cardsAdmin.cardAdd("th", "θ - Theta");
cardsAdmin.cardAdd("i", "ι - Iota");
cardsAdmin.cardAdd("k", "κ - Kappa");
cardsAdmin.cardAdd("l", "λ - Lambda");
cardsAdmin.cardAdd("m", "μ - Mu");
cardsAdmin.cardAdd("n", "ν - Nu");
cardsAdmin.cardAdd("x", "ξ - Xi");
cardsAdmin.cardAdd("o", "ο - Omicron");
cardsAdmin.cardAdd("p", "π - Pi");
cardsAdmin.cardAdd("r", "ρ - Rho");
cardsAdmin.cardAdd("s", "σ - Sigma");
cardsAdmin.cardAdd("t", "τ - Tau");
cardsAdmin.cardAdd("u", "υ - Upsilon");
cardsAdmin.cardAdd("ph", "φ - Phi");
cardsAdmin.cardAdd("ch", "χ - Chi	");
cardsAdmin.cardAdd("ps", "ψ - Psi");
cardsAdmin.cardAdd("o", "ω - Omega");
cardsAdmin.cardCurrent();


// Event listeners

document.addEventListener("keydown", function(event){
  if (event.keyCode == "37") {
    cardsAdmin.cardNav(-1);
  }
  else if(event.keyCode == "39"){
    cardsAdmin.cardNav(1);
  }
});

cardsAdmin.cardText.addEventListener("click", function() {
  cardsAdmin.cardClick();
});
cardsAdmin.cardPrev.addEventListener("click", function(){
  cardsAdmin.cardNav(-1);
});
cardsAdmin.cardNext.addEventListener("click", function(){
  cardsAdmin.cardNav(1);
});
cardsAdmin.cardUser.addEventListener("click", function() {
  cardEntry();
});
//To my understanding you did great job. Keep it up.
