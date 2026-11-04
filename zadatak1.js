
const p1 = 20;
const p2 = 30;

function provjeriKaznu(prekoracenje) {

    if (!Number.isFinite(prekoracenje) || prekoracenje < 0) {
        return "Neispravna vrijednost";
    }

    if (prekoracenje < p1) {
        return {
            kategorija: "Blago prekoracenje",
            kazna: 50,
            bodovi: 0
        };
    }

    if (prekoracenje < p2) {
        return {
            kategorija: "Srednje veliko prekoracenje",
            kazna: 200,
            bodovi: 2
        };
    }

    return {
        kategorija: "Veliko prekoracenje",
        kazna: 400,
        bodovi: 2
    };
}

function prikaziKaznu() {
    let unos = document.getElementById("brzina").value;

    let rezultat = document.getElementById("rezultat");

    // Provjera praznog unosa
    if (unos.trim() === "") {
        rezultat.innerHTML =
            '<p class="greska">Molimo unesite prekoračenje brzine!</p>';
        return;
    }

    let prekoracenje = Number(unos);

    // Provjera ispravnosti unosa
    if (!Number.isFinite(prekoracenje) || prekoracenje < 0) {
        rezultat.innerHTML =
            '<p class="greska">Unesite ispravan nenegativan broj!</p>';
        return;
    }

    // Pozivanje funkcije za provjeru kazne
    let podaci = provjeriKaznu(prekoracenje);

    // Ispis rezultata na HTML stranici
    rezultat.innerHTML = `
        <h3>Rezultat provjere</h3>
        <p><strong>Prekoračenje:</strong> ${prekoracenje} km/h</p>
        <p><strong>Kategorija:</strong> ${podaci.kategorija}</p>
        <p><strong>Novčana kazna:</strong> ${podaci.kazna} KM</p>
        <p><strong>Kazneni bodovi:</strong> ${podaci.bodovi}</p>
    `;
}