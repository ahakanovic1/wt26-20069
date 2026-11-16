const forma = document.getElementById("forma");
const nazivInput = document.getElementById("naziv");
const iznosInput = document.getElementById("iznos");
const tabela = document.getElementById("tabela");
const tijeloTabele = tabela.querySelector("tbody");

const redZbira = document.getElementById("redZbira");
const redProsjeka = document.getElementById("redProsjeka");
const redMax = document.getElementById("redMax");

const zbirElement = document.getElementById("zbir");
const prosjekElement = document.getElementById("prosjek");
const maxElement = document.getElementById("maxElement");
const brojStavkiElement = document.getElementById("brojStavki");
const greska = document.getElementById("greska");

function azurirajStatistiku() {
    const redovi = tijeloTabele.querySelectorAll(
        "tr:not(#redZbira):not(#redProsjeka):not(#redMax)"
    );

    let zbir = 0;
    let max = null;

    redovi.forEach(function (red) {
        const iznos = Number(red.cells[1].textContent);
        zbir += iznos;

        if (max === null || iznos > max) {
            max = iznos;
        }
    });

    const prosjek = redovi.length > 0 ? zbir / redovi.length : 0;

    zbirElement.textContent = zbir.toFixed(2);
    prosjekElement.textContent = prosjek.toFixed(2);
    maxElement.textContent = max === null ? "0.00" : max.toFixed(2);
    brojStavkiElement.textContent = "Broj stavki: " + redovi.length;
}

forma.addEventListener("submit", function (dogadjaj) {
    dogadjaj.preventDefault();

    const naziv = nazivInput.value.trim();
    const tekstIznosa = iznosInput.value.trim();
    const iznos = Number(tekstIznosa);

    if (naziv === "" || tekstIznosa === "" ||
        !Number.isFinite(iznos) || iznos < 0) {
        greska.textContent =
            "Unesite naziv i ispravan nenegativan brojčani iznos.";
        return;
    }

    greska.textContent = "";

    const noviRed = tijeloTabele.insertRow(redZbira.rowIndex - 1);
    const celijaNaziv = noviRed.insertCell(0);
    const celijaIznos = noviRed.insertCell(1);

    celijaNaziv.textContent = naziv;
    celijaIznos.textContent = iznos.toFixed(2);

    azurirajStatistiku();

    forma.reset();
    nazivInput.focus();
});

azurirajStatistiku();
