class Pakiman {
  constructor(n, l, a) { //name life attack
    this.pakImage = new Image();
    this.pakimanName = n;
    this.pakimanLife = l;
    this.pakimanAttack = a;

    this.pakImage.src = pakImages[this.pakimanName];
  }

  speak() {
    alert(this.pakimanName);
  }

  showIt() {
    document.body.appendChild(this.pakImage);
    document.write("<p>");
    document.write("<strong>" + this.pakimanName +"</strong><br />");
    document.write("Life: " + this.pakimanLife +"<br />");
    document.write("Attack: " + this.pakimanAttack +"<br />");
    document.write("</p> <hr />");
  }
}
