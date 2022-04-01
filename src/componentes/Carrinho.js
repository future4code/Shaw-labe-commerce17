import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
display: flex;
/* justify-content: space-between; */
width: 50vw;
`
const Titulo2 = styled.h3`
text-align: center;
background-color: #411549;
color: white;
margin: 0;
`

class Carrinho extends React.Component{
    render () {
        return(
            <div>
                <Titulo2> Carrinho</Titulo2>
                <ContainerCarrinho>

                </ContainerCarrinho>
            </div>
        );
    };   
};

export default Carrinho;