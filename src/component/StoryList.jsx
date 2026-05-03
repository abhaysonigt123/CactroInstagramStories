import StoryItem from "./StoryItem";
import "./css/storylist.css";

function StoryList({ stories, onSelect }) {
  return (
    <div className="story-list">
      {stories.map((story, index) => (
        <StoryItem
          key={story.id}
          story={story}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}

export default StoryList;