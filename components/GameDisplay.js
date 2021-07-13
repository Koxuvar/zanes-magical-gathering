import Counter from './Counter';
import { useState, useEffect } from "react";
import style from '../styles/GameDisplay.module.scss';

const GameDisplay = () =>
{
    const [counters, setCounters] = useState([]);
    const [a, setA] = useState([]);

    useEffect(() =>
    {
        const LifeCounter = <Counter key='1' id='1' close={removeCounter}/>;
        setCounters([LifeCounter]);
        setA(1);
        console.log(counters, a);
    },[]);

    const addCounter = () =>
    {
        setA(parseInt(a) + 1);
        const newCounter = <Counter key={a} id={a} close={removeCounter}/>;

        setCounters([...counters, newCounter]);
    }

    const removeCounter = (event) =>
    {
        console.log(event);
        console.log(counters);
    }

    return(
        <>
            <div className={style.counterHolder}>
                {counters}
            </div>
            <button className={style.plus} onClick={addCounter}></button>
        </>
    )
}

export default GameDisplay;