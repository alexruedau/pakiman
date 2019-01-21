var pakImages = [];
  pakImages["Cauchin"] = "vaca.png";
  pakImages["Pokacho"] = "pollo.png";
  pakImages["Tocinauro"] = "cerdo.png";


var collection = [];
collection.push(new Pakiman("Cauchin", 100, 30));
collection.push(new Pakiman("Pokacho", 80, 50));
collection.push(new Pakiman("Tocinauro", 120, 40));

for (var pakin of collection) {
  pakin.showIt();
}

for (var x in collection[0]) {
  console.log(x);
}
