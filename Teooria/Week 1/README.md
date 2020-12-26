## Kodutöö ülesanne 1
[Avaleht](../../README.md) > [Teooria](../README.md) > Kodutöö nr. 1

1. Mis on HTML tag ``` "<noscript>" ``` ? Milleks seda kasutatakse ja mis on sellel seost
Javascriptiga?

Tag-i <noscript> määratleb alternatiivse sisu, mida kuvatakse kasutajatele, kes on brauseris skriptid keelanud või
kellel on brauser, mis skripti ei toeta.

2. Mis on Vanilla Javascript (kirjapilt tihti ka VanillaJS)?

VanillaJS on nimi, millele viitab tavalise JavaScripti kasutamisele ilma täiendavate teekideta nagu jQuery.

3. Mis on DOM?
Dokumendi objektimudel (inglise keeles Document Object Model, lühend DOM) on platvormist ja keelest
sõltumatu XML, XHTML ja HTML dokumentidega suhtlemise liides. Selle levinumaks rakenduseks DOM-i
implementatsioonid erinevates brauserites, mis võimaldab JavaScriptiga veebilehtede sisu dünaamiliselt muuta.
DOM on standardiseeritud W3C poolt.

4. Mis on skoop (ingl.k "scope") programmeerimise mõistes?
Vihje: https://www.w3schools.com/js/js_scope.asp

bash
JavaScriptis on kahte tüüpi skoope:
● Kohalik skoop
● Globaalne skoop
JavaScript-il on funktsiooni skoop: iga funktsioon loob uue skoobi.
Skoobi määrab nende muutujate ligipääsetavuse (nähtavuse).
Funktsiooni sees määratletud muutujatele pole funktsiooni väljastpoolt juurdepääsu (nähtav).

5. Mis vahe on muutujate defineerimisel kasutatavatel Javascripti keywordidel nagu let ja var?
Vihje: https://javascript.info/var

Var ja let kasutatakse mõlemat muutuja deklareerimiseks javascriptis, kuid erinevus nende vahel on see, et var
on funktsiooni ulatus ja let on blokeeritud.
Võib öelda, et var'iga deklareeritud muutuja on kogu programmis defineeritud võrreldes letiga.
Muutujad, mis on deklareeritud var-ga, on kas funktsiooni või globaalse ulatusega. Need on nähtavad plokkide
kaudu.

6. Mis on ECMAScript ja mis seos on sellel Javascriptiga?
 Vihje 1: https://www.w3schools.com/js/js_versions.asp
 Vihje 2: Googelda :)
 
JavaScripti standardiseeris Ecma International nime ECMAScript all. ECMAScript keskendub vaid keele
omadustele, aga JavaScript lisaks ka veebikeskkonnale.
JavaScript on ECMAScripti standardiga defineeritud keele ülemhulk.

7. Mis on JSON? Kirjuta lihtne JSON formaadis string, mis sisaldab 5 kursusekaaslase nime
Vihje 1: https://www.w3schools.com/js/js_json.asp
Vihje 2: JSON stringi saab ka kui Javascript objekt stringiks teha:
https://www.w3schools.com/js/js_json_stringify.asp

JSON (JavaScript Object Notation) on andmevahetusformaat, mis on alternatiiv XML’le. Kuigi see põhineb
Javascriptil, on see sõltumatu programmeerimiskeeltest. Nagu XML, on ka JSON lihtne tekstifail, mis hoiab
andmeid organiseeritult. JSON on kergekaaluline, mis tähendab vähem teksti, paremat loetavust ning masina
puhul kiiremat töötlemist.

```bash
{
“students”: [
{ "firstname": "Kevin-Anders", "lastname": "Kalamees" },
{ "firstname": "Ragne", "lastname": "Samson" },
{ "firstname": "Airika", "lastname": "Vettik" },
{ "firstname": "Ingrid", "lastname": "Jufkin" },
{ "firstname": "Kristian", "lastname": "Kõiv" }
]
}
```
8. Mis on AJAX? Mis on peamine piirang AJAX päringu teostamisel?
Vihje: Vastuse piirangu osas leiab siit: https://www.w3schools.com/js/js_ajax_http.asp

AJAX (Asynchronous JavaScript And XML)
Asünkroonne JavaScript ja XML – lühend AJAX võeti kasutusele 2005.a. ja sellega tähistatakse selliste
interaktiivsete veebirakenduste loomise meetodit, kus toimub jooksev kulissidetagune andmevahetus brauseri ja
veebiserveri vahel, nii et kasutaja iga liigutuse peale pole vaja kogu veebilehte uuesti alla laadida.

9. Mis vahe on kui javascript pannakse HTML-s <head> tagide vahele vs <body> tagide vahele vahetult
enne </body> tagi?
Vihje: https://www.w3schools.com/js/js_whereto.asp

HTML-dokumenti saate paigutada suvalise arvu skripte.
Skripte saab paigutada HTML-lehe jaotisesse <body> või <head> või mõlemasse.
Skriptide paigutamine elemendi <body> alaossa parandab kuva kiirust, kuna skripti tõlgendamine aeglustab
kuva.

10. Võta lahti mõni veebileht Google Chromega. Ava konsool (CTRL + Shift + j) ja trüki konsooli järgnev:
document.designMode = 'on';
Mis selle tagajärjel juhtus? Mida veebilehega nüüd teha saab?

Dokumendi designMode väärtus muutub ‘on’. Kui document.designMode on ‘on’, siis saab dokumenti
redigeerida.
