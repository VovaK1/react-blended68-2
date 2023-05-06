export const fetchStories = (query) => {
  return fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
    .then((response) => response.json())
    .then((response) => response.hits);
};
