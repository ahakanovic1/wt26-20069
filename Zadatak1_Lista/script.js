
let lista = document.getElementById("lista");

let brojac = document.getElementById("brojac");

let resetDugme = document.getElementById("reset");

let dugmad = document.querySelectorAll(".dugme");

let ukupno = lista.children.length;


// Funkcija za ažuriranje broja završenih stavki

function azurirajBrojac() {

    let zavrsene = lista.querySelectorAll(".stavka.zavrseno");

    let brojZavrsenih = zavrsene.length;

    brojac.textContent =
        "Završeno: " + brojZavrsenih + " / " + ukupno;
}

function promijeniStanje(dugme) {

    let stavka = dugme.parentNode;

    if (stavka.classList.contains("zavrseno")) {

        stavka.classList.remove("zavrseno");

        dugme.textContent = "Označi";

    } else {

        stavka.classList.add("zavrseno");

        dugme.textContent = "Poništi";

    }
    azurirajBrojac();
}

dugmad.forEach(function(dugme) {

    dugme.addEventListener("click", function() {

        promijeniStanje(dugme);

    });

});

function resetujListu() {

    let stavke = lista.children;

    for (let i = 0; i < stavke.length; i++) {

        stavke[i].classList.remove("zavrseno");

        let dugme = stavke[i].querySelector(".dugme");

        dugme.textContent = "Označi";

    }

    azurirajBrojac();

}

resetDugme.addEventListener("click", resetujListu);


azurirajBrojac();
