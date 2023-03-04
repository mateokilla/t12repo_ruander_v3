//maganhangzo tabusito
function MaganHangzoTabusito(szo) {
  let maganHangzok = [
    "a",
    "á",
    "e",
    "é",
    "i",
    "í",
    "o",
    "ó",
    "u",
    "ú",
    "ü",
    "ű",
    "A",
    "Á",
    "E",
    "É",
    "I",
    "Í",
    "O",
    "Ó",
    "U",
    "Ú",
    "Ü",
    "Ű",
  ];
  for (let i = 0; i < szo.length; i++) {
    for (let j = 0; j < maganHangzok.length; j++) {
      if (szo[i] == maganHangzok[j]) {
        szo = szo.replace(szo[i], "");
      }
    }
  }
  return szo;
}
document.write(MaganHangzoTabusito("árvíztűrő tükörfurógép"));
