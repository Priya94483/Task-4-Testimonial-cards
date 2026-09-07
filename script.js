let cards = document.querySelectorAll(".card");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

let page = 0;

function showCards() {
    cards.forEach(function(card, index) {
        if (index >= page * 3 && index < page * 3 + 3) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

nextBtn.addEventListener("click", function() {
    if (page < 1) {
        page++;
        showCards();
    }
});

prevBtn.addEventListener("click", function() {
    if (page > 0) {
        page--;
        showCards();
    }
});

showCards();
