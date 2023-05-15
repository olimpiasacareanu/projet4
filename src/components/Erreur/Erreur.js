import React from 'react';

const erreur = (props) => (
    <div className='alert-danger'>
        {props.children}
    </div>
)

export default erreur