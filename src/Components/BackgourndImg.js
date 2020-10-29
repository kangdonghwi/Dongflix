import React from "react";
import styled from "styled-components";
import backgroundImg from '../assets/header.jpg';

const Img = styled.img`
  width: 100%;
  margin-bottom : 10px;
`;

const Contents = styled.div`
    font-size: 2em;
    font-weight: 600;
    position: absolute;
    bottom: 10%;
    left: 5%;
    width: 60%;
    height: 50%;
    color: white;
    @include responsive(tab_port) {
        width: 80%;
    }
`;

const Title = styled.h1`
    font-size: 2em;
    font-weight: 600;
`;

const P = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin-top: 2%;
    @include responsive(phone) {
        width: 200px;
        height: 50px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
    }
`;


export default () => (
    <>
        <Img src={backgroundImg} alt="stranger"/>
        <Contents>
            <Title>STRANGER THINGS</Title>
            <P>When a young boy vanishes, <br />a small town uncovers a mystery involving secret experiments,<br /> terrifying supernatural forces,<br /> and one strange little girl.</P>
        </Contents>
    </>
);
