import axios from 'axios'
import React, {Component} from 'react'
import Pays from '../ListePays/Pays/Pays'

class PaysDetails extends Component{
    state={
        pays : null,
        loading : false,
    }
    componentDidMount = ()=>{
        this.setState({loading : true})
        axios.get(`https://restcountries.com/v3.1/name/${this.props.nom}?fullText=true`)
        .then(reponse=>{
           
            let monnaie = ""
            for(let key in reponse.data[0].currencies){
                monnaie = reponse.data[0].currencies[key].name
            }
            console.log(monnaie)
               const pays = {
                    nom : reponse.data[0].name.common,
                    capital : reponse.data[0].capital[0],
                    img : reponse.data[0].flags.png,
                    region : reponse.data[0].region,
                    monnaie : monnaie
               }
                this.setState({pays : pays, loading : false })
            })
        .catch(error=>{
            if(error.response.status === 404) {
                window.location.replace("/error")
              }
            this.setState({loading : false})
        })
    }
    render(){
        return (
            <>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        {this.state.pays &&              
                            <Pays 
                                capitale = {this.state.pays.capital}
                                nom = {this.state.pays.nom}
                                region = {this.state.pays.region}
                                img = {this.state.pays.img}
                                monnaie = {this.state.pays.monnaie}
                                solo = {true}
                            />
                        }
                    </div>
                </div>
                
            </>
        )
        
    }
}

export default PaysDetails

