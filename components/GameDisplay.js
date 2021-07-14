import Counter from './Counter';
import { useState, useEffect } from "react";
import style from '../styles/GameDisplay.module.scss';

const GameDisplay = () =>
{
    const [counters, setCounters] = useState([]);
    const [a, setA] = useState(0);
    

    useEffect(() =>
    {
        const LifeCounter = <Counter key={a} id='1' close={() => removeCounter(a)}/>;
        setCounters([LifeCounter]);
        setA(prev => prev+1);
    },[]);

    const addCounter = () =>
    {
        setA(prev => prev+1);
        const newCounter = <Counter key={a} id={a} close={() => removeCounter(a)}/>;

        setCounters(prev => [...prev, newCounter]);
    }

    const removeCounter = (num) =>
    {
        console.log(num);
        setCounters(prev => prev.filter(e => e.key != num));
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