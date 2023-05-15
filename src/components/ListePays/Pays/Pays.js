import React from 'react';
import { NavLink } from 'react-router-dom';


const pays = (props) => {
    let content =""
    if(!props.solo){
        content = (
            <NavLink to={`/pays/${props.nom}`} className="nav-link active">Voir la fiche du pays</NavLink>
        )
    }else{
        content = (
            <>
                <div>
                    Monnaie : {props.monnaie}
                </div>
                <NavLink to={"/pays"} className="nav-link text-success mt-2">Retour à la liste</NavLink>
            </>
        )
    }
    return(
        <>
            <div className='row no-butters border m-2'>
                <div className='col-lg-6'>
                    <img className='p-2' width="50%" src={props.img} alt={props.nom} />
                </div>
                <div className='col-lg-6'>
                    <h2>Nom : {props.nom}</h2>
                    <p>Capitale : {props.capitale} <br/> Region : {props.region}</p>
                    {content}
                </div>
            </div>
        </>
    )
}

export default pays