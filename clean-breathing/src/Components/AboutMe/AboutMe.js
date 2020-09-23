import React from 'react';
import style from './style/aboutMe.module.css';

import Skills from './skill';
import image from './style/img/people.png'; //Immagine di due uomini che parlano

import Typewriter from 'typewriter-effect'; 

const AboutMe = () => {

    // Semplice pagina di presentazione in cui mostro che competenze ho ed evidenzio i mie contatti

    return(
        <div className={style.aboutMe}>
           <div className={style.presentationDiv}>
               <h1 className={style.presentationTitle}>Ciao! Mi chiamo Antonio Alberto Sabatini e sono un 
                    <span className={style.emph}>
                        <Typewriter //Effetto macchina da scrivere
                            options={{
                                strings: [
                                    'Web Developer', 
                                    'Creator',
                                    'Start2Impact Student', 
                                    'Computer Engineering Student'
                                ], //Stringhe da digitare
                                autoStart: true,
                                loop: true,
                                delay: 50, //Tempo di digitazione
                                deleteSpeed: 50, //Tempo di cancellazione
                            }}
                        />
                    </span>
               </h1>
           </div>

            <h2 className={style.competenceTitle}>Le mie competenze:</h2>
            <Skills/>
            
            <div className={style.contact}>
                <h2>Vuoi parlare con me?</h2>
                <p>Mi puoi contattare per qualunque motivo su tutti i principali social, oppure semplicemente mandami una mail. </p>
                <div className={style.social}>
                    <img className={style.img} src={image} alt="Illustrazione discorso fra 2 uomini"/>
                    <div>
                        <h6><a 
                                rel="noopener noreferrer" 
                                target='_blank' 
                                href='https://www.instagram.com/antonio_sabatini_' 
                                className={style.socialNameIg}>
                                Instagram
                            </a></h6>
                        <h6><a 
                                rel="noopener noreferrer" 
                                target='_blank' 
                                href='https://www.linkedin.com/in/antonio-alberto-sabatini-4197381b4/' 
                                className={style.socialNameLn}>
                                Linkedin
                            </a></h6>
                        <h6><a 
                                rel="noopener noreferrer" 
                                target='_blank' 
                                href='https://www.facebook.com/profile.php?id=100012733920255' 
                                className={style.socialNameFb}>
                                Facebook
                            </a></h6>
                        <h6 className={style.socialMail}>asabatini31@gmail.com</h6>
                    </div>
                </div>
                
            </div>
           
        </div>
    )
}

export default AboutMe;