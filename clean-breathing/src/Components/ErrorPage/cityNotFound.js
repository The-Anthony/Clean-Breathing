import React from 'react';

import {useHistory} from 'react-router-dom';

//Stile
import style from './error.module.css';

import Form from '../SearchPage/Form/form';

const CityNotFound = () => {

    const history = useHistory();

    const changePage = () => {
        history.push('/search');
    }

    return(
        <div className={style.page}>
            <div>
                <h1>La città che hai cercato non è tra quelle monitorate!</h1>
                <h3>Ci dispiace davvero!</h3>
            </div>
            
            <div className={style.tryAgain}>
               <h6>Riprova con un'altra città</h6>
                <Form /> 
                <p>oppure</p>
                <button className={style.button} onClick={changePage}>
                    Ritorna alla pagina di ricerca
                </button>
            </div>
            
        </div>
    )
}

export default CityNotFound;