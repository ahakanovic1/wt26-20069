const forma = document.getElementById("forma");
const naslovInput = document.getElementById("naslov");
const tekstInput = document.getElementById("tekst");
const greska = document.getElementById("greska");
const pregled = document.getElementById("pregled");

const prikazNaslova = document.getElementById("prikazNaslova");
const prikazTeksta = document.getElementById("prikazTeksta");
const prikazKategorije = document.getElementById("prikazKategorije");

document.getElementById("pregledDugme").addEventListener("click", prikaziObavijest);

function prikaziObavijest() {
    // Prvo preuzimamo i provjeravamo sve podatke.
    const naslov = naslovInput.value.trim();
    const tekst = tekstInput.value.trim();
    const odabranaKategorija = document.querySelector(
        'input[name="kategorija"]:checked'
    );

    // Ne mijenjamo pregled dok unos nije validan.
    if (naslov === "" || tekst === "") {
        greska.textContent = "Naslov i tekst obavijesti moraju biti popunjeni.";
        return;
    }

    if (odabranaKategorija === null) {
        greska.textContent = "Odaberite kategoriju obavijesti.";
        return;
    }

    // Tek nakon uspješne provjere ažuriramo postojeće elemente.
    greska.textContent = "";
    prikazNaslova.textContent = naslov;
    prikazTeksta.textContent = tekst;
    prikazKategorije.textContent =
        odabranaKategorija.value === "Vazno" ? "Važno" : "Informativno";

    pregled.classList.remove("vazno", "informativno");
    pregled.classList.add(
        odabranaKategorija.value === "Vazno" ? "vazno" : "informativno"
    );
}

forma.addEventListener("reset", function () {
    // Reset se izvršava nakon vraćanja polja forme na početne vrijednosti.
    setTimeout(function () {
        greska.textContent = "";
        prikazNaslova.textContent = "Naslov obavijesti";
        prikazTeksta.textContent = "Ovdje će se prikazati tekst obavijesti.";
        prikazKategorije.textContent = "Kategorija";
        pregled.classList.remove("vazno", "informativno");
    }, 0);
});
