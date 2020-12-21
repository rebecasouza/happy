import styled from 'styled-components';
import colors from '../../../assets/styles/colors';

export const Aside = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(
    329.54deg,
    ${colors.gradientLightBlue} 0%,
    ${colors.gradientLightGreen} 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 48px;
  }
`;

export const Footer = styled.footer`
  a,
  button {
    width: 48px;
    height: 48px;
    border: 0;

    background: ${colors.gradientBlue};
    border-radius: 16px;

    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${colors.hoverDarkerBlue};
    }
  }
`;
