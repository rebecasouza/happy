import React from 'react';

import { CustomLink } from './styles';

interface ButtonProps {
  to: string;
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

const Button: React.FC<ButtonProps> = ({
  to,
  position,
  height,
  width,
  top,
  right,
  bottom,
  left,
  borderRadius,
  backgroundColor,
  color,
  hoverColor,
  hoverBackgroundColor,
  children
}) => {
  return (
    <CustomLink to={to}
      position={position}
      height={height}
      width={width}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      color={color}
      hoverColor={hoverColor}
      hoverBackgroundColor={hoverBackgroundColor}
    >
      {children}
    </CustomLink>
  );
};

export default Button;