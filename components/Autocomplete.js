import React from 'react';


const Autocomplete = (props) =>
{
    
    return(
        <>
            <div>
                <ul>
                    {props.suggestions.map((e) => (
                        <li key={e}>{e}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Autocomplete;