
using JuMP
using GLPK
import MathOptInterface as MOI

# Kreiranje modela i odabir GLPK solvera
model = Model(GLPK.Optimizer)

# Varijable odlučivanja
@variable(model, x1 >= 0)  # Porcije piletine
@variable(model, x2 >= 0)  # Porcije salate

# Funkcija cilja: minimizacija ukupnog troska
@objective(model, Min, 4.5x1 + 5.4x2)

# Ogranicenja
@constraint(model, proteini,
    5.8x1 + 3.5x2 >= 303)

@constraint(model, masti,
    3.5x1 + 0.5x2 <= 1230)

@constraint(model, ugljikohidrati,
    5.5x1 + 4.5x2 == 303)

# Rjesavanje modela
optimize!(model)

if termination_status(model) == MOI.OPTIMAL

    println("OPTIMALNO RJESENJE")
    println("------------------------------")

    println("Broj porcija piletine x1 = ", value(x1))
    println("Broj porcija salate x2 = ", value(x2))

    println("\nMINIMALNI TROSAK")
    println("------------------------------")
    println("Zmin = ", objective_value(model), " KM")

    # Kolicina proteina
    proteini_ukupno = 5.8 * value(x1) + 3.5 * value(x2)
    visak_proteina = proteini_ukupno - 303

    # Kolicina masti
    masti_ukupno = 3.5 * value(x1) + 0.5 * value(x2)
    rezerva_masti = 1230 - masti_ukupno

    # Kolicina ugljikohidrata
    ugljikohidrati_ukupno =
        5.5 * value(x1) + 4.5 * value(x2)

    println("\nANALIZA OGRANICENJA")
    println("------------------------------")
    println("Ukupno proteina = ", proteini_ukupno)
    println("Visak proteina = ", visak_proteina)

    println("Ukupno masti = ", masti_ukupno)
    println("Rezerva masti = ", rezerva_masti)

    println("Ukupno ugljikohidrata = ",
        ugljikohidrati_ukupno)

    println("\nANALIZA CIJENE SALATE")
    println("------------------------------")
    println("Potrebno smanjenje cijene salate = ",
        reduced_cost(x2), " KM")

    println("Nova cijena salate = ",
        5.4 - reduced_cost(x2), " KM")

    println("\nMARGINALNA VRIJEDNOST OGRANICENJA")
    println("------------------------------")
    println("Promjena troska po jedinici ugljikohidrata = ",
        shadow_price(ugljikohidrati), " KM")

else
    println("Optimalno rjesenje nije pronadjeno.")
    println("Status: ", termination_status(model))
end
