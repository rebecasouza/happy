import styled from 'styled-components';

import colors from '../../assets/styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  position: relative;
  display: flex;
  
  .leaflet-container {
    z-index: 5;
  }

  a {
    z-index: 10;
  }
`;

export const Aside = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, ${colors.gradientBlue} 0%, ${colors.gradientGreen} 100% );
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between; 

`;

export const Header = styled.header`
  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 60px;
  } 
  
  p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;

  strong {
    font-weight: 800;
  }
`;