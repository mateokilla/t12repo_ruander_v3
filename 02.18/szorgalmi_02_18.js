//1 feladat
//Próbáld meg elkészíteni az A különbség B halmazt, amiben csak azok az emelek szerepelnek amik A-ban vannak, és egysem azok közül, amik B-ben megtalálhatóak

function kulonbsegSzurt(A, B) {
  let A_bol_B_halmaz = [];
  for (let i = 0; i < A.length; i++) {
    if (B.indexOf(A[i]) === -1) {
      A_bol_B_halmaz.push(A[i]);
    }
  }
  return A_bol_B_halmaz;
}

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const B = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const A_bol_B_halmaz = kulonbsegSzurt(A, B);
document.write("Az A-bol B halmaz: " + A_bol_B_halmaz);

document.write("<hr/>");
//2 feladat
//Készítsd el a B különbség A halmaz műveletet

function kulonbsegSzurtV2(A, B) {
  let B_bol_A_halmaz = [];
  for (let i = 0; i < B.length; i++) {
    if (A.indexOf(B[i]) === -1) {
      B_bol_A_halmaz.push(B[i]);
    }
  }
  return B_bol_A_halmaz;
}

const B_bol_A_halmaz = kulonbsegSzurtV2(A, B);
document.write("Az B-bol A halmaz: " + B_bol_A_halmaz);

document.write("<hr/>");

//3 feladat
// Készíts a halmazműveletekből függvényt/eljárást
//- unió
//- metszet

function unio(A, B) {
  let unio = [];
  for (let i = 0; i < A.length; i++) {
    unio.push(A[i]);
  }
  for (let i = 0; i < B.length; i++) {
    if (unio.indexOf(B[i]) === -1) {
      unio.push(B[i]);
    }
  }
  return unio;
}
const unioAB = unio(A, B);
document.write("A halmaz es B halmaz unio: " + unioAB);
document.write("<hr/>");

function metszet(A, B) {
  let metszet = [];
  for (let i = 0; i < A.length; i++) {
    if (B.indexOf(A[i]) !== -1) {
      metszet.push(A[i]);
    }
  }
  return metszet;
}
const metszetAB = metszet(A, B);
document.write("A halmaz es B halmaz metszet: " + metszetAB);

document.write("<hr/>");

function mindenMasodik(szoveg) {
  let eredmeny = "";
  for (let i = 0; i < szoveg.length; i += 2) {
    eredmeny += szoveg.charAt(i);
  }
  return eredmeny;
}

const eredetiSzoveg = "Ez egy szöveg";
const ujSzoveg = mindenMasodik(eredetiSzoveg);
document.write(
  "Az eredeti: " + eredetiSzoveg + "<br/>Es a kivagott: " + ujSzoveg
);
document.write("<hr/>");

const EuropaiUnio = [
  {
    orszag: "Ausztria",
    csatlakozas: "1995.01.01",
  },
  {
    orszag: "Belgium",
    csatlakozas: "1958.01.01",
  },
  {
    orszag: "Bulgária",
    csatlakozas: "2007.01.01",
  },
  {
    orszag: "Ciprus",
    csatlakozas: "2004.05.01",
  },
  {
    orszag: "Csehország",
    csatlakozas: "2004.05.01",
  },
  {
    orszag: "Dánia",
    csatlakozas: "1973.01.01",
  },
  {
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01",
  },
  {
    orszag: "Észtország",
    csatlakozas: "2004.05.01",
  },
  {
    orszag: "Finnország",
    csatlakozas: "1995.01.01",
  },
  {
    orszag: "Franciaország",
    csatlakozas: "1958.01.01",
  },
  {
    orszag: "Görögország",
    csatlakozas: "1981.01.01",
  },
  {
    orszag: "Hollandia",
    csatlakozas: "1958.01.01",
  },
  {
    orszag: "Horvátország",
    csatlakozas: "2013.07.01",
  },
  {
    orszag: "Írország",
    csatlakozas: "1973.01.01",
  },
  {
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01",
  },
  {
    orszag: "Lettország",
    csatlakozas: "2004.05.01",
  },
  {
    orszag: "Litvánia",
    csatlakozas: "2004.05.01",
  },
  {
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01",
  },
  {
    orszag: "Magyarország",
    csatlakozas: "2004.05.01",
  },
  {
    orszag: "Málta",
    csatlakozas: "2004.05.01",
  },
  {
    orszag: "Németország",
    csatlakozas: "1958.01.01",
  },
  {
    orszag: "Olaszország",
    csatlakozas: "1958.01.01",
  },
  {
    orszag: "Portugália",
    csatlakozas: "1986.01.01",
  },
  {
    orszag: "Románia",
    csatlakozas: "2007.01.01",
  },
  {
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01",
  },
  {
    orszag: "Svédország",
    csatlakozas: "1995.01.01",
  },
  {
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01",
  },
  {
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01",
  },
];

document.write(EuropaiUnio.length);

const csatlakozas2007 = EuropaiUnio.filter((item) => {
  return item.csatlakozas === "2007.01.01";
});
document.write("<hr/>");
document.write("Csatlakozas 2007: " + csatlakozas2007.length);

for (let i = 0; i < EuropaiUnio.length; i++) {
  if (EuropaiUnio[i].orszag === "Magyarország") {
    magyarorszag2 = true;
  } else {
    magyarorszag2 = false;
  }
}
document.write("<hr/>");
document.write("Magyarország: " + magyarorszag2);
