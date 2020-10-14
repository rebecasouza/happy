import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';



import {
  Container,
  Content,
  Main,
  Link,
  Location
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Happy" />

        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>
        
        <Location>
          <strong>Natal</strong>
          <span>Rio Grande do Norte</span>
        </Location>  
        
        <Link href="/">
          <FiArrowRight size={32} />
        </Link>
      </Content>
    </Container>
  );
};

export default Landing;
