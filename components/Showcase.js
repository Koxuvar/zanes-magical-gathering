import style from '../styles/Showcase.module.scss'
import layoutStyles from '../styles/Cardlayout.module.scss'
import CardLayout from '../components/Cardlayout'
import Image from 'next/image'
import { useState, useEffect } from "react";
import useDebounce from '../utils/debounceHook';
import API from '../utils/API';


const Showcase = () => {

    const [search, setSearch] = useState([]);
    const [results, setResults] = useState([]);
    const [card, setCard] = useState([]);
    const [photos, setPhotos] = useState([''])

    const debouncedSearchTerm = useDebounce(search, 500);
    // const debouncedResutls = useDebounce(results, 500);

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
            console.log(res);
            if(res.data.object === 'error')
            {
               alert('Error: ' + res.data.details);
            }

            setCard(res.data);
            setPhotos(<Image src={res.data.image_uris.normal} alt='card pix' width='488' height='680'></Image>);
            // console.log(card)
        });
    }

    return (
        <>
            <div className={style.container}>
                <h1>Learning magic made easy</h1>
                <h3>a card search and deck builder for the Standard format</h3>

                <input className={style.search} type='text' placeholder='search for cards here...' value={search} onChange={handleInputChange} onKeyPress={handleSubmit}></input>
                
                <div className={style.data_wrap} id='user_display'>
                    <div className={style.img_wrap}>
                        {/*<img src={card != undefined ? photos : ''} id='imgSet'></img> */}
                        {photos}
                    </div>
                    
                    <div className='display_info'>
                        <div><h2>{card.name}</h2></div>
                        <div><h2>{card.type_line}</h2></div>
                        <div><h2>{card.oracle_text}</h2></div>
                        <br/>
                        <div><h2>{card.flavor_text}</h2></div>
                    </div>

                </div>
            </div>
            <div className={style.text_hold}>
                <h2>below are the current legal standard sets</h2>
                
            </div>
        </>
    )
}

export default Showcase
