const prompt = require("prompt-sync")({ sigint: true });

let name = prompt("Wie ist dein Name? ");

console.log(`Benutzereingabe: ${name} `); // Die Variable "name" wird in der Konsole ausgegeben, um den Spieler zu begrüßen.
// Ausgabe = Wie Ist dein Name?

let spieler = {
  name: "Spieler",
  punkte: 0,
  leben: 3,
};// Die Variable "spieler" wird als Objekt definiert, das die Eigenschaften "name", "punkte" und "leben" hat.

let gegner = [
  { name: "Hans", leben: 1 },
  { name: "Jasmin", leben: 1 },
  { name: "Stefen", leben: 1 },
  { name: "Cloudia", leben: 1 },
];// Die Variable "gegner" wird als Array definiert, das aus Objekten besteht, die die Eigenschaften "name" und "leben" haben.

while (spieler.leben > 0) {
  console.log(
    `Spieler: ${spieler.name}, Punkte: ${spieler.punkte}, Leben: ${spieler.leben}`
  ); // ausgabe Spieler: Spieler, Punkte: 0, Leben: 3

  console.log(
    `Gegner: ${gegner[0].name} (${gegner[0].leben}), ${gegner[1].name}(${gegner[1].leben}), ${gegner[2].name} (${gegner[2].leben})`
  ); // Ausgabe Gegner: Hans (1), Jasmin (1), Stefen (1)

  let aktion = prompt("Was möchtest du tun? (A)ngreifen oder (V)erteidigen ");

  if (aktion.toLowerCase() === "a") {
    let zufall = Math.floor(Math.random() * gegner.length);
    gegner[zufall].leben--;
    console.log(`${spieler.name} greift ${gegner[zufall].name} an!`);
    if (gegner[zufall].leben === 0) {
      console.log(`${gegner[zufall].name} ist besiegt!`);
      gegner.splice(zufall, 1);
      spieler.punkte++;
    }
  }
  // Wenn der Spieler angreift, wird ein zufälliger Gegner ausgewählt und seine Lebenspunkte um 1 reduziert. Wenn der Gegner keine Lebenspunkte mehr hat, wird er aus dem Array entfernt und der Spieler erhält einen Punkt.

  else if (aktion.toLowerCase() === "v") {
    spieler.leben--;
    console.log(`${spieler.name} verteidigt sich!`);
  } // Wenn der Spieler verteidigt, wird sein Leben um 1 reduziert.
  {
    console.log("Ungültige Eingabe!");
  }
  
} // Wenn der Spieler keine Lebenspunkte mehr hat, wird das Spiel beendet.

console.log('`Spiel vorbei!`'); // Die Variable "spiel vorbei" wird in der Konsole ausgegeben, um den Spieler zu informieren, dass das Spiel vorbei ist.

















































//------------------------------Ende----------im anschluß mein Meine hoch und tief

// Das ziel
// war es, dass der Spieler gegen 4 Gegner kämpft, die zufällig ausgewählt werden. Wenn der Spieler angreift, wird ein zufälliger Gegner ausgewählt und seine Lebenspunkte um 1 reduziert. Wenn der Gegner keine Lebenspunkte mehr hat, wird er aus dem Array entfernt und der Spieler erhält einen Punkt. Wenn der Spieler verteidigt, wird sein Leben um 1 reduziert. Wenn der Spieler keine Lebenspunkte mehr hat, wird das Spiel beendet.

// Problem Das ich am ende hatte,
// ich habe nicht die Möglichkeit gefunden, den Spieler zu fragen, ob er noch einmal spielen möchte.
//   Ich habe versucht, die Bibliothek "prompt-sync" zu verwenden, aber ich habe nicht herausgefunden, wie ich den Spieler fragen kann, ob er noch einmal spielen möchte. Ich habe auch versucht, die Bibliothek "readline" zu verwenden, aber ich habe nicht herausgefunden, wie ich den Spieler fragen kann, ob er noch einmal spielen möchte.

// Ich habe leider mich an verschiedenen projecte versucht das mich am ende tottal verzettelt habe. Aber snake ist etwas was ich erstangefangen habe

// was ich mega finde ist das man soviele tolle dinge schon mit der console machen kann. Ich habe mich auch mit dem Thema "DOM" beschäftigt und finde es auch sehr spannend. Ich habe auch versucht, die Bibliothek "prompt-sync" zu verwenden, aber ich habe nicht herausgefunden, wie ich den Spieler fragen kann, ob er noch einmal spielen möchte. Ich habe auch versucht, die Bibliothek "readline" zu verwenden, aber ich habe nicht herausgefunden, wie ich den Spieler fragen kann, ob er noch einmal spielen möchte.

//Wie schon oben erwähnt habe ich auch , mit JavaScript , css und html das Spiel "Snake" als erstes project begonnen und dabei auch das Document Object Model (DOM) kennengelernt. Durch das DOM konnte ich auf die HTML-Struktur des Spiels zugreifen und sie mit JavaScript manipulieren. da aber nur javascript gfordert würde habe ich es für mich an die seite geleget
