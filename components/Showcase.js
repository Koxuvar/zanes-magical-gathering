import style from '../styles/Showcase.module.scss'
import Image from 'next/image'
import { useState, useEffect } from "react";
import useDebounce from '../utils/debounceHook';
import API from '../utils/API';
import Autocomplete from './Autocomplete';
import useUser from '../lib/useUser';


function importAll(r) 
{
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const missingCards = importAll(require.context('../public/img/missing', false, /\.(png|jpe?g|svg)$/));

const Showcase = () => {

    const {user, mutateUser} = useUser();

    const [search, setSearch] = useState([]);
    const [results, setResults] = useState([]);
    const [card, setCard] = useState([]);
    const [photos, setPhotos] = useState([''])

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
            if(res == undefined)
            {

                var keys = Object.keys(missingCards);
                let cardImage = missingCards[keys[ keys.length * Math.random() << 0]];
                setCard({name: 'No Results Found!', type_line: 'Heres a joke card instead!', oracle_text: '', flavor_text: ''});
                setPhotos(<Image src={cardImage.default.src} alt='card pix' width='488' height='680'></Image>)
                return;
            }

            setCard(res.data);
            setPhotos(<Image src={res.data.image_uris.normal} alt='card pix' width='488' height='680'></Image>);
        });
    }

    return (
        <>
            <div className={style.container}>

                <div className={style.title_hold}>
                    <h1>turn one</h1>
                    <h2>a search engine and game companion for Magic: The Gathering</h2>
                    
                </div>
                

                <input className={style.search} type='text' placeholder='search for cards here...' value={search} onChange={handleInputChange} onKeyPress={handleSubmit}></input>

                <div className={style.btn_wrap}>
                    <Autocomplete suggestions={results} />
                </div>
                
                
                <div className={style.data_wrap} id='user_display'>
                    <div className={style.img_wrap}>
                        {photos}
                    </div>
                    
                    <div className={style.display_info}>
                        <h2>{card.name}</h2>
                        <h2>{card.type_line}</h2>
                        <h2>{card.oracle_text}</h2>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Showcase
