import React, {useState} from 'react';
import * as Styled from './styles';


/*IMAGENS*/
import Imagem from '../../Imgs/filter.png';

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
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </Styled.ContainerCard>
      <Footer />
    </Styled.Container>)
}

/*RESPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREAS DO CÓDIGO*/
export default Home;
