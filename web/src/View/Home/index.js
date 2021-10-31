import React, {useState} from 'react';
import * as Styled from './styles';


/*IMAGENS*/
import Imagem from '../../Imgs/filter.png';
import jiujitsu from '../../Imgs/jiuj.png'
import viagem from '../../Imgs/viagem.png'
import cinema from '../../Imgs/cinema.png'
import lanche from '../../Imgs/lanche.jpg'
import prova from '../../Imgs/prova.jpg'
import academia from '../../Imgs/academia.jpg'
import compra from '../../Imgs/compra.jpg'
import trabalho from '../../Imgs/trabalho.png'

/*COMPONENTES*/
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import TaskCard from '../../Components/TaskCard';


function Home() {
  const [filterActive, functionFilter] = useState();
  return (
    <Styled.Container> 
      <Header />
        <Styled.ContainerFilter>
          <button type= 'button' onClick={() => functionFilter("TODOS")}>
          <Filter title= "TODOS" img={Imagem} actived={filterActive == "TODOS"}/>
          </button>

          <button type= 'button' onClick={() => functionFilter("HOJE")}>
          <Filter title= "HOJE" img={Imagem} actived={filterActive == "HOJE"}/>
          </button>

          <button type= 'button' onClick={() => functionFilter("SEMANA")}>
          <Filter title= "SEMANA" img={Imagem} actived={filterActive =="SEMANA"}/>
          </button>

          <button type= 'button' onClick={() => functionFilter("MÊS")}>
           <Filter title= "MÊS" img={Imagem} actived={filterActive == "MÊS"}/>
          </button>
          
        
        </Styled.ContainerFilter>

        <Styled.ContainerCard>
          <TaskCard img={jiujitsu} title="Jiu-Jitsu"/>
          <TaskCard img={viagem} title="Viagem"/>
          <TaskCard img={cinema} title="Cinema"/>
          <TaskCard img={lanche} title="Lanche"/>
          <TaskCard img={prova} title="Prova"/>
          <TaskCard img={academia} title="Academia"/>
          <TaskCard img={compra} title="Compra"/>
          <TaskCard img={trabalho} title="Trabalho"/>
        </Styled.ContainerCard>
      <Footer />
    </Styled.Container>)
}

/*RESPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREAS DO CÓDIGO*/
export default Home;
