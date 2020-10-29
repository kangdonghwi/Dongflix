import React from "react";
import styled from "styled-components";
import backgroundImg from '../assets/header.jpg';

const Img = styled.img`
  width: 100%;
  margin-bottom : 10px;
`;

export default () => (
<>
    <Img src={backgroundImg} alt="stranger"/>
</>
);
