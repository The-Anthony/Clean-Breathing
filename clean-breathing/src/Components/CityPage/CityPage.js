import React, {useContext} from 'react';

//Contesto in cui sono presenti i dati ricevuti dall'API
import {DataContext} from '../dataContext';

//Stile
import style from './citypage.module.css'

import Form from '../SearchPage/Form/form';
 
const CityPage = () => {

    //Pagina che mostra i dati sull'inquinamento della città all'utente

    //L'api mostra dati diversi per ogni città, perciò è probabile che almeno un campo rimanga vuoto, per questo vi sono delle stringhe di default per prevenire il crash

    const [data, setData] = useContext(DataContext); //Contesto contenente i dati

    return(
        <div  className={style.cityPage}>

            <div className={style.form} >
               <Form/> 
            </div>
            
           <h1 className={style.name}> Nome città/stazione: 
               {data.city === undefined ? ' Dato non disponibile' : ' ' + data.city.name}
            </h1>


            <div className={style.centralDiv}>

                <div className={style.dataDiv}>
                    <h3>Indice qualità aria:  </h3>
                    <h3 className={style.value}>
                        {data.aqi === undefined ? ' Dato non disponibile' : ' ' + data.aqi}
                    </h3>
                </div>
                
                <h2>
                    Indice elementi inquinanti:
                </h2>

                <div className={style.dataDiv}>
                    <p>Pm10 - Agenti inquinanti sotto i 10 nanometri: </p>
                    <p className={style.value}>
                        {data.iaqi === undefined ? ' Dato non disponibile' :
                            data.iaqi.pm10 === undefined ? ' Dato non disponibile' : ' ' + data.iaqi.pm10.v}
                    </p>
                </div>

                <div className={style.dataDiv}>
                   <p>Pm2.5 - Agenti inquinanti sotto i 2,5 nanometri: </p> 
                   <p className={style.value}>
                        {data.iaqi === undefined ? ' Dato non disponibile' :
                            data.iaqi.pm25 === undefined ? ' Dato non disponibile' : ' ' + data.iaqi.pm25.v}
                    </p>
                </div>

                <div className={style.dataDiv}>
                    <p>NO2 - Biossido d'Azoto: </p>
                    <p className={style.value}>
                        {data.iaqi === undefined ? ' Dato non disponibile' :
                            data.iaqi.no2 === undefined ? ' Dato non disponibile' : ' ' + data.iaqi.no2.v}
                    </p>
                </div>

                
                <div className={style.dataDiv}>
                    <p>Ozono: </p>
                    <p className={style.value}>
                        {data.iaqi === undefined ? ' Dato non disponibile' :
                            data.iaqi.o3 === undefined ? ' Dato non disponibile' : ' ' + data.iaqi.o3.v}
                    </p>
                </div>
                
                <div className={style.dataDiv}>
                    <p>CO - Monossido di Carbonio: </p>
                    <p className={style.value}>
                        {data.iaqi === undefined ? ' Dato non disponibile' :
                            data.iaqi.co === undefined ? ' Dato non disponibile' : ' ' + data.iaqi.co.v}
                    </p>
                </div>

                

                <div className={style.dataInfo}>
                    <h2>Cosa significano questi dati?</h2>
                    <p>I dati qui elencati non presentano alcuna unità di misura:
                        valori bassi corrispondono ad un'aria pulita.
                        Indicazioni precise riguardo alla pericolosità dell'inquinamento atmosferico sono disponibili  
                         <a className={style.link} target='_blank' rel="noopener noreferrer" href="https://aqicn.org/scale/"> cliccando qui</a>
                    </p>
                </div>

            </div>
        </div>
        
    )
}

export default CityPage;