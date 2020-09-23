import React from 'react';

// Componenti
import Form from './Form/form';
import GeoMap from './Form/geoMap';

// Stile
import style from './style/searchPage.module.css';

const SearchPage = () => {

    return(
        <div className={style.searchPage}>
            <Form />
            <GeoMap />
        </div>
    )
}

export default SearchPage;