import Item from "../Item/Item";

const List = ({ stories, handleRemoveStory }) => {
  return (
    <ul>
      {stories.map((story) => {
        return (
          <Item
            story={story}
            key={story.objectID}
            handleRemoveStory={handleRemoveStory}
          />
        );
      })}
    </ul>
  );
};
export default List;
