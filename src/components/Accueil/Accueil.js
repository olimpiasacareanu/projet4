import React from 'react';

const accueil = (props) => {
    const style = {
        width : "500px",
        height : "500px"
    }
    return(
        <div className='row justify-content-center'>
            <div className='col-lg-4'>
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_LA6G7Q.json"  background="transparent"  speed="1"  style={style}  loop  autoplay></lottie-player>        
                <p>Ce projet consiste dans la création d’une application qui permet la récupération des données d’un API disponible en ligne afin de proposer une application cohérente aux utilisateurs. 
Pour la création de l’application j’ai utilisé la librairie Axios qui permet de communiquer avec l’API, ainsi que le module React Routeur pour le système de route afin de gérer la navigation du coté client. 
La maquette a été réalisé en utilisant un thème open source pour Bootstrap.  L’application va afficher les informations d’un pays comme le nom, la capitale et le continent. J’ai ajouté la possibilité de filtrer les pays en fonction de leur continent et la pagination qui permet d’afficher les pays par 10. 
</p>
            </div>
        </div>
    )
}

export default accueil