import React from 'react';
import styled from 'styled-components';

const Pesquisa = styled.div`
display: flex;
width: 50vw;
height: 20vh;
justify-content: space-around;
`
const Titulo1  = styled.h3`
text-align: center;
background-color: #411549;
color: white;
margin-top: 0;
`


class Filtros extends React.Component{
    
    render () {
        return (
            <div>
                <Titulo1>Filtros</Titulo1>

                <Pesquisa>
                <div>
                <h4>Valor minímo:</h4>
                <input 
                type="number"
                placeholder='Digite aqui'
                 value={this.props.valueminPreco}
                 onChange={this.props.onchangeminPreco}
                />
                </div>

                <div>
                <h4>Valor máximo:</h4>
                <input 
                type="number"
                placeholder='Digite aqui'
                value={this.props.valuemaxPreco}
                onChange={this.props.onchangemaxPreco}
                />
                </div> 

                <div>
                <h4>Buscar por nome:</h4>
                <input 
                placeholder="Digite aqui"
                value={this.props.valueBusca}
                onChange={this.props.onchangeBusca}
                />
                </div>

                </Pesquisa>

            </div>
        );
    };
};


export default Filtros;