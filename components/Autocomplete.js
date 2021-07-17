import style from '../styles/AutoComplete.module.scss'

const Autocomplete = (props) =>
{
    
    return(
        <>
            {props.suggestions.map((e) => (
                <button className={style.btn} key={e}>{e}</button>
            ))}
        </>
    );
}

export default Autocomplete;