import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "50px",
  slidesToShow: 6,
  speed: 500,
};

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-bottom: 50px;
  margin-top: 10px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>
      <Slider {...settings}>{children}</Slider>
    </Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Section;
