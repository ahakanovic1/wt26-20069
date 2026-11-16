const forma = document.getElementById("forma");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");
const greska = document.getElementById("greska");

forma.addEventListener("submit", function (dogadjaj) {
    dogadjaj.preventDefault(); // Ne dozvoljavamo osvježavanje stranice.

    const tekstPoluprecnika = radiusInput.value.trim();
    const r = Number(tekstPoluprecnika);

    // Poluprečnik mora biti unesen, konačan broj i veći od nule.
    if (tekstPoluprecnika === "" || !Number.isFinite(r) || r <= 0) {
        greska.textContent = "Unesite poluprečnik koji je broj veći od nule.";
        volumeInput.value = "0.0000";
        return;
    }

    // Formula za zapreminu kugle: V = (4/3) * PI * r^3.
    const zapremina = (4 / 3) * Math.PI * Math.pow(r, 3);

    volumeInput.value = zapremina.toFixed(4);
    greska.textContent = "";
});

forma.addEventListener("reset", function () {
    // Vraćamo i rezultat i poruku na početno stanje.
    setTimeout(function () {
        volumeInput.value = "0.0000";
        greska.textContent = "";
    }, 0);
});
