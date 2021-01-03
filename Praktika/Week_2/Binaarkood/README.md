# Pakitud binaarkood
[Avaleht](../../../README.md) > [Praktika](../../README.md) > [Week_2](../README.md) > Pakitud binaarkood

On lihtsa algoritmiga kokku pakitud binaarkood, mille tulemiks on arvude jada:

```bash
02101403101303101303150312021203101301041201041021021302120101021031202103120214010312013010312021201010310101201041021301203120120214010210120102103120312021201031202120310210120102120210
```

Pakkimise algoritm töötab nii:  

1. Tekst konverditakse binaarkoodiks.  
Näiteks sõnast  "Hello" saab: `0100100001100101011011000110110001101111`  

2. Siis otsib algoritm järjestiku korduvaid sümboleid,  
loendab nad ja asendab järjestikused sümbolid loendatud arvu ja ühe sümboliga.  
Algoritm teeb asenduse vaid siis kui järjestikuseid sümboleid on 2 või enam.
	  
Näited pakkimisest:

```bash
000 -> 30
0001 -> 301
1100 -> 2120
1001 -> 1201
```

Kui kood on lahti pakitud, siis konverdi binaarkood loetavaks tekstiks. 
Googelda kuidas seda Javascriptis teha.
