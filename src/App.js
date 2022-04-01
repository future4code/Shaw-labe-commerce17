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
import foguete from "./assets/foguete.jpeg"

const Header = styled.header`
background-color: #270c2b;
border: 1px solid #411549;
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
display: flex;
flex-direction: column;
align-items: center;
padding: 13px;
box-shadow: 3px 7px 22px 1px ;
`
const Img1 = styled.img`
height: 150px;
display: flex;
margin: 0 auto;
`
const CardsGrid= styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 20px;
grid-row-gap: 20px;
width: 90vw;
margin: 0 auto;
padding: 10px;
`
const SubHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
border-bottom: 1px solid black;
background-image: url(${foguete});
width: 100%;
color: white;
`
const Ordem = styled.div`
display: flex;
justify-content: space-between;
padding: 5px;
`

class App extends React.Component {
  state = {
    busca:"",
    minPreco: "",
    maxPreco: "",
    cards:[
        {
        id: Date.now(),
        imagem: camiseta1,
        nome: "Space Camiseta",
        valor: 50.00,
        },

        {
        id: Date.now(),
        imagem: camiseta2,
        nome: "Galaxya Camiseta",
        valor: 70.00,
        },

        {
        id: Date.now(),
        imagem: camiseta4,
        nome: "E'T Camiseta",
        valor: 80.00,
        },

        {
        id: Date.now(),
        imagem: camiseta5,
        nome: "Astrodev Camiseta",
        valor: 120.00,
        },

        {
        id: Date.now(),
        imagem: camiseta3,
        nome: "Foguetinho Camiseta",
        valor: 100.00,
        }, 

        {
        id: Date.now(),
        imagem: camiseta6,
        nome: "Nasa Camiseta ",
        valor: 90.00,
        }
    ] 
}
    //    updateminPreco = (event) =>{
    //     this.setState({minPreco: event.target.value})
    //   };


    //   updatemaxpreco = (event) => {
    //     this.setState({maxPreco: event.target.value})
    //   }

    // updateBusca = (event) => {
    //   this.setState({busca: event.target.value})
    //  };

  render(){
    

    const renderCards = this.state.cards
    .filter(card => {
      return card.nome.toLowerCase().includes(this.state.busca.toLowerCase())
    })
    .filter( card => {
      return this.state.minPreco === "" || card.valor >= this.state.minPreco
    })
    .filter( card => {
      return this.state.maxPreco === "" || card.valor <= this.state.maxPreco
    })
    .map((item) => {
      return (
          <Card>
          <Img1 src={item.imagem}/>
          <h3>{item.nome}</h3>
          <h5>Valor: R$ {item.valor}</h5>
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
         <SubHeader>
            <Filtros
            valueBusca = {this.state.busca}
            onchangeBusca = {(v) => {this.setState({busca: v.target.value})}}
            valueminPreco = {this.state.minPreco}
            onchangeminPreco = {(v) => {this.setState({minPreco: v.target.value})}}
            valuemaxPreco = {this.state.maxPreco}
            onchangemaxPreco = {(v) => {this.setState({maxPreco: v.target.value})}}

            />
            <Carrinho/>
         </SubHeader>
         <Ordem>
          <h5>Quantidade de produtos:</h5>
          <h5>Ordenação: <select> 
            <option>Crescente</option> 
            <option>Decrescente</option>
            </select></h5>
          </Ordem>
         <CardsGrid>
            {renderCards}
         </CardsGrid>
      </div>
    );
  };
};
 
export default App;