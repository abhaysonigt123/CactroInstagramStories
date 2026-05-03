function StoryItem({ story, onClick }) {
  return (
    <div className="story-item" onClick={onClick}>
      <div className="story-ring">
        <img src={story.profilePic} alt={story.username} />
      </div>
      <p>{story.username}</p>
    </div>
  );
}

export default StoryItem;