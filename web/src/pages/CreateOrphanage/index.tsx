import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import Sidebar from '../../components/Sidebar';
import mapMarker from '../../assets/images/map-marker.svg';
import {
  Container,
  Content,
  Form,
  Fieldset,
  Legend,
  Label,
  Input,
  InputBlock,
  TextArea,
  ImagesContainer,
  SelectButton,
  ConfirmButton,
} from './styles';

import { FiPlus } from 'react-icons/fi';
import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

const CreateOrphanage: React.FC = () => {
  return (
    <Container>
      <Sidebar />

      <Content>
        <Form>
          <Fieldset>
            <Map
              center={[-5.8073447, -35.2210328]}
              zoom={15}
              style={{ width: '100%', height: 280 }}>
              <TileLayer
                // Openstret map
                // url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                // Regular mapbox style
                // url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                // Custom mapbox style
                url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USER}/${process.env.REACT_APP_MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              <Marker
                interactive={false}
                icon={mapIcon}
                position={[-5.8073447, -35.2210328]}
              />
            </Map>
            <Legend>Dados</Legend>

            <InputBlock>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" value="" onChange={(e) => ''} />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </Label>
              <TextArea
                id="name"
                maxLength={300}
                value=""
                onChange={(e) => ''}
              />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="images">Fotos</Label>
              <ImagesContainer>
                <Label htmlFor="image[]">
                  <FiPlus size={24} color="#15B6D6" />
                </Label>
                <Input multiple onChange={(e) => ''} type="file" id="image[]" />
              </ImagesContainer>
            </InputBlock>
          </Fieldset>

          <Fieldset>
            <Legend>Visitação</Legend>

            <InputBlock>
              <Label htmlFor="instructions">Nome</Label>
              <TextArea id="instructions" value="" onChange={(e) => ''} />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="opening_hours">Horário de funcionamento</Label>
              <Input id="opening_hours" value="" onChange={(e) => ''} />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="open_on_weekends">Atende fim de semana?</Label>
              <SelectButton>
                <button type="button" className="active" onClick={(e) => ''}>
                  Sim
                </button>

                <button type="button" className="" onClick={(e) => ''}>
                  Não
                </button>
              </SelectButton>
            </InputBlock>
          </Fieldset>

          <ConfirmButton>Confirmar</ConfirmButton>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateOrphanage;
