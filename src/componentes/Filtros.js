import React from 'react';
import styled from 'styled-components';



class Filtros extends React.Component{
    render () {
        return (
            <div>
                <h3>Filtros</h3>

                <div>
                <p>Valor minímo:</p>
                <input></input>
                <p>Valor máximo:</p>
                <input></input>
                <p>Buscar por nome:</p>
                <input></input>
                </div>

            </div>

        );
    };
};


export default Filtros;