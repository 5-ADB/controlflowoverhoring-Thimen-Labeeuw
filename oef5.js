// correct

/**
 * Je bouwt verder op de opgave 4.
 *
 *  * commande     -   console output
 * - open deur  =>  deur gaat open
 * - muziek     =>  muziek start met spelen
 * - stilte     =>  Muziek gaat uit
 * - licht aan  =>  Licht gaat aan
 * - licht uit  =>  licht gaat uit
 *
 * stilte geeft echter enkel een output als de radio aan staat
 * licht uit geeft enkel otuput als het licht al aan was
 */

const commando = "stilte";
let radioAan = false;
let LichtAan = true;

switch (commando) {
  case "open deur":
    console.log("deur gaat open");
    break;

  case "muziek":
    console.log("muziek start met spelen");
    radioAan = true;
    break;

  case "stilte":
    if (radioAan) {
      console.log("muziek gaat uit");
    }
    break;

  case "licht aan":
    console.log("licht gaat aan");
    LichtAan = true;
    break;

  case "licht uit":
    if (LichtAan) {
      console.log("licht gaat uit");
    }
    break;

  default:
    console.log("ongeldig commando");
    break;
}
