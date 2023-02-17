//3.feladat//

let also = parseInt(prompt("Kérem az alsó határt:"));
let felso = parseInt(prompt("Kérem a felső határt:"));

if (also % 2 !== 0) {
    also++;
}

let randomParos = Math.floor(Math.random() * (felso - also + 1) / 2) * 2 + also;

document.write("A generált véletlen páros szám: " + randomParos);