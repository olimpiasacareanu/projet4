import React from 'react';
import imgErreur404 from "../../../assets/ruesansnom.jpeg"

const erreur404 = (props) => (
    <div className='text-center'>
        <img src={imgErreur404} alt="erreur 404" width="500px"/>
        <div className='mt-3'>La page demandée n'existe pas.</div>
    </div>
)

export default erreur404