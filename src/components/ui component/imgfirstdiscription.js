import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'

const Imgfirstdiscription = () => {

    const [characters,set_charachters] = useState({});
       
    useEffect(() => {
        const fetchitems = async () => {
            const result = await axios.get("https://www.breakingbadapi.com/api/characters?name=Walter+White");
                set_charachters(result.data[0])
        }

        fetchitems();
    },[])

    return (
        <section className="dispcription_section">
        <h2 className="charactername_h2">{characters.name}</h2>
        <p className="dispcription_para">{characters.birthday}</p>
        <p className="dispcription_para">{characters.appearance}</p>
        <p className="dispcription_para">{characters.nickname}</p>
        <p className="dispcription_para">{characters.portrayed}</p>
        
       
       
    </section>
    )
}

export default Imgfirstdiscription

