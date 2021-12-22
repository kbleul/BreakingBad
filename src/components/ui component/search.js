import React , {useState} from 'react'

const Search = ({setquery , viewsingle}) => {

    const [searchvalue , set_searchvalue] = useState("");

    const handleSearch = (e) => {
            viewsingle(false)
            set_searchvalue(e.target.value);
            setquery(e.target.value);
            console.log(searchvalue)
    }

    return (
        <section className="searchsection">
            <form>
                <input className="searchinput" type="text" placeholder='Search Characters . . .' autoFocus 
                    value = {searchvalue} onChange={(e) => handleSearch(e)}
                />
            </form>
        </section >
    )
}

export default Search
