import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import logoImg from '../../assets/images/logo.svg';
import Button from '../components/Button';
import colors from '../../assets/styles/colors';

import {
  Container,
  Content,
  Main,
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
        
        <Button to="/map"
          position="absolute"
          height="80px"
          width="80px"
          right="0"
          bottom="0"
          borderRadius="30px"
          backgroundColor={colors.yellow}
          color={colors.buttonTextBrown}
          hoverBackgroundColor={colors.lightBlue}
          hoverColor={colors.blue}
        >
          <FiArrowRight size={32} />
        </Button>
      </Content>
    </Container>
  );
};

export default Landing;
