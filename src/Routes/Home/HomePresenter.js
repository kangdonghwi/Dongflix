import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Dongflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>Movies | Dongflix</title>
        </Helmet>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date.substring(0, 4)}
              ></Poster>
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date.substring(0, 4)}
              ></Poster>
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="upcoming Movies">
            {upcoming.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date.substring(0, 4)}
              ></Poster>
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error}></Message>}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: propTypes.array,
  upcoming: propTypes.array,
  popular: propTypes.array,
  loading: propTypes.bool.isRequired,
  error: propTypes.string,
};

export default HomePresenter;
