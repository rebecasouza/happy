import styled from 'styled-components';

import colors from '../../assets/styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  .leaflet-container {
    z-index: 5;

    .map-popup {
      .leaflet-popup-content-wrapper {
        background: rgba(255, 255, 255, 0.8);
        border-radius: 20px;
        box-shadow: none;
      }

      .leaflet-popup-content {
        color: ${colors.titleTextBlue};
        font-size: 20px;
        font-weight: bold;
        margin: 8px 12px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
          width: 40px;
          height: 40px;
          background: ${colors.blue};
          box-shadow: 14.2858px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
          border-radius: 12px;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .leaflet-popup-tip-container {
        display: none;
      }
    }
  }

  a {
    z-index: 10;
  }
`;

export const Aside = styled.aside`
  width: 440px;
  background: linear-gradient(
    329.54deg,
    ${colors.gradientBlue} 0%,
    ${colors.gradientGreen} 100%
  );
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
