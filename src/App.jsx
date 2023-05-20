import React, { useCallback } from "react";
import reactLogo from "./assets/react.svg";
import SearchForm from "./Components/SearchForm/SearchForm";
import List from "./Components/List/List";
import { StyledTitle, StyledWrap } from "./Components/Style/styled";
import { fetchStories } from "./services/api";
import { debounce } from "lodash";
import { useState, useEffect } from "react";
import useSemiPersistentState from "./Hooks/useSemiPersistentState";

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("searchTerm", "");
  const [inputValue, setInputValue] = useState("");
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchStories(searchTerm);
      setStories(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const debounceFetch = debounce(fetchData, 1000);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    debounceFetch();
  }, [searchTerm]);

  const handleRemoveStory = useCallback((id) => {
    const newStories = stories.filter((story) => story.objectID !== id);
    setStories(newStories);
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <StyledWrap>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <StyledTitle>Hacker Stories</StyledTitle>
      </div>
      <SearchForm
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {isLoading && <p>Loading..</p>}
      {isError && <p>Something went wrong</p>}
      <List stories={stories} handleRemoveStory={handleRemoveStory} />
    </StyledWrap>
  );
};

export default App;
