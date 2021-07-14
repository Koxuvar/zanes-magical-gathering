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

            <div className={style.life_track}>

                {/* <button className={style.cross} onClick={props.close}></button>
                <input className={style.nameBadge} value={name} type='text' placeholder='Counter' onChange={handleValueChange}></input> */}

                <div className={style.add_life}>
                    <h1 className={style.plus}>add life</h1>
                    <div className={style.button} onClick={increment}>
                        <div className={style.hex}>
                            <div className={style.animation}></div>
                            <div className={style.animation}></div>
                            <div className={style.animation}></div>
                        </div>
                        <div className={style.hex}>
                            <div className={style.animation}></div>
                            <div className={style.animation}></div>
                            <div className={style.animation}></div>
                        </div>

                    </div>

                </div>
                

                <div className={style.outer_circle}>

                    <div className={style.inner_circle}>
                        
                    </div>
                    <h1 className={style.countNum} >{count}</h1>
                    
                    <div className={style.sub_life}>
                        
                        <h1 className={style.minus}>subtract life</h1>
                        <div className={style.button} onClick={decrement}>
                            <div className={style.hex}>
                                <div className={style.animation}></div>
                                <div className={style.animation}></div>
                                <div className={style.animation}></div>
                            </div>
                            <div className={style.hex}>
                                <div className={style.animation}></div>
                                <div className={style.animation}></div>
                                <div className={style.animation}></div>
                            </div>
                        </div>

                </div>
                    
                </div>

                

            </div>
            
            
            
        </div>

    )
}

export default Counter;