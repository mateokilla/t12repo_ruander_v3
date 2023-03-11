function teglaTestTerfogatEsFelszinKalkulator(a, b, c) {
  return document.write(
    "A teglatest terfogata: " +
      a * b * c +
      "<br>" +
      "A teglatest felszine: " +
      2 * (a * b + a * c + b * c) + '<br>'
  );
}

teglaTestTerfogatEsFelszinKalkulator(1, 2, 3);


function lottoSzamGenerator(alsoHatar, felsoHatar, kihuzandoSzamokSzama) {
    let lottoSzamok = [];
  

    while (lottoSzamok.length < kihuzandoSzamokSzama) {
      let randomSzamok = Math.round(Math.random() * (felsoHatar-alsoHatar)) + alsoHatar;
  

      if (lottoSzamok.indexOf(randomSzamok) === -1) {
        lottoSzamok.push(randomSzamok);
      }
    }
  

    return lottoSzamok;
  }
  
document.write(lottoSzamGenerator(1,80,10))

  