// Pronalazimo sva dugmad koja predstavljaju godine.
const dugmadGodina = document.querySelectorAll(".toggle");

dugmadGodina.forEach(function (dugme) {
    dugme.addEventListener("click", function () {
        // data-target sadrži ID podstabla koje pripada ovoj godini.
        const idPodstabla = dugme.dataset.target;
        const podstablo = document.getElementById(idPodstabla);
        const znak = dugme.querySelector(".sign");

        // Provjeravamo trenutno stanje podstabla.
        const trenutnoZatvoreno = podstablo.style.display === "" ||
                                  podstablo.style.display === "none";

        if (trenutnoZatvoreno) {
            podstablo.style.display = "block";
            znak.textContent = "-";
            dugme.setAttribute("aria-expanded", "true");
        } else {
            podstablo.style.display = "none";
            znak.textContent = "+";
            dugme.setAttribute("aria-expanded", "false");
        }
    });
});
