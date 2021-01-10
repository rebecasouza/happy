import React from 'react';

import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker } from 'react-leaflet';

import Sidebar from '../../components/Sidebar';
import {
  Container,
  Content,
  Details,
  DetailsContent,
  ImagesContainer,
  OpenDetails,
} from './styles';

const Orphanage: React.FC = () => {
  return (
    <Container>
      <Sidebar />

      <Content>
        <Details>
          <img src="" alt="" />
          <ImagesContainer>
            <button
              key="{image.id}"
              className="{activeImageIndex === index ? 'active' : ''}"
              type="button"
              onClick={(e) => 'setActiveImageIndex(index)'}>
              <img src="{image.url}" alt="{orphanage.name}" />
            </button>
          </ImagesContainer>
          <DetailsContent>
            <h1>"{'orphanage.name'}"</h1>
            <p>"{'orphanage.about'}"</p>

            <hr />

            <h2>Instruções para visita</h2>
            <p>"{'orphanage.instructions'}"</p>

            <OpenDetails>
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />"{'orphanage.opening_hours'}"
              </div>
              {/* {orphanage.open_on_weekends ? ( */}
              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </div>
              {/* ) : ( */}
              <div className="open-on-weekends dont-open">
                <FiInfo size={32} color="#FF6690" />
                Não atendemos <br />
                fim de semana
              </div>
              {/* )} */}
            </OpenDetails>
          </DetailsContent>
        </Details>
      </Content>
    </Container>
  );
};

export default Orphanage;
