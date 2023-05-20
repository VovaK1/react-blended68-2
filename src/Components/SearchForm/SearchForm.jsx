import {
  StyledButtonLarge,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../Style/styled";

const SearchForm = ({ handleSubmit, inputValue, setInputValue }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="search">Search: </StyledLabel>
      <StyledInput
        id="search"
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <StyledButtonLarge type="submit">Submit</StyledButtonLarge>
    </StyledForm>
  );
};
export default SearchForm;
