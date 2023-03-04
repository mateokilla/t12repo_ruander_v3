//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

const csapatAdat = [
  "Anglia;4;0;1662",
  "Argentína;10;0;1614",
  "Belgium;1;0;1752",
  "Brazília;3;-1;1719",
  "Chile;17;-3;1576",
  "Dánia;14;-1;1584",
  "Franciaország;2;1;1725",
  "Hollandia;13;3;1586",
  "Horvátország;8;-1;1625",
  "Kolumbia;9;-1;1622",
  "Mexikó;12;0;1603",
  "Németország;16;-1;1580",
  "Olaszország;15;1;1583",
  "Peru;19;0;1551",
  "Portugália;5;1;1643",
  "Spanyolország;7;2;1631",
  "Svájc;11;0;1604",
  "Svédország;18;0;1560",
  "Szenegál;20;0;1546",
  "Uruguay;6;-1;1639",
];

/*const csapatAdatObjektum = {};

for (let i = 0; i < csapatAdat.length; i++) {
  const adat = csapatAdat[i].split(";");
  csapatAdatObjektum[adat[0]] = {
    helyezes: adat[1],
    valtozas: adat[2],
    pontszam: adat[3],
  };
}

for (let orszag in csapatAdatObjektum) {
  document.write(orszag + ":<br>");
  document.write("Helyezés: " + csapatAdatObjektum[orszag].helyezes + "<br>");
  document.write("Változás: " + csapatAdatObjektum[orszag].valtozas + "<br>");
  document.write(
    "Pontszám: " + csapatAdatObjektum[orszag].pontszam + "<br><br>"
  );
}*/

//Feri megoldasa
function objetumFeltolto(feltoltendoElem) {
  const beolvasottAdatok = [];
  for (let i = 0; i < feltoltendoElem.length; i++) {
    let objektum = {};
    let daraboltAdatSor = feltoltendoElem[i].split(";");
    objektum.nev = daraboltAdatSor[0];
    objektum.helyezes = daraboltAdatSor[1];
    objektum.valtozas = daraboltAdatSor[2];
    objektum.pont = daraboltAdatSor[3];
    beolvasottAdatok.push(objektum);
  }
  return beolvasottAdatok;
}

const fifaAdatok = objetumFeltolto(csapatAdat);
document.write('<table border="1">');
document.write(
  "<tr><th>Nev</th><th>Helzezes</th><th>Valtozas</th><th>Pont</th></tr>"
);
//adatok
for (let i = 0; i < fifaAdatok.length; i++) {
  document.write(
    `<tr><td>${fifaAdatok[i].nev}</td><td>${fifaAdatok[i].helyezes}</td><td>${fifaAdatok[i].valtozas}</td><td>${fifaAdatok[i].pont}</td></tr>`
  );
}
document.write("</table>");
document.write("<hr>");

//1. Mennyi a csapatok szama?
function csapatokSzama(objektum) {
  const szamuk = objektum.length;
  document.write(szamuk);
}

csapatokSzama(fifaAdatok);
document.write("<hr>");
//2. Mennyi a csapatok atlag pontszama?
function atlagSzamitas(objektum) {
  let osszpontszam = 0;
  for (let i = 0; i < objektum.length; i++) {
    osszpontszam += parseInt(objektum[i].pont);
  }
  const atlag = osszpontszam / objektum.length;
  document.write(atlag);
}

atlagSzamitas(fifaAdatok);
