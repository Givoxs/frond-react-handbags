import React from "react";
import './Footertiles.css';

function Footertiles({h2text,pic,alternative,children}){
    return (
        <>
        <section>
           <h2>{h2text}</h2>
            {children}
            <img src={pic} alt={alternative}/>
        </section>
        </>
    )
}

export default Footertiles;
