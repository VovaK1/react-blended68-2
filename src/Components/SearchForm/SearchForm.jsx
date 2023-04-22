import {
  StyledButtonLarge,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../Style/styled";

const SearchForm = ({ handleSearch, searchTerm }) => {
  return (
    <StyledForm>
      <StyledLabel htmlFor="search">Search: </StyledLabel>
      <StyledInput
        id="search"
        type="text"
        value={searchTerm}
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      />
      <StyledButtonLarge type="submit">Submit</StyledButtonLarge>
    </StyledForm>
  );
};
export default SearchForm;
