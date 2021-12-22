import React from 'react'
import ReactDOM from 'react-dom';
import { useState , useEffect } from 'react'
import axios from 'axios'

const Imgfirstdiscription = () => {

    const [characters,set_charachters] = useState({});
    let occupations = [];
       
    useEffect(() => {
        const fetchitems = async () => {
            const result = await axios.get("https://www.breakingbadapi.com/api/characters?name=Walter+White");
                set_charachters(result.data[0])
                
               ReactDOM.render(<RenderResult data={result.data[0].occupation}/>, document.getElementById("occupation"));
        console.log(result.data[0].occupation)


        }

        fetchitems();
    },[])

    const RenderResult = ({data}) => {
            return(<>
                {
                    data.map(item => (
                        <p key={item}  className="dispcription_para">{item}</p>
                    ))
                }
                </>)
    }


    return (
        <section className="dispcription_section">
        <h2 className="charactername_h2">{characters.name}</h2>
        <p className="dispcription_para">Birthday : {characters.birthday}</p>
        <p className="dispcription_para">Apperance : Seasons {characters.appearance}</p>
        <p className="dispcription_para">Nuckname : {characters.nickname}</p>
        <p className="dispcription_para">Prtrayed By - {characters.portrayed}</p>
        <p className="dispcription_para"><i>Nuckname : {characters.status}</i></p>
        <hr/>
        <ul id="occupation">
        </ul>
        
       
       
       
    </section>
    )
}

export default Imgfirstdiscription

