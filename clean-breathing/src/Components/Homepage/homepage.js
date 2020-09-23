import React from 'react';
import { Link } from 'react-router-dom';
import style from './style/homepage.module.css';

import image1 from './style/image/factory.png' //Foto Centrale Elettrica
import image2 from './style/image/earth.png' // Foto Traffico 

const Homepage = () => {

    //Homepage contenente la descrizione del sito. Vi è una sensibilizzazione verso la pericolosità dell'inquinamento e alcuni semplici consigli da applicare in caso di possibilità economica.

    return(
        <div className={style.homepage}>

            <h1 className={style.title}>CLEAN BREATHING</h1>
            <h3 className={style.subtitle}>Scopri l’indice di inquinamento della tua città tra le oltre 1000 monitorate</h3>

            <div className={style.presentationDiv}>

                <h5>Non sottovalutare la pericolosità dello smog</h5>

                <div className={style.textDiv}>

                    <p>La scienza parla chiaro: l’inquinamento nell'aria è <strong>estremamente dannoso</strong> per la salute dell’uomo. Lo smog contiene innumerevoli componenti ultrasottili che raggiungono i polmoni e i bronchi provocando danni irreparabili alla vita umana. Da sintomi più lievi come tosse continua e catarro, fino a <strong>patologie mortali</strong> come gravi forme di cancro ai polmoni. Secondo recenti analisi, l'inquinamento ha provocato oltre <strong>370 mila decessi</strong> prematuri nell'Unione Europea solo nel 2016. <span className={style.emph}>Scopri ora il livello di inquinamento</span> della tua città.</p>

                    <img src={image1} alt="Foto di una centrale elettrica inquinante"/>

                </div>
                <hr className={style.hr}/>

            </div>

            <div className={style.presentationDiv}>

                <h5>Da cosa è provocato e come posso combatterlo?</h5>

                <div className={style.textDiv1}>
                    
                    <img src={image2} alt="Foto di una centrale elettrica inquinante"/>

                    <p>L’inquinamento nelle città è principalmente dovuto ai gas di scarico dei veicoli a benzina e diesel, fin troppo abbondanti nelle strade di tutto il mondo. Prediligi sempre gli spostamenti tramite <strong>mezzi pubblici </strong> o con con <strong>mezzi elettrici</strong> come monopattini e biciclette. Investi nella tua abitazione installando <strong>pannelli solari</strong> e limita al necessario l’utilizzo dell’aria condizionata. Contribuisci alla riduzione dell’inquinamento atmosferico proteggendo la tua salute e quella dei tuoi cari.</p>

                </div>
                <hr className={style.hr}/>

            </div>

            <div className={style.presentationDiv}>
                <h5>Cosa offre questo sito?</h5>
                <p className={style.finalText}><span className={style.emph}>Clean Breathing</span> ti permette di ricercare la tua città e accedere in tempo reale ai dati sull'inquinamento atmosferico raccolti da oltre <strong>11 mila stazioni in più di 1000 città</strong>. Potrai conoscere non solo l'indice di inquinamento dell'aria, ma anche il valore di ogni singolo agente inquinante.</p>
            </div>
            <Link to='/search'>
                <button className={style.button}>Cerca ora la tua città tra le oltre 1000 monitorate</button>
            </Link>
            
        </div>
    )
}

export default Homepage;