import React from 'react';

import { Aside, Footer } from './styles';

import { FiArrowLeft } from 'react-icons/fi';
import mapMarker from '../../assets/images/map-marker.svg';
import { useHistory } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Aside>
      <img src={mapMarker} alt="Happy" />
      <Footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </Footer>
    </Aside>
  );
};

export default Sidebar;
