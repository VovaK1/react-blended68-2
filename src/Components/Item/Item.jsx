const Item = ({ story }) => {
  return (
    <li>
      <span style={{ width: "40%" }}>
        <a href={story.url}>{story.title}</a>
      </span>
      <span style={{ width: "30%" }}>{story.author}</span>
      <span style={{ width: "10%" }}>{story.num_comments}</span>
      <span style={{ width: "10%" }}>{story.points}</span>
      <span style={{ width: "10%" }}>
        <button type="button">Dismiss</button>
      </span>
    </li>
  );
};
export default Item;
