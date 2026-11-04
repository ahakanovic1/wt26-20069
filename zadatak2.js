
function ucitajPozitivanCijeliBroj(poruka) {
    while (true) {
        let unos = prompt(poruka);

        if (unos === null) {
            return null;
        }

        if (unos.trim() === "") {
            alert("Unos ne smije biti prazan!");
            continue;
        }

        // Eksplicitna konverzija unosa u broj
        let broj = Number(unos);

        if (Number.isFinite(broj) &&
            broj > 0 &&
            Number.isInteger(broj)) {
            return broj;
        }

        alert("Morate unijeti pozitivan cijeli broj!");
    }
}


// Funkcija za generisanje plana aktivnosti
function generisiPlan(n, k) {

    let aktivnost = "Vježbanje";

    console.log("PLAN AKTIVNOSTI: " + aktivnost);
    console.log("Ukupan broj ponavljanja: " + n);
    console.log("Pauza nakon svakih " + k + " ponavljanja.");
    console.log("--------------------------------");

    for (let i = 1; i <= n; i++) {

        // Ispis rednog broja ponavljanja
        console.log("Ponavljanje broj " + i);

        // Provjera da li je vrijeme za pauzu
        if(i==n) continue
        if (i % k === 0) {
            console.log("PAUZA! Vrijeme je za kratki odmor.");
            console.log("--------------------------------");
        }
    }

    console.log("Plan aktivnosti je završen!");
}


let n = ucitajPozitivanCijeliBroj(
    "Unesite ukupan broj ponavljanja (n):"
);

if (n !== null) {

    let k = ucitajPozitivanCijeliBroj(
        "Unesite nakon koliko ponavljanja slijedi pauza (k):"
    );

    if (k !== null) {
        generisiPlan(n, k);
    }
}
