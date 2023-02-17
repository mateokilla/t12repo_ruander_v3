//5.feladat//

const szam = prompt("Add meg a számot:");
const osztó = prompt("Add meg az osztót:");

if (szam % osztó === 0) {
  document.write("osztható");
} else {
  document.write("nem osztható");
}