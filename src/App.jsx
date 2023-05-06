import React from "react";
import { Component } from "react";
import reactLogo from "./assets/react.svg";
import SearchForm from "./Components/SearchForm/SearchForm";
import List from "./Components/List/List";
import { StyledTitle, StyledWrap } from "./Components/Style/styled";
import { fetchStories } from "./services/api";
import { debounce } from "lodash";

export class App extends Component {
  state = {
    searchTerm: "",
    stories: [],
    isLoading: false,
    isError: false,
  };

  fetchData = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await fetchStories(this.state.searchTerm);
      // console.log(data);
      this.setState({ stories: data });
    } catch (error) {
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  debounceFetch = debounce(this.fetchData, 1000);

  componentDidMount() {
    const searchTerm = localStorage.getItem("searchTerm") || "";
    this.setState({ searchTerm });
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("searchTerm", this.state.searchTerm);
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.debounceFetch();
    }
  }

  handleSearch = (value) => {
    this.setState({ searchTerm: value });
  };

  // fiteredStories = () => {
  //   return this.state.stories.filter(
  //     (story) =>
  //       story.title &&
  //       story.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  //   );
  // };

  handleRemoveStory = (id) => {
    const newStories = this.state.stories.filter(
      (story) => story.objectID !== id
    );
    this.setState({ stories: newStories });
  };

  render() {
    return (
      <StyledWrap>
        <div>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <StyledTitle>Hacker Stories</StyledTitle>
        </div>
        <SearchForm
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />
        {this.state.isLoading && <p>Loading..</p>}
        {this.state.isError && <p>Something went wrong</p>}
        <List
          stories={this.state.stories}
          handleRemoveStory={this.handleRemoveStory}
        />
      </StyledWrap>
    );
  }
}

export default App;
