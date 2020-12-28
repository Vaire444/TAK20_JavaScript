# Kingiloos
[Avaleht](../../../README.md) > [Praktika](../../README.md) > [Week_2](../README.md) > Kingiloos

Kirjuta rakendus, kus on üks tekstiväli ja nupp nimede sisestamiseks.
Tekstiväljale nime kirjutades ja nuppu vajutades lisatakse nimi massiivi.

Pärast nupuvajutust ja nime massiivi lisamist tehakse tekstiväli automaatselt tühjaks ja asetatakse fookus tekstiväljale,
et kasutaja ei peaks tekstiväljal eraldi klikkima kui soovib uut nime sisestada.

Nime lisamise nupp on vaikimisi *disabled*. Nime lisamise nupp läheb aktiivseks juhtudel kui:
- Tekstiväljale on midagi sisestatud
- Tekstiväli ei sisalda numbreid

Võite kasutada *keyup event*i https://www.w3schools.com/jsref/event_onkeyup.asp

- Kasutaja peab jooksvalt nägema sisestatud nimesid.
- Kasutaja peab saama iga nime eraldi listist kustutada (kustub nii massiivist ning ka kasutajale kuvatud nimede nimekirjast).

- Rakenduses peab veel olema nupp loosimiseks, mis genereeriks kõikidest eelnevalt sisestatud nimedest paarid.
- Nuppu võib mitu korda vajutada ja paaride genereerimine toimub sel juhul uuesti.

Pane tähele, et tekkinud paarid ei tee omavahel kingitusi (kui just juhuslikult loosimise algoritm nii ei loosi) vaid moodustunud paari esimene nimi teeb kingituse selle paari teisele nimele.
Samuti ei tohi loosimisel tekkida olukorda, kus isik teeb iseendale kingituse.

Näide:
´´´bash
nimed = Juuli, Maali, Ärni
´´´
Tulemus:
´´´bash
Juuli -> Maali,
Maali -> Ärni,
Ärni -> Juuli
´´´
Tekkinud tulemused kuva kasutajale.
