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
