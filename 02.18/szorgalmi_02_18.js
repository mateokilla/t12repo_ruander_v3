//1 feladat
//Próbáld meg elkészíteni az A különbség B halmazt, amiben csak azok az emelek szerepelnek amik A-ban vannak, és egysem azok közül, amik B-ben megtalálhatóak

function kulonbsegSzurt(A, B) {
  let kulonbseg = [];
  for (let i = 0; i < A.length; i++) {
    if (B.indexOf(A[i]) === -1) {
      kulonbseg.push(A[i]);
    }
  }
  return kulonbseg;
}

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const B = [1, 3, 5, 7, 9];
const kulonbseg = kulonbsegSzurt(A, B);
document.write(kulonbseg);
