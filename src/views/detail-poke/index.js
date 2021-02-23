import React, { Component } from 'react';
import api from '../../services/api.js';

// import { Link } from 'react-router-dom';

import './style.css'


export default class DetailPoke extends Component {


state = {
  id: "",
  name:"",
  element1:"",
  element2:"",
  gender:"",
  age:"",
  trainer:""
};

  constructor(props) {
    super(props);
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
    this.updatePoke();

  }
  async componentDidMount(){
    const { id } = this.props.match.params;
    const response = await api.get(`/poke/${id}`);
    console.log(`id: ${id}`);
    this.setState(
      {
      id: id,
      name: response.data.name,
      element1: response.data.element1,
      element2: response.data.element2,
      gender: response.data.gender,
      age: response.data.age,
      trainer: response.data.trainer});
      }

      deletePoke = async () =>{
        const { id } = this.state;
        const response = await api.delete(`/poke/${id}`);
        console.log(response);
        if(response.status ===200){
          alert("Pokemon excluido com Sucesso!");
          this.props.history.push(`/list-poke`);
        }
      }


      updatePoke = async ( ) => {
        await api.put(`/poke`, this.state)
        .then(response =>{
          alert("Pokemon alterado com sucesso!");
          this.props.history.push(`/list-poke`);
        })
        .catch(error => {
          alert("Erro ao alterar Pokemon");
        })
      }


  render() {

  const { id, name, element1, element2, gender, age, trainer} = this.state;
    return(
      <div className="List">
        <h2>Informações Do Pokemons</h2>
        <h2>{name}</h2>
        <p>
        Código: {id} <br />
        Elemento Primário: {element1} <br />
        Elemento Secundário: {element2} <br />
        Gênero: {gender} <br />
        Idade: {age} <br />
        Trainador: {trainer} <br />
        </p>



          <h2>Alterar dados do Pokemom</h2>
                <form className="Update" onSubmit={this.handleSubmit}>
                  <div id="main-update" >
                    <label>Digite o Nome Do Pokemon
                      <input name="name" type="text"  className="form-control" value={this.state.name} onChange={this.handleInputChange} />
                    </label>
                  </div >
                  <div id="main-update" >
                    <label>Digite o Elemento Primário
                      <input name="element1" type="text" className="form-control" value={this.state.element1} onChange={this.handleInputChange} />
                    </label>
                  </div>
                  <div id="main-update" >
                    <label>Digite o Elemento Secundário
                      <input name="element2" type="text" className="form-control" value={this.state.element2} onChange={this.handleInputChange}/>
                    </label>
                  </div>
                  <div id="main-update" >
                    <label>Digite o Gênero
                      <input name="gender" type="text" className="form-control" value={this.state.gender} onChange={this.handleInputChange} />
                    </label>
                  </div>
                  <div id="main-update" >
                    <label>Digite a Idade
                      <input name="age" type="text" className="form-control" value={this.state.age} onChange={this.handleInputChange} />
                    </label>
                  </div>
                  <div id="main-update" >
                    <label>Digite o Nome Do Treinador
                      <input name="trainer" type="text" className="form-control" value={this.state.trainer} onChange={this.handleInputChange} />
                    </label>
                  </div>

                    <input type="submit" value="Alterar" className="btn btn-warning" /> <br/>
                </form>

        <button className="btn btn-danger" onClick={() => this.deletePoke()}>
        Excluir Pokemon</button>
      </div>
    );
  }
}
