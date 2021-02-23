import React, { Component } from 'react';
import api from '../../services/api.js';

import { Link } from 'react-router-dom';

import './style.css'


export default class ListPoke extends Component {


state = {
  pokers : [],
};


componentDidMount() {
  this.loadPokers();

}

  loadPokers = async () => {
    const response = await api.get("/poke");
    this.setState({pokers: response.data['pokers']});
  }

  render() {

    const { pokers } = this.state;

    return(
      <div>
        <h2>Lista De Pokemons</h2>
        <p>Quantidade de Pokemons Registrados <strong>{pokers.length}</strong></p>
        <div className="pokers-list">
        {pokers.map(poke =>(
          <article key={poke.id} id="poke-article">
            <p>
            Código {poke.id} <br/>
            <strong>Nome {poke.name} </strong> <br/>
            Elemento 1 {poke.element1} <br/>
            Elemento 2 {poke.element2} <br/>
            gênero {poke.gender} <br/>
            idade {poke.age} <br/>
            Trainador {poke.trainer}
            </p>
            <Link to={`/detail-poke/${poke.id}`}><strong>Informações Do Pokemon</strong></Link>
          </article>
        ))}
        </div>
      </div>
    );
  }
}
