import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import landingImg from '../../assets/images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    329.54deg,
    ${colors.gradientBlue} 0%,
    ${colors.gradientGreen} 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: url(${landingImg}) no-repeat 80% center;
`;

export const Main = styled.main`
  max-width: 350px;

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: 800;
  }
`;
