let jeuTableau;
let allCards = document.querySelectorAll(".card");
allCards.forEach((card) => {
  card.addEventListener("click", function () {
    if (card.classList.contains("caché")) {
      card.classList.remove("caché");
    } else {
      card.classList.add("caché");
    }
  });
});

// function generateGameArray(x);
// let Tableau = new Array(x);
// for (var i = 0; i< Tableau.length; i++) {
//     Tableau[i] = new Array(y);
// }

// jeuTableau = Tableau;

// function getRamdomInt(max) {
//     return Math.floor(Math.random() * max)
// };
