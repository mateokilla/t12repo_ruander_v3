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
/////////////////////////////////
document.write(EuropaiUnio.length);

/////////////////////////////////
for (let i = 0; i < EuropaiUnio.length; i++) {
  if (EuropaiUnio[i].orszag === "Magyarország") {
    magyarorszag2 = true;
  } else {
    magyarorszag2 = false;
  }
}
document.write("<hr/>");
document.write("Magyarország: " + magyarorszag2);
document.write("<hr/>");
///////////////////////////////

//Volt-e majsuban csatlakozo?
function voltEMajusi() {
  let majusiak = [];
  for (let i = 0; i < EuropaiUnio.length; i++) {
    if (EuropaiUnio[i].csatlakozas.includes(".05.")) {
      majusiak.push(EuropaiUnio[i].orszag);
    }
  }

  return majusiak;
}

document.write(voltEMajusi());
document.write("<hr/>");

function legutolsoOrszag() {
  let utolso = "";
  for (let i = 0; i < EuropaiUnio.length; i++) {
    if (EuropaiUnio[i].csatlakozas.startsWith("201")) {
      utolso = EuropaiUnio[i].orszag;
    }
  }

  return utolso;
}

document.write(legutolsoOrszag());

document.write("<hr/>");

function utolsoOrszag() {
  let maxIndex = 0;
  for (let i = 0; i < EuropaiUnio.length; i++) {
    let aktIndexEv = Number(EuropaiUnio[i].csatlakozas.substring(0, 4));
    let maxIndexEv = Number(EuropaiUnio[maxIndex].csatlakozas.substring(0, 4));

    if (aktIndexEv > maxIndexEv) {
      maxIndex = i;
    }
  }

  return maxIndex;
}

document.write(EuropaiUnio[utolsoOrszag()].orszag);
