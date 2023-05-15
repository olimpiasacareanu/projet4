import React from 'react';

const Bouton = (props) => {
    let btnCss = `btn btn-info`
    return(
        <button className={btnCss} onClick={props.clic} style={props.estSelect ? {opacity:1} : {opacity : 0.5}}>{props.children}</button>
    )
}

export default Bouton