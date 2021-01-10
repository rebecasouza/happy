import styled from 'styled-components';

import colors from '../../assets/styles/colors';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.main`
  flex: 1;
`;

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid ${colors.backLineGrey};
  border-radius: 20px;

  padding: 64px 80px;
  overflow: hidden;

  .leaflet-container {
    margin-bottom: 40px;
    border: 1px solid ${colors.backLineGrey};
    border-radius: 20px;
  }
`;

export const Fieldset = styled.fieldset`
  border: 0;

  & + & {
    margin-top: 80px;
  }
`;

export const InputBlock = styled.div`
  & + & {
    margin-top: 24px !important;
  }

  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid ${colors.backLineGrey};
    border-radius: 20px;
    outline: none;
    color: ${colors.baseTextBlue};
  }
`;

export const Legend = styled.legend`
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  color: ${colors.titleTextDarkBlue};
  font-weight: 700;

  border-bottom: 1px solid ${colors.backLineGrey};
  margin-bottom: 40px;
  padding-bottom: 24px;
`;

export const Label = styled.label`
  display: flex;
  color: ${colors.baseComplementsGray};
  line-height: 24px;
  margin-bottom: 10px;

  span {
    font-size: 14px;
    color: ${colors.baseComplementsGray};
    margin-left: 24px;
    line-height: 24px;
  }
`;

export const Input = styled.input`
  height: 64px;
  padding: 0 16px;

  &[type='file'] {
    visibility: hidden;
    display: none;
  }
`;

export const TextArea = styled.textarea`
  min-height: 120px;
  max-height: 240px;
  resize: vertical;
  padding: 16px;
  line-height: 28px;
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

  img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
  }

  label {
    height: 96px;
    background: ${colors.inputWhite};
    border: 1px dashed ${colors.lightBlue};
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SelectButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    height: 64px;
    background: ${colors.inputWhite};
    border: 1px solid ${colors.backLineGrey};
    color: ${colors.baseTextBlue};
    cursor: pointer;

    &.active {
      background: ${colors.paleGreen};
      border: 1px solid ${colors.lightGreen};
      color: ${colors.green};
    }

    :first-child {
      border-radius: 20px 0px 0px 20px;
    }

    :last-child {
      border-radius: 0 20px 20px 0;
      border-left: 0;
    }
  }
`;

export const ConfirmButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: ${colors.brighterGreen};
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  svg {
    margin-right: 16px;
  }

  :hover {
    background: ${colors.brightGreen};
  }
`;
