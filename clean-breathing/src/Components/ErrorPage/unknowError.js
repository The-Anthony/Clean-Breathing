import React from 'react';

import {useHistory} from 'react-router-dom';

//Stile
import style from './error.module.css';

const UnknowError = () => {

    const history = useHistory();

    const changePage = () => {
        history.push('/search');
    }

    return(
        <div className={style.page}>
            <h1>Errore sconosciuto</h1>
            <h3>Si è verificato un errore! Ci scusiamo per il disagio.</h3>
            <p>Riprova cliccando sul pulsante qui sotto.</p>
            <button className={style.button} onClick={changePage}>Riprova</button>
            <p>Se il problema persiste, attendi. Verrà risolto al più presto!</p>
        </div>
    )
}

export default UnknowError;