import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults,
      });
    } catch {
      this.setState({ error: "Can't find movies information" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error, updateTerm } = this.state;

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        loading={loading}
        error={error}
      />
    );
  }
}
