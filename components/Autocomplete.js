import style from '../styles/AutoComplete.module.scss'

const Autocomplete = (props) =>
{
    
    const btnSearch = (e) => {
        console.log(props.suggestions)
    }
    
    return(
        <>
            {props.suggestions.map((e) => (
                <button className={style.btn} onClick={btnSearch} key={e}>{e}</button>
            ))}
        </>
    );
}

export default Autocomplete;