import React, { Component } from 'react';

import api from '../../services/api.js';

import './style.css';

export default class RegisterPoke extends Component {


constructor(props) {
  super(props);
  this.state = {
    name:"",
  element1:"",
  element2:"",
  gender:"",
  age:"",
  trainer:""
  };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);

}

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
    [name] : value
  });
  }

handleSubmit(event) {
  event.preventDefault();
  console.log("sate enviado ->" + this.state);
  this.registerPoke();

}

registerPoke = async ( ) => {


  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('GET', 'POST', 'PUT', 'DELETE', 'OPTIONS');

  await api.post('/poke', this.state, headers)
  .then(response => {
    console.log(response);
    alert("Pokemon cadastrado com sucesso!");
  })
  .catch(error => {
    console.log(error);
    alert("Erro ao registrar Pokemon ");
  });

};

  render() {
    return(
      <div>
        <h2>Registro De Pokemons</h2>
        <form className="regist" onSubmit={this.handleSubmit}>
          <div id="main-register">
            <label>Digite o Nome Do Pokemon
              <input name="name" type="text" className="form-control" value={this.state.name} onChange={this.handleInputChange} />
            </label>
          </div>
          <div id="main-register">
            <label>Digite o Elemento Primário
              <input name="element1" type="text" className="form-control" value={this.state.element1} onChange={this.handleInputChange} />
            </label>
          </div>
          <div id="main-register">
            <label>Digite o Elemento Secundário
              <input name="element2" type="text" className="form-control" value={this.state.element2} onChange={this.handleInputChange}/>
            </label>
          </div>
          <div id="main-register">
            <label>Digite o Gênero
              <input name="gender" type="text" className="form-control" value={this.state.gender} onChange={this.handleInputChange} />
            </label>
          </div>
          <div id="main-register">
            <label>Digite a Idade
              <input name="age" type="text" className="form-control" value={this.state.age} onChange={this.handleInputChange} />
            </label>
          </div>
          <div id="main-register">
            <label>Digite o Nome Do Treinador
              <input name="trainer" type="text" className="form-control" value={this.state.trainer} onChange={this.handleInputChange} />
            </label>
          </div>

            <input type="submit"  value="Registrar" className="btn btn-primary"/>
        </form>
      </div>
    );
  }
}


// "name":"Venonatsxsafii",
// "element1":"Bug",
// "element2":"Poison",
// "gender":"Male",
// "age":"25",
// "trainer":"Tony"
