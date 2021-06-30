import style from '../styles/Showcase.module.scss'
import Image from 'next/image'
import { useState, useEffect } from "react";
import useDebounce from '../utils/debounceHook';
import API from '../utils/API';



const Showcase = () => {

    const [search, setSearch] = useState([]);
    const [results, setResults] = useState([]);
    const [card, setCard] = useState([]);

    const debouncedSearchTerm = useDebounce(search, 500);

    useEffect(() => {
        if (!search)
        {
            return;
        }

        if (debouncedSearchTerm)
        {
            API.searchTerms(search)
            .then((res) =>
            {
                if(res.data.status === 'error')
                {
                    throw new Error(res.data.message);
                }

                setResults(res.data.data);
            })
        }
    }, [debouncedSearchTerm]);

    const handleInputChange = (event) =>
    {
        setSearch(event.target.value);
    }

    const handleSubmit = (e) =>
    {
        if(e.key != 'Enter')
        {
            return; 
        }

        const s = e.target.value;

        if(!s)
        {
            return;
        }

        API.searchCards(s)
        .then((res) =>
        {
            if(res.data.status === 'error')
            {
                throw new Error('API CALL ERROR: ' + res.data.message);
            }

            setCard(res.data);
        });
    }

    return (
        <>
            <div className={style.container}>
                <h1>Learning magic made easy</h1>
                <h2>a card search and deck builder for the Standard format</h2>

                <input className={style.search} type='text' placeholder='search for cards here...' value={search} onChange={handleInputChange} onKeyPress={handleSubmit}></input>
                

            </div>
            <div className={style.text_hold}>
                <h2>below are the current legal standard sets</h2>
            </div>
        </>
    )
}

export default Showcase
