import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ButtonProps {
  position?: string;
  height: string;
  width: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  borderRadius: string;
  backgroundColor: string;
  color: string;
  hoverColor: string;
  hoverBackgroundColor: string;
}

export const CustomLink = styled(Link)<ButtonProps>`
  position: ${(props) => (props.position ? props.position : 'inherit')};
  top: ${(props) => (props.top ? props.top : 'inherit')};
  right: ${(props) => (props.right ? props.right : 'inherit')};
  bottom: ${(props) => (props.bottom ? props.bottom : 'inherit')};
  left: ${(props) => (props.left ? props.left : 'inherit')};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease;
  transition-property: color, background-color;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
  }
`;
