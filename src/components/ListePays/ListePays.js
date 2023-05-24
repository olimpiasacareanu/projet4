import React, {Component} from 'react'
import Title from '../Title/Title'
import Bouton from '../Bouton/Bouton'
import Pays from './Pays/Pays'
import axios from "axios"
import { NavLink } from 'react-router-dom';


class ListePays extends Component{
    state = {
        listePays : [],
        loading : false,
        bntSelect : null,
        pageSelect : 1
    }

    componentDidMount = () => {
        this.handleFiltreRegion("all")
        
    }  

    handleFiltreRegion = (region)=>{
        let param =  ''
        if(region === "all") param = region 
        else param = `region/${region}`
        axios.get(`https://restcountries.com/v3.1/${param}`)
        .then(reponse=>{
            const listePays = reponse.data.map((pays)=>{
                return {
                    nom : pays.name.common,
                    img : pays.flags.png,
                    capitale : pays.capital,
                    region : pays.region,
                }
            })
            this.setState({listePays, bntSelect:region, pageSelect: 1 })
        })
    }

    handleFiltrePage = (num)=>{
        console.log(this.state.listePays)
        // let par10 = this.state.listePays.slice(1, 10)
        let par10
        switch(num){
            case "1" : par10 = this.state.listePays.slice(1, 10)
            console.log(1, 10)
            break
            case "2" : par10 = this.state.listePays.slice(11, 20)
            break
            case "3" : par10 = this.state.listePays.slice(21, 30)
            break
            case "4" : par10 = this.state.listePays.slice(31, 40)
            break
            default : console.log("pas de page")
        }
        this.setState({listePays : par10,pageSelect : num})
    }

    render(){
        let pages = []
        let listePays =''
        if(this.state.listePays){
            let nbPages = Math.ceil(this.state.listePays.length/10)
            for(let i=1; i<=nbPages;i ++){
                pages.push(<Bouton key={i} estSelect={this.state.pageSelect === i} clic = {()=>this.setState({pageSelect : i})} >{i}</Bouton>)  
            }
        }

        let debut = (this.state.pageSelect-1)*10
        let fin = debut+10

        let listePar10 = this.state.listePays.slice(debut, fin)
        listePays = this.state.loading ? <div>Chargement...</div> : listePar10.map((pays, key)=>{
            return(
                <div className='mt-2 col-lg-6' key={key}>
                    <Pays 
                        {...pays} {...this.props}
                    >
                    <NavLink to={`/pays/${this.state.nom}`} className="nav-link">Voir la fiche du pays</NavLink>
                    </Pays>
                </div>
            )
        })

        return (
            <>
                <Title>Liste des pays du monde</Title>
                <div className='container'>
                    <Bouton estSelect={this.state.bntSelect==="all"} clic = {()=>this.handleFiltreRegion("all")}>Tous</Bouton>
                    <Bouton estSelect={this.state.bntSelect==="europe"} clic = {()=>this.handleFiltreRegion("europe")}>Europe</Bouton>
                    <Bouton estSelect={this.state.bntSelect==="americas"} clic = {()=>this.handleFiltreRegion("americas")}>Amerique</Bouton>
                    <Bouton estSelect={this.state.bntSelect==="africa"} clic = {()=>this.handleFiltreRegion("africa")}>Afrique</Bouton>
                    <Bouton estSelect={this.state.bntSelect==="oceania"} clic = {()=>this.handleFiltreRegion("oceania")}>Oceanie</Bouton>
                    <Bouton estSelect={this.state.bntSelect==="asia"} clic = {()=>this.handleFiltreRegion("asia")}>Asie</Bouton>
                    <p className='active'>Numero de pays : {this.state.listePays.length}</p>
                    <div className='row'>
                        {listePays}
                    </div>  
                    {pages}               
                </div>
            </>
        )
    }
}

export default ListePays