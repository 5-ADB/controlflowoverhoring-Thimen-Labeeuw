/**
 * schrijf de code die ervoor zorgt dat als een variabele kleur niet ingevuld is
 * hij een default kleur weergeeft.
 * De kleur wordt uitgeprint in de console
 */

let kleur;

if (kleur == undefined) {
  console.log("kleur is wit (default)");
} else {
  console.log(`kleur is ${kleur}`);
}
