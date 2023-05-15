import React from 'react';

const accueil = (props) => {
    const style = {
        // width : "500px",
        // height : "500px",
       
    }

    return(
        <div className='row justify-content-center'>
            <div className='col-lg-4 accueil'>
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_LA6G7Q.json"  background="transparent"  speed="1"  style={style}  loop  autoplay></lottie-player>        
                <p>Ce projet consiste dans la création d’une application <b>React</b> qui permet la récupération des données d’un <b>API</b> disponible en ligne afin d'afficher tous les pays du monde. 
                <br/>Pour la création de l’application j’ai utilisé la librairie <b>Axios</b> qui permet de communiquer avec l’API, ainsi que le module <b>React Routeur</b> pour le système de route afin de gérer la navigation du coté client. 
                <br/>La maquette a été réalisé en utilisant un thème open source pour <b>Bootstrap</b>.  L’application va <i>afficher les informations</i> d’un pays comme le nom, la capitale et le continent. J’ai ajouté la possibilité de <i>filtrer les pays</i> en fonction de leur continent et <i>la pagination</i> qui permet d’afficher les pays par 10. 
                </p>
            </div>
        </div>
    )
}

export default accueil