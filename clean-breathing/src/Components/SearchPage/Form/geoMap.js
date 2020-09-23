import React, {useContext, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

//Stile
import style from './geoMap.module.css';

//Immagini
import geoIcon from './img/geoloc.png';
import loadingGif from './img/loading.gif'

// Contesto da utilizzare per fornire i dati agli altri componenti
import {DataContext} from '../../dataContext';

const GeoMap = () => {

    //Componente che permette all'utente di cercare la stazione di monitoraggio più vicina

    const history = useHistory(); //Mi permette di agire sull'URL

    const [img1, setImg1] = useState(geoIcon);

    const [data, setData] = useContext(DataContext); //Contesto in cui verranno inseriti i dati

    const getLocation = () => { //Richiede la Geolocalizzazione e esegue la funzione di richiesta dati
        if (navigator.geolocation) {
            setImg1(loadingGif); //Gif di caricamento
            navigator.geolocation.getCurrentPosition(getData, manageError, {enableHighAccuracy: true,maximumAge: 60000,timeout: 5000 //MaximumAge è il tempo in millisecondi durante il quale la posizione viene memorizzata, timeout è il tempo massimo per eseguire l'accesso alla posizione
            })
        }
    }

    const manageError = (error) => { //Funzione che risponde in caso vi siano problemi con la geolocalizzazione
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("Hai negato il permesso di accedere alla tua posizione, scegli un altro metodo o riprova!");
                setImg1(geoIcon)
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Impossibile determinare la posizione corrente");
                setImg1(geoIcon)
                break;
            case error.TIMEOUT:
                alert("Il rilevamento della posizione impiega troppo tempo");
                setImg1(geoIcon)
                break;
            case error.UNKNOWN_ERROR:
                alert("Si è verificato un errore sconosciuto");
                setImg1(geoIcon)
                break;
            default:
                alert('Si è verficato un errore');
                break;
        }
    }

    const getData = (position) => { //Riceve i dati dall'API usando le coordinate. Poi tresferisce i dati al context per renderli disponibili a tutti i componenti
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const url = `http://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${process.env.REACT_APP_API_KEY}`;

        axios.get(url)
        .then((res) => {
            setData(res.data.data);
            setImg1(geoIcon);
            history.push('/city'); //Cambia url mandando l'utente alla pagina con i dati 
        })
        .catch(() => {
            history.push('/error'); //Cambia url mandando l'utente alla pagina di errore
            setImg1(geoIcon);
        })

    }

    return (
        
        <div className={style.map}>
            <div className={style.geo}>
                <img 
                    onClick={getLocation}
                    src={img1} 
                    alt="Icona globo con puntatore geolocalizzazione" 
                    className={style.icon1}
                />
                <p className={style.text}>Utilizza la geolocalizzazione per trovare la stazione più vicina a te</p>
            </div>
        </div>
    )
}

export default GeoMap;