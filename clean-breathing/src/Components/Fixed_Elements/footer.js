import React from 'react';
import style from './style/footer.module.css'; 

// icone per collegamento ai Social
import linkedinLogo from './style/img/linkedin.png';
import instagramLogo from './style/img/instagram.png';
import facebookLogo from './style/img/facebook.png';

const Footer = () => {
    return(
        <footer className={style.footer}>
            {
                //Footer contenente i collegamenti ai social,e i ringraziamenti all'API e ai siti che forniscono immagini gratuitamente. Footer presente in ogni pagina
            }
            <div className={style.thanks}> 
                <p className={style.thanksAPI}>Sito Web realizzato grazie all'API completamente gratuita offerta dal team di <br/> <span className={style.important}>The World Air Quality Project</span> <br/> la cui pagina è raggiungibile <a target='_blank' href="https://aqicn.org/api" rel="noopener noreferrer">cliccando qui</a></p>
                <p>Le immagini e le icone utilizzate in questo sito sono offerte da:</p>
                <ul>
                    <li>Freepik - <a rel="noopener noreferrer" target='_blank' href="https://it.freepik.com/ ">Vai al sito ufficiale</a></li>
                    <li>Pexel - <a rel="noopener noreferrer" target='_blank' href="https://www.pexels.com/">Vai al sito ufficiale</a></li>
                </ul>
            </div>

            <div className={style.contact}>
                <h4>CONTATTI</h4>
                <a href="https://www.linkedin.com/in/antonio-alberto-sabatini-4197381b4/" target='_blank' rel="noopener noreferrer">
                    <img className={style.icon} src={linkedinLogo} alt="Logo di Linkedin"/>
                </a>
                <a href="https://www.instagram.com/antonio_sabatini_" target='_blank' rel="noopener noreferrer">
                    <img className={style.icon} src={instagramLogo} alt="Logo di Instagram"/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100012733920255" target='_blank' rel="noopener noreferrer">
                    <img className={style.icon} src={facebookLogo} alt="Logo di Facebook"/>
                </a>
                <p>Mail: <span className={style.important}>asabatini31@gmail.com</span></p>
            </div>
        </footer>
    )
}

export default Footer;