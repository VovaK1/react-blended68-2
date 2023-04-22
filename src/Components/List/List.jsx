import Item from "../Item/Item";

const List = ({ stories }) => {
  return (
    <ul>
      {stories.map((story) => {
        return <Item story={story} key={story.objectID} />;
      })}
    </ul>
  );
};
export default List;
