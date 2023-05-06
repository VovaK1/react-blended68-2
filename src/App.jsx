import React from "react";
import { Component } from "react";
import reactLogo from "./assets/react.svg";
import SearchForm from "./Components/SearchForm/SearchForm";
import List from "./Components/List/List";
import { StyledTitle, StyledWrap } from "./Components/Style/styled";

const InitialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
``;

export class App extends Component {
  state = {
    searchTerm: "",
    stories: InitialStories,
  };

  componentDidMount() {
    const searchTerm = localStorage.getItem("searchTerm") || "";
    this.setState({ searchTerm });
  }
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("searchTerm", this.state.searchTerm);
  }
  handleSearch = (value) => {
    this.setState({ searchTerm: value });
  };

  fiteredStories = () => {
    return this.state.stories.filter((story) =>
      story.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

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
        <List
          stories={this.fiteredStories()}
          handleRemoveStory={this.handleRemoveStory}
        />
      </StyledWrap>
    );
  }
}

export default App;
