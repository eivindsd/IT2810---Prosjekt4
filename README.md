**For å kjøre prosjektet etter kloning:** <br>
`cd app` <br>
Kjør `npm install expo-cli --global` for å laste ned expo-cli. <br> 
Kjør `npm install` i app-mappen. <br>
Kjør `npm start` i app-mappen for å starte applikasjonen.


# Prosjekt 4 - Gruppe 77

*  [Intro](#intro)
*  [Innhold og funksjonalitet](#innhold-og-funksjonalitet)
*  [Krav til teknologi og testing](#krav-til-teknologi-og-testing)
    *  [React Native](#react-native)
    *  [Testing](#testing)

## Intro

Vi har i denne oppgaven laget en prototyp på en mobilapp der fokus er på søk. Objektene vi søker på er fotballspillere, og applikasjonen tilbyr
funksjonalitet for å søke på, sortere og filtrere på ulike parametre. 

## Innhold og funksjonalitet

Prosjekt 4 i IT2810 - Webutvikling går ut på å sette opp, og designe en mobilapplikasjon der fokus er på søk. 
Vi har valgt å gjenbruke backend fra Prosjekt 3, og klone dette inn på virtuell maskin slik at det kjører kontinuerlig. 
Dermed har vi alltid tilgang til spillerobjektene som ligger i databasen. 

Vi har valgt å overføre all funksjonalitet fra Prosjekt 3, og tilpasse funksjonaliteten til en mobilapplikasjon.
Applikasjonen består av et søkefelt der brukeren kan søke på spillernavn. 
Brukeren har også mulighet til å filtrere på posisjon, klubb og nasjon, ved hjelp av flere dropdown-menyer på forsiden. 
Etter å ha gjennomført et søk (med resultater), vil spillerobjektene som tilfredsstiller søket listes opp 9 og 9, og det er lagt til rette for å hente ut flere resultater ved blaing i sider dersom man ønsker å se mer av resultatsettet. 
I tillegg er hvert spillerobjekt representert som en knapp. Ved å trykke på en spiller, vil man få opp et pop-up vindu med mer informasjon om den valgte spilleren. 
Her har man også muligheten til å upvote/downvote spillere, og denne scoren vil oppdateres i databasen. 

Følgende bilder viser siden før noe søk er gjennomført, det første resultatsettet og pop-up-en som vises når man klikker på en spiller:

## Krav til teknologi

### React Native
Applikasjonen er implementert ved bruk av React Native og TypeScript. Vi har valgt å gjenbruke store deler av koden fra Prosjekt 3, noe som gjorde det enkelt 
å få den funksjonaliteten vi ønsket. Vi har kun valgt å benytte oss av funksjonelle komponenter, da dette er enkelt å implementere og gir enkel og lesbar kode. 
Når det kommer til typing har vi valgt å samle alle interfaces i en egen fil, interfaces.tsx, som vi deretter importerer i de andre filene. 
Hovedkomponentene i React-applikasjonen er SearchBar.tsx og Scroller.tsx. SearchBar.tsx implementerer søkefelt, 
og er forelder til flere komponenter for sortering/filtrering. Filter.tsx er en egen fil, som igjen er forelder til spesifikke komponenter for ulik filtrering. 
Dermed ligger all funksjonalitet for søk, filtrering og sortering under SearchBar.tsx.
Scroller.tsx inneholder all funksjonalitet for å vise resultatsettet. 
Her ligger altså funksjonalitet for å vise spillerne, vise mer info om hver enkelt og bla mellom ulike sider i resultatsettet. 

Sett inn litt om hvordan vi har brukt React Native/hvilke komponenter osv: 


Figuren under viser komponentstrukturen i applikasjonen vår:

```
app/
│
├── actions/
│   ├── ageActions.tsx
│   ├── clubActions.tsx
│   ├── …
│   └── types.tsx
│	
├── components/
│   ├── ClubSelect.tsx
│   ├──	…
│   └── SortScore.tsx
│ 		
├── images/
│   ├──	image
│   └── images.tsx
│		
├── reducers/
│   ├── inndex.tsx
│   └── playerReducer.tsx
│
├── store/
│   ├── initialState.tsx
│   └── store.tsx
│
└── App.tsx
```

Vi baserte prosjektet på Node.js, og brukte expo for å sette opp prosjektet. 
Følgende kommando ble kjørt i terminalen for å sette opp prosjektet (valgte deretter oppsett med TypeScript):

`expo init my-new-project`

### Testing
