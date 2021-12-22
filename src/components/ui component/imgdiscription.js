import React from 'react'
import {  memo } from 'react'


const Imgdiscription = ({characteritem}) => {

  
    return (
        <section className="dispcription_section">
            <h2 className="charactername_h2">{characteritem.name}</h2>
            <p  className="dispcription_para">Birthday : {characteritem.birthday}</p>
            <p  className="dispcription_para">Apperance : Seasons {characteritem.appearance}</p>
            <p  className="dispcription_para">Nickname : {characteritem.nickname}</p>
            <p  className="dispcription_para">Portrayed By - {characteritem.portrayed}</p>
            <p className="dispcription_para"><i>Status : {characteritem.status}</i></p>
        <hr/>
            {
                characteritem.occupation.map(item => (
                    <p key={item}  className="dispcription_para">{item}</p>
                ))
            }
        </section>
    )
    
}

export default memo (Imgdiscription)
