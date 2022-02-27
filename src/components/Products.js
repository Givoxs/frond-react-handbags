import React from "react";
import './Products.css';

function Products({Image, Alternative, Ptext, Price, Spantext}){
    return(
        <>
            <article>
                <span>{Spantext}</span>
                <img src={Image} alt={Alternative}/>
                <p>{Ptext}</p>
                <h4>{Price}</h4>
            </article>
        </>
    )
}

export default Products