import React from 'react';
import style from './style/skill.module.css'

const Skills = () => {
    return(
        <div className={style.skills}>
            <div className={style.hardSkills}>
                <h2 className={style.hSkillTitle}>Hard Skills</h2>
                    <div className={style.competence}>
                       <p>HTML & CSS</p>
                        <div className={style.bar}>
                            <div className={style.competenceBarHtml}>
                            </div>
                        </div> 
                    </div>

                    <div className={style.competence}>
                       <p>BOOTSTRAP</p>
                        <div className={style.bar}>
                            <div className={style.competenceBarBootstrap}>
                            </div>
                        </div> 
                    </div>

                    <div className={style.competence}>
                       <p>JAVASCRIPT</p>
                        <div className={style.bar}>
                            <div className={style.competenceBarJs}>
                            </div>
                        </div> 
                    </div>

                    <div className={style.competence}>
                       <p>REACT</p>
                        <div className={style.bar}>
                            <div className={style.competenceBarReact}>
                            </div>
                        </div> 
                    </div>

                    <div className={style.competence}>
                       <p>PYTHON</p>
                        <div className={style.bar}>
                            <div className={style.competenceBarPython}>
                            </div>
                        </div> 
                    </div>
            </div>

            <div className={style.softSkills}>
                <h2 className={style.sSkillTitle}>Soft Skills</h2>

                <div className={style.competence}>
                    <p>GESTIONE DEL TEMPO</p>
                    <div className={style.bar}>
                        <div className={style.competenceBarTime}>
                        </div>
                    </div> 
                </div>

                <div className={style.competence}>
                    <p>LAVORO DI SQUADRA</p>
                    <div className={style.bar}>
                        <div className={style.competenceBarTeam}>
                        </div>
                    </div> 
                </div>

                <div className={style.competence}>
                    <p>PROBLEM SOLVING</p>
                    <div className={style.bar}>
                        <div className={style.competenceBarProblem}>
                        </div>
                    </div> 
                </div>

                <div className={style.competence}>
                    <p>RESISTENZA ALLO STRESS</p>
                    <div className={style.bar}>
                        <div className={style.competenceBarStress}>
                        </div>
                    </div> 
                </div>

                <div className={style.competence}>
                    <p>LEADERSHIP</p>
                    <div className={style.bar}>
                        <div className={style.competenceBarLeader}>
                        </div>
                    </div> 
                </div>

            </div>
        </div>
    )
}

export default Skills;