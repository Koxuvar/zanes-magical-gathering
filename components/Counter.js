import { useState, useEffect } from "react";
import style from '../styles/Counter.module.scss'

const Counter = (props) =>
{
    const [count, setCount] = useState([0]);
    const [name, setName] = useState(['Counter']);

    const increment = () =>
    {
        setCount(parseInt(count) + 1);
    }

    const decrement = () =>
    {
        if(count > 0)
        {
            setCount(parseInt(count) - 1);
        }
    }
    const handleValueChange = (event) =>
    {
        setName(event.target.value);
    }

    return(
        <div className={style.container} id={props.id}>
            <button className={style.cross} onClick={props.close} ></button>
            <input className={style.nameBadge} value={name} type='text' placeholder='Counter' onChange={handleValueChange}></input>
            <div className={style.counterBorder}>
                <button className={style.plus} onClick={increment}></button>
                <hr></hr>
                <button className={style.minus} onClick={decrement}></button>
                
            </div>
            <h1 className={style.countNum} >{count}</h1>
            
        </div>

    )
}

export default Counter;