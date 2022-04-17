import React from "react";
import styled from "styled-components";

const ContainerPai = styled.div`
width: 50%;
`

const ContainerCarrinho = styled.div`
display: flex; 
align-items: center;
justify-content: space-evenly;
 button {
     height: 25px;

 }
`
const Titulo2 = styled.h3`
text-align: center;
background-color: #411549;
color: white;
width: 100%;
margin: 0;
`
const CarrinhoGrid = styled.div`


display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 9px;
grid-row-gap: 0px;

`

class Carrinho extends React.Component{

state = {
    carrinho: this.props.arrayCarrinho
}

    render () {
      
        
        return(

            <ContainerPai>
               
                <Titulo2>Carrinho </Titulo2>
                <CarrinhoGrid>
                 {this.props.arrayCarrinho.map ((item) => {
                    return (
                    <ContainerCarrinho>
                    <p>{item.quantidade}x</p>
                    <p>{item.nome}</p>
                    <button onClick={() => this.props.deleteProduto(item)}>Remover</button>
                    </ContainerCarrinho>
                    )
                   })} 
             </CarrinhoGrid>
            </ContainerPai>
        );
    };   
};

export default Carrinho;