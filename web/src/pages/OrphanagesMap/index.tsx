import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import mapMarker from '../../assets/images/map-marker.svg';
import colors from '../../assets/styles/colors';
import Button from '../../components/Button';

import 'leaflet/dist/leaflet.css';

import { Container, Aside, Header, Footer } from './styles';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Aside>
        <Header>
          <img src={mapMarker} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <Footer>
          <strong>Natal</strong>
          <span>Rio Grande do Norte</span>
        </Footer>
      </Aside>

      <Map
        center={[-5.8073447, -35.2210328]}
        zoom={13.14}
        style={{ width: '100%', height: '100%' }}>
        <TileLayer
          // Openstret map
          // url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          // Regular mapbox style
          // url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          // Custom mapbox style
          url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USER}/${process.env.REACT_APP_MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={mapIcon} position={[-5.8073447, -35.2210328]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup">
            Lar das meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Button
        to="/orphanages/create"
        position="absolute"
        height="64px"
        width="64px"
        right="40px"
        bottom="40px"
        borderRadius="20px"
        backgroundColor={colors.blue}
        color="white"
        hoverBackgroundColor={colors.hoverDarkerBlue}
        hoverColor="white">
        <FiPlus size={35} />
      </Button>
    </Container>
  );
};

export default OrphanagesMap;
