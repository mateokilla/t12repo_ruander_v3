document.write(
  "<style> body{background-color: black; color: white; font-size: 1.5rem; margin: 1rem;</style>"
);
document.write("2023.02.10." + "<hr>");
////////////////////////////////////////////////////////////////////////////////////////////////////
document.write("1. keszito() feladat");
document.write("<br>");
function keszito() {
  document.write("Bernáth Márk" + "<br>");
  document.write("Junior Frontend + Webfejlesztő" + "<br>");
  document.write("12Team");
}
keszito();
document.write("<hr>");
////////////////////////////////////////////////////////////////////////////////////////////////////
document.write("2. hatvanyozo() feladat");
document.write("<br>");
function hatvanyozo(szam, hatvany) {
  return Math.pow(szam, hatvany);
}
const szam = Number(prompt("Adj meg egy szamot"));
const hatvany =  Number(prompt("Adj meg egy hatvanyt"));
const eredmeny = hatvanyozo(szam, hatvany);
document.write(
  `A hatvanyozando szam: ${szam}, a hatvany: ${hatvany}` +
    ", a hatvanyozott szam pedig: " + eredmeny
    
);
document.write("<hr>");
////////////////////////////////////////////////////////////////////////////////////////////////////
document.write("3. parosLetrehoz() feladat");
document.write("<br>");
function parosLetrehoz(alsoHat, felsoHat) {
  let parosSzamok = [];
  for (let i = alsoHat; i <= felsoHat; i++) {
    if (i % 2 === 0) {
      parosSzamok.push(i);
    }
  }
  return parosSzamok;
}
parosSzam = parosLetrehoz(1, 100)
document.write(parosSzam);
document.write("<hr>");
////////////////////////////////////////////////////////////////////////////////////////////////////
document.write("4. testTomegIndex() feladat");
document.write("<br>");
function testTomegIndex(suly, magassag) {
  let bmi = suly / (magassag * magassag);
  if (bmi < 16) {
    return "sulyosSovanysag";
  } else if (bmi >= 16 && bmi < 17) {
    return "mersekeltSovanysag";
  } else if (bmi >= 17 && bmi < 18.5) {
    return "enyheSovanysag";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "normalisTestsuly";
  } else if (bmi >= 25 && bmi < 30) {
    return "tulsulyos";
  } else if (bmi >= 30 && bmi < 35) {
    return "IfokuElhizas";
  } else if (bmi >= 35 && bmi < 40) {
    return "IIfokuElhizas";
  } else {
    return "IIIfokuSulyosElhizas";
  }
}
const suly = Number(prompt("Adja meg a testsulyat kg-ban"));
const magassag =  Number(prompt("Adj meg a magassagat meterben"));
document.write("A testtomeg indexe alapjan on: " + testTomegIndex(suly, magassag));
document.write("<hr>");
////////////////////////////////////////////////////////////////////////////////////////////////////
document.write("5. egeszOsztoE() feladat");
document.write("<br>");
function egeszOsztoE(szam, oszto) {
  if (szam % oszto === 0) {
    return true;
  } else {
    return false;
  }
}
const szamOszto = Number(prompt("Adjon meg egy szamot"));
const osztoOszto =  Number(prompt("Adjon meg meg egyet"));
document.write(`A szam: ${szamOszto}, az oszto pedig: ${osztoOszto}`)
document.write("<br>");
document.write(egeszOsztoE(szamOszto, osztoOszto));
document.write("<br>");
document.write("A 25-nek az 5 osztója: ");
document.write(egeszOsztoE(25, 5));
document.write("<br>");
document.write("A 1050-nek a 7 osztója: ");
document.write(egeszOsztoE(1050, 7));
document.write("<br>");
document.write("A 2048-nak a 3 osztója: ");
document.write(egeszOsztoE(2048, 3));
document.write("<hr>");
////////////////////////////////////////////////////////////////////////////////////////////////////