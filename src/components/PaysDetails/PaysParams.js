// import React from 'react';
import { useParams } from 'react-router-dom';
import PaysDetails from "./PaysDetails"
import Title from '../Title/Title'

const PaysParams = (props) => {
    let {id} = useParams();
    return(
        <>
            <Title>Information d'un pays : {id}</Title>
            <PaysDetails nom = {id}/>
        </>

    )
}

export default PaysParams

