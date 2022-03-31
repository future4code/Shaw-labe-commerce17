import React from 'react';
import Filtros from './componentes/Filtros';
import logo from "./assets/logo1.png"
import styled from "styled-components"
import Carrinho from './componentes/Carrinho';
import camiseta1 from "./assets/camiseta1.webp"
import camiseta2 from "./assets/camiseta2.webp"
import camiseta3 from "./assets/camiseta3.webp"
import camiseta5 from "./assets/camiseta5.webp"
import camiseta4 from "./assets/camiseta4.jpeg"
import camiseta6 from "./assets/camiseta6.webp"

const Header = styled.header`
background-color: #2b122d;
border: 1px solid black;
height: 13vh;
width: 100vw;
display: flex;
justify-content: space-between;
`
const Titulo = styled.h4`
padding: 15px;
color: white;
margin-right:650px;
`
const Logo = styled.div`
background-image: url(${logo});
background-size:contain;
background-repeat:no-repeat;
width: 10%;
`
const Card = styled.div`
border: 1px solid black;
height: 42vh;
width: 43vh;
margin: 15px;
display: flex;
flex-direction: column;
align-items: center;
padding: 3px;
`
const Img1 = styled.img`
height: 150px;
display: flex;
margin: 0 auto;
`

class App extends React.Component {
  state = {
    cards:[
        {
        id: Date.now(),
        imagem: camiseta1,
        nome: "Camiseta Space",
        valor: 50.00,
        },

        {
        id: Date.now(),
        imagem: camiseta2,
        nome: "Camiseta Galaxya",
        valor: 70.00,
        },

        {
        id: Date.now(),
        imagem: camiseta4,
        nome: "Camiseta E'T",
        valor: 80.00,
        },

        {
        id: Date.now(),
        imagem: camiseta5,
        nome: "Camiseta Astrodev",
        valor: 120.00,
        },

        {
        id: Date.now(),
        imagem: camiseta3,
        nome: "Camiseta Foguetinho",
        valor: 100.00,
        }, 

        {
        id: Date.now(),
        imagem: camiseta6,
        nome: "Camiseta Nasa",
        valor: 90.00,
        }
    ]
}
  render(){
    const renderCards = this.state.cards.map((item) => {
      return (
          <Card>
          <Img1 src={item.imagem}/>
          <p>{item.nome}</p>
          <p>Valor: R$ {item.valor}</p>
          <button>Adicionar ao carrinho</button>
          </Card>
      );
  })
    return(
      <div> 
         <Header>
           <Logo />
           <Titulo>SPACE T-SHIRTS</Titulo>
         </Header>
         <Filtros/>
         <Carrinho/>
         {renderCards}
      </div>
    );
  };
};
 

export default App;
