
import "./css/storylist.css";

import { useEffect, useState } from "react";

function StoryViewer({
  stories,
  currentUserIndex,
  currentStoryIndex,
  setCurrentUserIndex,
  setCurrentStoryIndex,
  onClose,
}) {
  const user = stories[currentUserIndex];
  const story = user?.stories[currentStoryIndex];

  const [progress, setProgress] = useState(0);

  // Progress timer
  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((p) => p + 1);
    }, 50);

    return () => clearInterval(interval);
  }, [currentUserIndex, currentStoryIndex]);

  // Auto next
  useEffect(() => {
    if (progress >= 100) {
      handleNext();
    }
  }, [progress]);

  const handleNext = () => {
    // Next story of same user
    if (currentStoryIndex < user.stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
    // Move to next user
    else if (currentUserIndex < stories.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1);
      setCurrentStoryIndex(0);
    }
    // Close
    else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    } else if (currentUserIndex > 0) {
      const prevUser = stories[currentUserIndex - 1];
      setCurrentUserIndex(currentUserIndex - 1);
      setCurrentStoryIndex(prevUser.stories.length - 1);
    }
  };

  if (!story) return null;

  return (
    <div className="viewer">
      {/* Progress Bars (per user stories) */}
      <div className="progress-container">
        {user.stories.map((_, i) => (
          <div key={i} className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width:
                  i < currentStoryIndex
                    ? "100%"
                    : i === currentStoryIndex
                    ? `${progress}%`
                    : "0%",
              }}
            />
          </div>
        ))}
      </div>

   {/* Header */}
<div className="header">
  <img src={user.profilePic} alt="" />
  <span>{user.username}</span>
</div>

{/* Story Image (MAIN CONTENT 🔥) */}
<img src={story.image} alt="" className="story-img" />
      {/* Controls */}
      <div className="left" onClick={handlePrev}></div>
      <div className="right" onClick={handleNext}></div>

      <button className="close" onClick={onClose}>✕</button>
    </div>
  );
}

export default StoryViewer;