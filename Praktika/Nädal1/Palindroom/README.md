# Palindroom
[Avaleht](../../../README.md) > [Praktika](../../README.md) > [Nädal1](../README.md) > Palindroom  

Küsi kasutajalt sisestuseks suvaline sõna või fraas.  

Kontrolli kas sisestuse näol on tegu palindroomiga. 

Teavita kasutajat tulemusest: kas sisestatud sõna või lause on palindroom või mitte.

Mis on palindroom? "aias sadas saia" on palindroom - Googelda kui ei usu :grin:

NB!
Kirjuta kood nii, et Javascript loetakse HTML-s sisse eraldi failist (js faililaiendiga).

Näide:
```html
<script src="myscript.js"></script>
```

Vihjed:

```javascript
// Stringi tagurpidi pööramine
let str = 'tere';
let reversed = str.split('').reverse().join(''); // Tulemus: eret
```


Kood peaks olema ka tõstutundetu, abiks osutuvad järgnevad funktsioonid:

```javascript
let str = 'TeRe';
let lowerCase = str.toLowerCase(); // tere
let upperCase = str.toUpperCase(); // TERE
```
 
Kood peaks eemaldama ka üleliigsed tühikud. Kuidas seda Javascriptis teha? Selle jätan Teile esialgu mõistatamiseks. 
Kui ei õnnestu - pole hullu.
