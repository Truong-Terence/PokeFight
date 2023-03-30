import Pokemon from "./modules/pokemon.js";
import Attack from "./modules/attack.js";

// pikachu.attack(evoli)

// Chaque Pokémon attaque à tour de rôle. Un Pokémon est KO lorsque son totalde points de vie est inférieur à zéro.
// Le premier attaquant est décidé par tirage au sortLa méthodeMath.random()retourne un nombre flottant aléatoire compris entre 0 et 1
// •Chaque attaque d’un Pokémon a 10% de chances d’être un coup critique et d’infliger 100% de dégâts supplémentaires.
// •L’application déclare le combat, journalise chaque attaque et affiche le vainqueur en indiquant le nombre de points de vie restants.

// VARIABLES

let statik = new Attack("Statik", 10);
let paratonnerre = new Attack("Paratonnerre", 25);
let adaptabilité = new Attack("Adaptabilité", 9);
let anticipation = new Attack("Anticipation", 15);

let pikachu = new Pokemon("Pikachu", "025", 40, 6, "electrik", 82, 82, statik, paratonnerre);
let evoli = new Pokemon("Evoli", "133", 30, 6.5, "normal", 70, 70, adaptabilité, anticipation);


function getRandomPrio() {
    return Math.floor(Math.random() * 2);
}

function battle(x) {
    let out = ""
    while (pikachu.pv > 0 && evoli.pv > 0) {
        if (x == 1) {
            out += pikachu.attack(evoli)
            if (evoli.pv > 0) {
                out += evoli.attack(pikachu)  
            } else {
                out += (`<p>Pikachu WON !!</p>`)
                break
            }
            if (pikachu.pv > 0) {
                out += pikachu.attack(evoli)  
            } else {
                out += (`<p>Evoli WON !!</p>`)
                break
            }
        } else {
            out += evoli.attack(pikachu)
            
            if (evoli.pv > 0) {
                out += evoli.attack(pikachu)
            } else {
                out += (`<p>Pikachu WON !!</p>`)
                break
            }

            if (pikachu.pv > 0) {
                out += pikachu.attack(evoli)
            } else {
                out += (`<p>Evoli WON !!</p>`)
                break
            }
        }
    }
    return out
}


function launchBattle() {
    let prio = getRandomPrio()
    let placeholder = document.querySelector("#data-output")
    let first = ""
    let out = ""
    let out2 = battle(prio)
    prio ? first = "Pikachu" : first = "Evoli"
    out += `
    <h1>${pikachu.name} VS ${evoli.name}</h1>
    <p>Le tirage au sort a décidé que ${first} attaquait en premier.
    <hr>
    <p>${evoli.name} a ${evoli.pv_max} points de vie.</p>
    <p>${pikachu.name} a ${pikachu.pv_max} points de vie.</p>
    <hr>
    `
    placeholder.innerHTML = out + out2;
}

launchBattle()