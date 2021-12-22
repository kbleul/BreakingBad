import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Imgdiscription from './imgdiscription'
import Imgfirstdiscription from './imgfirstdiscription'
import Search from './search'
import loading from "../../imgs/loadingbar.gif"

const Displayimgs = () => {

    const [characters, set_charachters] = useState([]);
    //character discription
    const [viewcharacter, set_viewcharachter] = useState({});
    //to show the discription os the first picture onload if true
    const [firstview, set_firstview] = useState(false);
    const [searchquery, set_searchquery] = useState("");

    const [show_singlecharacter, setshow_singlecharacter] = useState(false);
    const [hasdiscription , set_hasdiscription] = useState(true);
    const [isloading , set_isloading] = useState(true);




    useEffect(() => {
        const fetchitems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${searchquery}`);
            set_charachters(result.data)
        }
        fetchitems();
    }, [searchquery]);

    useEffect(() => {
        const fetchitems = async () => {
            const result = await axios.get("https://www.breakingbadapi.com/api/characters");
            set_charachters(result.data);
            set_isloading(false);
        }

        fetchitems();
    }, [])


    return (<>
        <Search setquery={set_searchquery} viewsingle={setshow_singlecharacter}/>
        {  isloading ? 
            <article id="loadingmain_container" className="main_container">
            <img className="loadingimg" src={loading} alt="loading" />
            </article>  :

        
        
        <article className="main_container">

            {show_singlecharacter ? <section id="character_imgs_section">
            <button className="backbutton" 
            onClick={() => {set_searchquery(""); setshow_singlecharacter(false); set_hasdiscription(false);}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23a1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></svg>
            </button>
            <img id="character_imgs" alt="" src={viewcharacter.img} key={viewcharacter.char_id} />
            </section> :
                <section className="character_imgs_section">
                    {characters.map(character => (
                        <img 
                        onClick={() => { set_viewcharachter(character); set_firstview(true); 
                            setshow_singlecharacter(true);  set_hasdiscription(true); }}
                 className="character_imgs" alt="" src={character.img} key={character.char_id} />
                    ))}
                </section>
            }
                <>
            {hasdiscription ? <>
            {firstview ? <Imgdiscription characteritem={viewcharacter} /> 
                        : <Imgfirstdiscription />     }  </>

              :  <section className="dispcription_section"></section>}
              </>
        </article>
            }</>

            
    )
}

export default Displayimgs
