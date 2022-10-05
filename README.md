# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Britney van Zijl

  #### Je startniveau:
  Blauw / rood

  #### Je focus:
  surface plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
 https://www.moetiknaardedokter.nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Homepagina van MINDD
  
  <img src="readme-images/MINDD-plaatje1.jpg" width="375px" alt="Homescherm van Moet Ik Naar De Dokter">

  #### Screenshot(s) van de tweede pagina (small screen):
  Promotiemateriaal pagina van MINDD
  
  <img src="readme-images/MINDD-plaatje2.jpg" width="375px" alt="Promotiemateriaal pagina van Moet Ik Naar De Dokter">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)
  
- logo heeft een alt tekst. (Uitleg van wat het is)
- talen worden in de engelse reader nog steeds nederlands opgenoemd
- bij de widget is de tekst onduidelijk dat je een vragenlijst gaat invullen
- vraag 2 widget: het invul veld word gelijk opgenoemd en niet de vraag
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

  
  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

  
  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)
  
- goed toegankelijk
- ondertiteling filmpjes talen zijn beperkt
- buttons zijn groot genoeg om op te klikken

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

  
  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)
  
- Darkmodus: niet aanwezig
- Kleurenblind: de kleuren zijn nog steeds goed te onderscheiden van elkaar
- Contrast: contrast is goed. Buttons zien er alleen niet altijd uit als buttons.
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/mindd-breakdown-pagina.png" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 3 inhalen: 27sep)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  - Het lukte nog niet helemaal met mijn hamburger menu. Verder had ik wat vragen over de uitwerking en wat wel mag en wat niet. Ook kreeg ik mijn afbeeldingen niet helemaal netjes


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Britney      | Michelle         | Rosalie    | Tijme        |
  | Toestemming class/id voor het benadrukken van tekst en voor images?            
  | In hoeverre moet de website uitgewerkt worden?  
  | Witruimte weghalen tussen een banner img en marquee             
  | Strepen tussen tekst in de footer?   
  | Dark mode  
  | Background image en transparante header
  | Hulp bij grid uitlijnen


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Toestemming class/ id: Nee, voor benadrukken van tekst <em>Emphasis element</em> gebruiken.
  - Uitwerking website: het moet lijken op de echte website (mobile first), 2 pagina's uitwerken, niet alle linkjes hoeven te werken.
  - Strepen tussen tekst en footer: https://codepen.io/shooft/pen/oNdppMr
  - Darkmode: (bijv.)
  @media (prefers-color-scheme: dark) {
  .day.dark-scheme {
    background: #333;
    color: white;
  }
  .night.dark-scheme {
    background: black;
    color: #ddd;
  }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme {
    background: white;
    color: #555;
  }
  .night.light-scheme {
    background: #eee;
    color: black;
  }
}
- Background image en transparante header: dezelfde img in header en body zetten (juist uitlijnen), header sticky maken + een lijntje toevoegen als scheiding.
- Hulp bij grid uitlijnen: grootte van het grid aanpassen en padding aanpassen. 
</details>





## Voortgang 2 (week 3 23sep)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  - Het maken van een drop down menu was lastig en ik vind het lastig dat ik geen id's en classes mag gebruiken voor de styling.

  ### Agenda voor meeting
  samen met je groepje opstellen

  | Aaron      | Britney          | Julia    | Quinny      
  | @media
  | Drop down menu
  | Grid maken
  | Element namen bepalen | 


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1: Drop down menu (klein en groot scherm) + animatie (behandeld)
  https://codepen.io/shooft/pen/gOzGoww
  https://codepen.io/shooft/pen/poVWpQQ
  - punt 2: @media hoe maak je je website responsive (behandeld)
  https://codepen.io/shooft/pen/YzLrEJo
  - punt 3: Grid maken voor je content (behandeld)
  
  - punt 4: Elementen herkennen / h1 verbergen voor zicht, maar wel leesbaar voor screenreader. (behandeld)
  https://alistapart.com/article/now-you-see-me/
  https://www.a11yproject.com/posts/how-to-hide-content/


</details>





## Toegankelijkheidstest 2/2 (week 4 30sep)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)
  
- buttons worden niet als buttons aangegeven
- links zijn niet allemaal linkjes
+ Alle kopjes worden aangegeven
  
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  tap:
- niet alle linkjes zijn nog linkjes
+ Alle links die in de html linkjes werken met tap

  hover:
- hover nog niet ingesteld
- hover over h1 en p ziet er uit alsof je kunt typen
  
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)

  concentratieproblemen:
- De ballon leidt te veel af, maar heeft niet met de website te maken

  Slechte motoriek:
+ scrollen werkt nog steeds
+ buttons zijn klikbaar
+ e-mail invullen werkt nog steeds

visuele beperking:

  vlekken in het oog=
- gebruikersvoorwaarden is niet niet zichtbaar
+ Site is verder nog prima zichtbaar

  tunnelvisie=
+ Site is goed zichtbaar
- Ik kon mijn muis niet vinden
   
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  slecht ziend / kleuren:
- blurred vision: klachten namen zijn moeilijk leesbaar, gebruikersvoorwaarden is niet goed zichtbaar
+ kleuren zijn nog duidelijk
+ contrast is goed
- dark modus: niet aanwezig
  
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
- Ik was goed op weg en bijna klaar met mijn 1e pagina. Wel heb ik om mijn header menu te fixen heel mijn code moeten om gooien. Het menu werkt nu. Ik merk dat ik de logica achter de code steeds meer begin te snappen. 

  ### Agenda voor meeting
  samen met je groepje opstellen

  | Aaron      | Britney          | Julia    | Quinny        |
  | Responsiveness - logo verplaatsen in grid
  | Hulp bij aanroepen img en button
  | Hulp bij dropdown menu met sub menu's
  


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Responsiveness - logo verplaatsen: logo(img) positioneren, achtergrond kleur aanpassen en lijnen toevoegen.
  - Hulp bij aanroepen img en button: direct child (>) gebruiken. Anders wordt de code bij elke img:nth-of-type(aantal) of button:nth-of-type(aantal) toegepast.
  - Hulp bij dropdown menu met sub menu's: javascript aanpassen (er mist een stukje code)


</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. bron 1: (https://fonts.googleapis.com/css2?family=Montserrat&display=swap) - huisstijl font MINDD importeren
  2. bron 2: (https://codepen.io/shooft/pen/qBYPPwV) - inhoud hamburger menu ontzichtbaar maken:
	transform:translateY(-150%);
	z-index: -1;
	position: fixed;
	transition-duration:.4s;
  3. bron 3: (https://codepen.io/shooft/pen/qBYPPwVInhoud) - hamburger menu zichtbaar maken
	.open
  transform:translateY(0%);
	z-index: 0;
  4. bron 4: (https://codepen.io/shooft/pen/ExLwQzm) - gezondheidsklachten lijstje op 1 rij zetten
  display: flex;
	overflow: auto;
  
  
</details>
