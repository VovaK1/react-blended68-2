import { StyledButtonSmall, StyledItem, StyledSpan } from "../Style/styled";

const Item = ({ story }) => {
  return (
    <StyledItem>
      <StyledSpan width="40%">
        <a href={story.url}>{story.title}</a>
      </StyledSpan>
      <StyledSpan width="30%">{story.author}</StyledSpan>
      <StyledSpan width="10%">{story.num_comments}</StyledSpan>
      <StyledSpan width="10%">{story.points}</StyledSpan>
      <StyledSpan width="10%">
        <StyledButtonSmall type="button">Dismiss</StyledButtonSmall>
      </StyledSpan>
    </StyledItem>
  );
};
export default Item;
