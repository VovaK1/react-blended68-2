import {
  StyledButtonLarge,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../Style/styled";

const SearchForm = () => {
  return (
    <StyledForm>
      <StyledLabel htmlFor="search">Search: </StyledLabel>
      <StyledInput id="search" type="text" />
      <StyledButtonLarge type="submit">Submit</StyledButtonLarge>
    </StyledForm>
  );
};
export default SearchForm;
