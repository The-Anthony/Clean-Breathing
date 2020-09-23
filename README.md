# Clean Breathing. Web App per monitorare il livello di inquinamento atmosferico della tua città.

La web app consiste nel poter ricercare la propria città nel database di una API e ottenere come risposta i dati riguardanti l'inquinamento atmosferico in quella zona. Si può anche utilizzare la geolocalizzazione per trovare la stazione di monitoraggio aria più vicina a sé. 

-----------------------
### Ringraziamenti

Questo sito è realizzato con l'API gratuita offerta dal Air Quality Programmatic Project, di cui il sito ufficiale è raggiungibile [CLICCANDO QUI](http://aqicn.org/api).

L'API offre oltre mille chiamate al secondo gratuite.
_____

### Come è realizzato

Questà è un'applicazione web creata tramite React, il framework creato e gestito da Facebook. Nessun componente è stato creato tramite le classi ma si utilizza la sintassi più recente di React, perciò tutti i componenti sono scritti tramite funzioni e Hooks.
Viene anche utilizzato il context API. 
________________
### Librerie utilizzate

Nell'applicazione viene sfruttato React Router Dom per caricamenti dei componenti rapidi mantenedo la struttura da Single Page Application.

Per semplificare le chiamate all'API viene utilizzato Axios, libreria semplice che evita di dover convertire la risposta alla chiamata in dati .json

Infine, per realizzare una semplice animazione, viene utilizzato TypeWriter effect.
_______

### Visualizzare e provare il sito

Per poter provare il sito bisogna prima installare nel proprio dispositivo node.js, e in seguito creare una nuova applicazione  tramite il comando 'npx create-react-app name_app', e sostituire nella cartella appena creata le directory 'src' e 'public' con quelle caricare su git-hub. Bisogna poi installare nell'app le dipendenze tramite questi 3 comandi:

  - 'npm install react-router-dom'
  - 'npm install axios'
  - 'npm install typewriter-effect'

Infine devi richiedere una chiave API a questo sito [CLICCA QUI](http://aqicn.org/data-platform/token/#/) (basta solo inserire la mail) e creare un file .env nel root dell'applicazione (ossia allo stesso livello di 'public' o 'src') e al suo interno scrivere:
  - REACT_APP_API_KEY= L'api ottenuta nel sito.
  
Una volta fatto questo, ti basta far partire il server con 'npm start'. 
# Buona visita del sito!

 
