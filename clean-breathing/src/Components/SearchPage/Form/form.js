import React, {useState, useEffect, useContext} from 'react'; 
import axios from 'axios';

import {useHistory} from 'react-router-dom';

// Contesto da utilizzare per fornire i dati agli altri componenti
import {DataContext} from '../../dataContext';

// Stile
import style from './form.module.css';

import loading from './img/loading.gif';

const Form = () => {

    const [search, setSearch] = useState(''); //Valore dell'input
    const [query, setQuery] = useState(''); //Valore che il form invierà all'API

    const[data, setData] = useContext(DataContext); //Contesto in cui vengono inseriti i dati

    const[buttonContent, setButtonContent] = useState('Cerca') //Contenuto del pulsante di ricerca

    const history = useHistory(); //Mi permette di accedere e modificare l'url

    const updateSearch = (event) => { //Consente la modifica del valore dell'input
        setSearch(event.target.value)
    }

    const getSearch = (event) => { //Modifica il valore della query con cui verrà effettuata la ricerca e elimina spazi esterni superflui
        event.preventDefault();
        setQuery(search.trim().toLowerCase()); //Elimina eventuali spazi esterni della query
    }  

    const getData =() => { //Raccoglie i dati dall'API e li trasferisce al contesto, rendendoli disponibili a tutti i componenti dell'APP.

        const url = `http://api.waqi.info/feed/${search}/?token=${process.env.REACT_APP_API_KEY}`;

        axios.get(url)
        .then((res) => {

            if(res.data.status === 'error' && (res.data.data === 'Unknown station' || res.data.data === 'Unknown city')) { //La città non viene trovata
                history.push('/citynotfound') //Cambia url indirizzando l'utente alla pagina dedicata
                setButtonContent('Cerca')
            }
            else {
                setData(res.data.data);
                history.push('/city');  //Cambia url indirizzando l'utente alla pagina con i dati
                setButtonContent('Cerca');
            }
            
        })
        .catch(() => {
            history.push('/error');  //Cambia url indirizzando l'utente alla pagina di errore
            setButtonContent('Cerca');
        })

    }

    useEffect(() => {
        if (query !== '') {
            setButtonContent(<img src={loading} className={style.loading} alt='Icona di caricamento'/>)
            getData()
        } 
    }, [query])




    return(
        <form className={style.form} onSubmit={getSearch}>
            <input 
                value={search}
                type="text" 
                className={style.input}
                placeholder='Inserisci la tua città'
                onChange={updateSearch}/>
            <button 
                type="submit" 
                className={style.button}>
                    {buttonContent}
            </button>
        </form>
    )
}

export default Form;