var time = 5000 //Die Zeit wie lange ein Bild angezeigt wird in ms
var bild = new Array();
bild[0] = "haus1.jpg"; //Deine Bilder (belibig erweiterbar)
bild[1] = "haus_neu.jpg";


var narf = "0";
function bildwechseln() {
        document.wechselbild.src = bild[narf];
        narf++;
        if (narf == bild.length) {
            narf = 0;
        }
        setTimeout("bildwechseln()",time);
}