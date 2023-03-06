//Bernáth Márk, Team-12

const Dolgozok = [
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
function hosszEllenor(szoveg) {
  if (szoveg.length < 8) {
    return false;
  } else {
    return true;
  }
}
document.write(hosszEllenor("teszt"));
document.write("<br>" + hosszEllenor("feladatteszt"));
document.write("<hr>");

//2.feladat
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
document.write(tajSzamEllenor("040655330"));
document.write("<br>" + tajSzamEllenor("111111111"));
document.write("<br>" + tajSzamEllenor("037687210"));
document.write("<br>" + tajSzamEllenor("019536646"));

document.write("<hr>");
