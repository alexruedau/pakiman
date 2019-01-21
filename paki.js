var pakImages = [];
  pakImages["Cauchin"] = "vaca.png";
  pakImages["Pokacho"] = "pollo.png";
  pakImages["Tocinauro"] = "cerdo.png";

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
//console.log(cauchin, pokacho, tocinauro);

pokacho.showIt();
cauchin.showIt();
tocinauro.showIt();
