import React, { useState } from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  width: 100%;
  height: 10px;
  
`;
const InnerBar = styled.div`
  height: 10px;
  background: #f0f0f0;
`;

export const Progressbar = ({ className }) => {
  const [width, setWidth] = useState(100);
  return <BarContainer className={className} />;
};
