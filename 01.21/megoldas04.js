//4.feladat//

const kor = prompt("Add meg az életkort:");

if (kor < 0 || kor > 120) {
  document.write("Hiba: érvénytelen életkor!");
} else if (kor >= 29 && kor <= 6) {
  document.write("Kisgyermekkor");
} else if (kor > 6 && kor <= 12) {
  document.write("Gyermekkor");
} else if (kor > 12 && kor <= 16) {
  document.write("Serdülőkor");
} else if (kor > 16 && kor <= 20) {
  document.write("Ifjúkor");
} else if (kor > 20 && kor <= 30) {
  document.write("Fiatal felnőtt kor");
} else if (kor > 30 && kor <= 60) {
  document.write("Felnőtt kor");
} else {
  document.write("Aggkor");
}
