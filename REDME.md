

## Code-Erklärung: Methode, Functionen und variablen


## Der erste Teil des Codes deklariert mehrere Konstanten
 * die im gesamten Spiel verwendet werden. Sie werden verwendet, um die Farben des Bretts, die Farben der Schlange und die Anfangspositionen der Schlange zu definieren. Der Score wird ebenfalls auf 0 initialisiert. 

## Der nächste Abschnitt des Codes *erstellt das Spielbrett und setzt seinen Kontext auf einen zweidimensionalen Zeichnungskontext. Die Hauptfunktion wird dann aufgerufen, um das Spiel zu starten.

* Die Funktion gen_food() generiert eine zufällige Position für das Essen auf dem Brett.

* Die Methode document.addEventListener() wird verwendet, um auf Tastaturereignisse zu lauschen und die Funktion change_direction() aufzurufen, wenn eine Taste gedrückt wird.

* Die Funktion main() ist das Herzstück des Spiels. Es wird wiederholt mit setTimeout() aufgerufen, um das Brett neu zu zeichnen, die Schlange zu bewegen und zu prüfen, ob das Spiel beendet ist. Die Geschwindigkeit des Spiels kann gesteuert werden, indem die Dauer der Methode setTimeout() geändert wird.

* Die Funktion has_game_ended() prüft, ob die Schlange mit den Wänden oder ihrem eigenen Körper kollidiert ist. Wenn ja, endet das Spiel.

*  Die Funktion clear_board() löscht das Board und zeichnet einen Rand darum.

* Die Funktion drawSnake() zeichnet die Schlange auf das Brett.

* Die Funktion drawFood() zeichnet das Essen auf das Brett.

* Die Funktion drawSnakePart() zeichnet einen einzelnen Teil der Schlange auf das Brett.

* Die Funktion random_food() generiert eine zufällige Position für das Essen.

* Die Funktion change_direction() ändert die Richtung der Schlange basierend auf der gedrückten Taste. Es verhindert auch, dass die Schlange die Richtung umkehrt.

### -----------------------------------------------------

# Variablen: 


## board_border:
 Eine Konstante, die die Farbe des Rahmens des Spielbretts definiert.
 
## board_background:
 * Eine Konstante, die die Hintergrundfarbe des Spielbretts definiert.

## snake_col:
 * Eine Konstante, die die Farbe der Schlange definiert.

## snake_border:
 * Eine Konstante, die die Farbe des Rahmens der Schlange definiert.

## snake:
 * Eine Liste von Objekten, die die einzelnen Teile der Schlange repräsentieren.

## score:
 * Eine Variable, die die Anzahl der vom Spieler gesammelten Punkte enthält.

## changing_direction:
 * Eine Variable, die angibt, ob der Spieler die Richtung der Schlange geändert hat.

## food_x:
 * Eine Variable, die die x-Koordinate des Futterstücks enthält.

## food_y:
 * Eine Variable, die die y-Koordinate des Futterstücks enthält.

## dx:
 * Eine Variable, die die horizontale Geschwindigkeit der Schlange angibt.

## dy:
 * Eine Variable, die die vertikale Geschwindigkeit der Schlange angibt.

snakeboard:
 Eine Variable, die das Canvas-Element des Spielbretts enthält.

snakeboard_ctx:
 Eine Variable, die den Zeichenkontext des Canvas-Elements enthält.
Funktionen:


## main:
 * Die Hauptfunktion des Spiels, die wiederholt aufgerufen wird, um das Spiel am Laufen zu halten. Es ruft andere Funktionen auf, um das Spiel zu aktualisieren, das Spielbrett zu löschen und zu zeichnen, und überprüft, ob das Spiel beendet wurde.

## drawSnake:
* Eine Funktion, die die Schlange auf dem Spielbrett zeichnet, indem sie die einzelnen Teile der Schlange durch die drawSnakePart-Funktion zeichnet.

## drawSnakePart:
* Eine Funktion, die ein einzelnes Teil der Schlange auf dem Spielbrett zeichnet.

## drawFood:
 * Eine Funktion, die das Futterstück auf dem Spielbrett zeichnet.

## has_game_ended:
 * Eine Funktion, die überprüft, ob das Spiel beendet wurde, indem sie prüft, ob die Schlange gegen die Grenzen des Spielbretts oder ihren eigenen Schwanz gestoßen ist.
 
##  clear_board:
 * Eine Funktion, die das Spielbrett löscht und neu zeichnet, um den Eindruck zu erwecken, dass sich die Schlange bewegt.

## random_food:
 * Eine Funktion, die eine zufällige Zahl zwischen zwei gegebenen Werten zurückgibt, um das Futterstück an einer zufälligen Position auf dem Spielbrett zu platzieren.

## gen_food:
 * Eine Funktion, die das Futterstück an einer zufälligen Position auf dem Spielbrett platziert und sicherstellt, dass es nicht an derselben Stelle wie die Schlange platziert wird.

 ## const board_border, const board_background, const snake_col, const snake_border:

  * Dies sind Farbkonstanten, die die Farben des Spielbretts, der Schlange und ihrer Grenzen definieren.

## let snake:
* Dies ist eine Anordnung von Zellen, die die Schlange repräsentieren.

## let score:
* Dies ist die Anzahl der Punkte des Spielers.

## let changing_direction:
*  Diese Variable gibt an, ob der Benutzer die Richtung der Schlange geändert hat.

### let food_x, let food_y:
 * Diese Variablen enthalten die Koordinaten des zufällig generierten Futters.


## let dx, let dy:
 * Diese Variablen enthalten die Geschwindigkeit der Schlange in horizontaler und vertikaler Richtung.

## const snakeboard, const snakeboard_ctx:
 * Diese Variablen halten das Spielbrett und den Kontext des 2D-Zeichenbereichs.

## main():
 * Dies ist die Hauptfunktion, die das Spiel steuert. Es wird wiederholt aufgerufen, um das Spiel am Laufen zu halten.

## gen_food():
 * Diese Funktion generiert zufällig Futter auf dem Spielbrett.

## document.addEventListener("keydown", change_direction):
 * Diese Funktion hört auf Tastaturereignisse und ruft change_direction auf, wenn eine Pfeiltaste gedrückt wird.

## clear_board():
 * Diese Funktion zeichnet den Rahmen des Spielbretts und füllt den Hintergrund mit der Farbe board_background.

## drawFood():
  Diese Funktion zeichnet das Futter auf dem Spielbrett.

## drawSnake():
 *  Diese Funktion zeichnet die Schlange auf dem Spielbrett.

## drawSnakePart(snakePart):
 * Diese Funktion zeichnet einen Teil der Schlange auf dem Spielbrett.

## has_game_ended():
 * Diese Funktion prüft, ob das Spiel beendet wurde, indem sie überprüft, ob die Schlange gegen eine Wand oder gegen sich selbst gestoßen ist.

## random_food(min, max):
 *Diese Funktion generiert eine zufällige Zahl zwischen min und max.

## change_direction(event):
 * Diese Funktion wird aufgerufen, wenn der Benutzer eine Pfeiltaste drückt, um die Richtung der Schlange zu ändern. Sie setzt die Geschwindigkeit der Schlange in horizontaler und vertikaler Richtung entsprechend der gedrückten Pfeiltaste. Es wird auch überprüft, ob der Benutzer versucht, die Schlange umzukehren, und dies wird verhindert.



