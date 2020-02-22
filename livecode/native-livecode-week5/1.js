/**
 * Elementalist Battle.
 * 
 * Function akan menerima input berupa object player dan array berisi serangan yang akan dihadapi player tersebut. 
 * Seorang player memiliki nama, health, dan element. 
 * -health : merupakan nyawa dari pemain, dari  0 - 100
 * -element: merupakan elemen dari pemain
 * 
 * Terdapat 3 jenis element: wind, fire, dan water.
 * Tiap elemen memiliki DAMAGE yang sama yaitu 25
 * Berikut ini aturan untuk elemen tersebut:
 * 
 * -fire bisa memberikan damage kepada wind    fire > wind
 * -water bisa memberikan damage fire          water > fire
 * -wind bisa memberikan damage water          wind > water
 * 
 * 
 * Selain 3 itu, tidak ada efeknya, misal untuk kasus water:
 * water tidak bisa memberikan damage kepada wind
 * water tidak bisa memberikan damage kepada water
 * 
 * -Jika health player sudah 0, maka keluarkan output "Player `name` meninggal"
 * -Jika health player masih ada, maka output object player tersebut
 * 
 * RULES:
 *  - Tuliskan Pseudocode kalian, No pseudocode = 0 !!!
 *  - Dilarang menggunakan .filter .reduce .in
 */

/* 
Pseudocode

LOOP player health > 0 AND attack array length
  IF attack is fire AND element is wind
  THEN health - 25
  IF attack is water AND element is fire
  THEN health - 25
  IF attack is wind AND element is water
  THEN health - 25
END LOOP

IF player health <= 0
THEN PRINT "Player 'name' meninggal"
ELSE
PRINT player object
*/

function elementBattle(player, attacks) {
  for (var i = 0; i < attacks.length && player.health > 0; i++) {
    if (attacks[i] === `fire` && player.element === `wind`) {
      player.health -= 25;
    } else if (attacks[i] === `water` && player.element === `fire`) {
      player.health -= 25;
    } else if (attacks[i] === `wind` && player.element === `water`) {
      player.health -= 25;
    }
  }

  if (player.health <= 0) {
    return `Player ${player.name} meninggal`
  } else {
    return player
  }
}

console.log(elementBattle({
  name: "Aang",
  health: 100,
  element: "wind"
}, ["water", "fire", "fire", "wind"]));
//{ name: 'Aang', health: 50, element: 'wind' }

console.log(elementBattle({
  name: 'Zuko', 
  element: "fire",
  health: 100
}, ['water','water','water','water','water']))
// Player Zuko meninggal

console.log(elementBattle({
  name: 'Katara', 
  element: "water", 
  health: 35
}, ['water','fire', 'wind', 'wind', 'wind']))
// Player Katara meninggal