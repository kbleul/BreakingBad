import React from 'react'
import { useEffect , memo } from 'react'


const Imgdiscription = ({characteritem}) => {
    useEffect(() => {
        if(characteritem.occupation === undefined)
        { console.log("0000"); characteritem.occupation = []; console.log(characteritem.occupation); }
    },[])


    console.log(characteritem.occupation)
    return (
        <section className="dispcription_section">
            <h2 className="charactername_h2">{characteritem.name}</h2>
           
         
        </section>
    )
}

export default memo (Imgdiscription)
