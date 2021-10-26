import React from 'react';
import * as Styled from './styles';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Filter from '../../Components/Filter'

function Home() {
  return (
    <Styled.Container> 
      <Header />
        <Styled.ContainerFilter>
          <Filter title= "TODOS"/>
          <Filter title= "HOJE"/>
          <Filter title= "SEMANA"/>
          <Filter title= "MÊS"/>
        </Styled.ContainerFilter>
      <Footer />
    </Styled.Container>)
}

/*RESPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREAS DO CÓDIGO*/
export default Home;
