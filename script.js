let cards = document.querySelectorAll(".card");
let page = 0;
function show() {
    cards.forEach((card, i) => {
        card.style.display = i >= page * 3 && i < page * 3 + 3 ? "block" : "none";
    });
}
document.getElementById("next").onclick = function() {
    if (page < 1) {
        page++;
        show();
    }
};
document.getElementById("prev").onclick = function() {
    if (page > 0) {
        page--;
        show();
    }
};
show();