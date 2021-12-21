import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import Imgdiscription from './imgdiscription'


const  Displayimgs = () => {

    const [characters,set_charachters] = useState([]);
    const [viewcharacter, set_viewcharachter] = useState({});

    useEffect(() => {
        const fetchitems = async () => {
            const result = await axios.get("https://www.breakingbadapi.com/api/characters");
                set_charachters(result.data)
        }

        fetchitems();
    },[characters])


    return (<article className="main_container">
        <section className="character_imgs_section">
            {characters.map(character => (
                <img onClick={() => {set_viewcharachter(character); console.log(character)}} className="character_imgs" alt="" src={character.img} key={character.char_id} />
            ))}
        </section>
        <Imgdiscription characteritem={viewcharacter}/></article>
    )
}

export default Displayimgs
