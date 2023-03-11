//Bernáth Márk, Team-12
document.write(
  "<style>*{background-color:black; color: whitesmoke; font-size:1.1rem;padding-left:1rem;}</style> <br>"
);

let Dolgozok = [
  {
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda",
  },
  {
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató",
  },
  {
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager",
  },
  {
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító",
  },
  {
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr",
  },
  {
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár",
  },
  {
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos",
  },
];

//1.feladat
document.write("1.feladat<br>");
function hosszEllenor(szoveg) {
  if (szoveg.length < 8) {
    return false;
  } else {
    return true;
  }
}
document.write("<b>Ellenőrízendő szöveg:</b> teszt; " + hosszEllenor("teszt"));
document.write(
  "<br>" +
    "<b>Ellenőrízendő szöveg:</b> feladatteszt; " +
    hosszEllenor("feladatteszt")
);
document.write("<hr>");

//2.feladat
document.write("2.feladat<br>");
function tajSzamEllenor(szamsorSzovegkent) {
  const tombbeAlakitottSzoveg = Array.from(String(szamsorSzovegkent));
  const tombbeAlakitottSzam = tombbeAlakitottSzoveg.map((str) => Number(str));
  let parosSzamokErteke = 0;
  let paratlanSzamokErteke = 0;
  if (tombbeAlakitottSzam.length == 9) {
    for (let i = 1; i < tombbeAlakitottSzam.length; i += 2) {
      parosSzamokErteke = parosSzamokErteke + tombbeAlakitottSzam[i];
    }
    for (let i = 0; i < tombbeAlakitottSzam.length - 1; i += 2) {
      paratlanSzamokErteke = paratlanSzamokErteke + tombbeAlakitottSzam[i];
    }
    if (
      (parosSzamokErteke * 7 + paratlanSzamokErteke * 3) % 10 ==
      tombbeAlakitottSzam[8]
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    document.write("Túl kevés, vagy túl sok a szám.");
  }
}
document.write(
  "<b>Ellenőrízendő szám:</b> 040655330; " + tajSzamEllenor("040655330")
);
document.write(
  "<br>" +
    "<b>Ellenőrízendő szám:</b> 111111111; " +
    tajSzamEllenor("111111111")
);
document.write(
  "<br>" +
    "<b>Ellenőrízendő szám:</b> 037687210; " +
    tajSzamEllenor("037687210")
);
document.write(
  "<br>" +
    "<b>Ellenőrízendő szám:</b> 019536646; " +
    tajSzamEllenor("019536646")
);

document.write("<hr>");

//3.feladat
document.write("3.feladat<br>");
let vizsgaltTomb = [3, 5, 10, 16, 9];

function tombTerjedelem(vizsgalandoTomb) {
  let minErtek = vizsgalandoTomb[0];
  let maxErtek = vizsgalandoTomb[0];

  for (i = 0; i < vizsgalandoTomb.length; i++) {
    if (vizsgalandoTomb[i] < minErtek) {
      minErtek = vizsgalandoTomb[i];
    }
  }

  for (i = 0; i < vizsgalandoTomb.length; i++) {
    if (vizsgalandoTomb[i] > maxErtek) {
      maxErtek = vizsgalandoTomb[i];
    }
  }

  let terjedelem = maxErtek - minErtek;
  document.write(
    `<b>A tömb legkisebb eleme: </b>${minErtek}<b>, a legnagyobb pedig </b>${maxErtek}<b>, a terjedelem pedig: </b>`
  );
  return terjedelem;
}

document.write(tombTerjedelem(vizsgaltTomb));

document.write("<hr>");

//4.feladat
document.write("4.feladat<br>");
function legidosebbDolgozo(objektum) {
  let maxIndex = 0;
  for (let i = 1; i < objektum.length; i++) {
    if (objektum[i].kor > objektum[maxIndex].kor) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

document.write(
  "<b>A legidősebb dolgozó indexe: </b>" + legidosebbDolgozo(Dolgozok)
);

document.write("<hr>");

//5.feladat
document.write("5.feladat a.)<br>");
function fizetesAtlag(objektum) {
  let osszeg = 0;
  let atlag = 0;

  for (let i = 0; i < objektum.length; i++) {
    osszeg += objektum[i].fizetes;
  }
  atlag = parseInt(osszeg / objektum.length);

  return atlag;
}

document.write(
  "<b>A dolgozók átlagfizetése: </b>" + fizetesAtlag(Dolgozok) + "Ft. <br>"
);

document.write("<hr>");

function fizetesEmeles(objektum) {
  const atlag = fizetesAtlag(objektum);
  console.log(atlag);
  for (let i = 0; i < objektum.length; i++) {
    if (objektum[i].fizetes < atlag) {
      //vmiért csak így engedi érvényesen a szorzást
      objektum[i].fizetes = objektum[i].fizetes + objektum[i].fizetes * 0.1;
    }
  }
  return objektum;
}
document.write("5.feladat b.)<br>");
document.write(
  "<b>Az átlag alatti fizetések megemelése előtt az egyes dolgozók bérei a következőek: </b>"
);
document.write("<ul>");
for (let i = 0; i < Dolgozok.length; i++) {
  document.write(`<li>${Dolgozok[i].nev} - ${Dolgozok[i].fizetes} Ft.</li>`);
}
document.write("</ul>");
console.log(fizetesEmeles(Dolgozok));
console.log(typeof Dolgozok[i].fizetes);

document.write(
  "<br><b>Az átlag alatti fizetések megemelése után az egyes dolgozók bérei a következőek: </b>"
);
document.write("<ul>");
for (let i = 0; i < Dolgozok.length; i++) {
  document.write(`<li>${Dolgozok[i].nev} - ${Dolgozok[i].fizetes} Ft.</li>`);
}
document.write("</ul>");

document.write("<hr>");
