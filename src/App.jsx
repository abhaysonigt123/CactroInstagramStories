import { useState } from "react";
import stories from "./data/stories.json";
import StoryList from "./component/StoryList";
import StoryViewer from "./component/StoryViewer";

function App() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentUserIndex, setCurrentUserIndex] = useState(null);
const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  return (
    <>
     <StoryList
  stories={stories}
  onSelect={(index) => {
    setCurrentUserIndex(index);
    setCurrentStoryIndex(0);
  }}
/>

    {currentUserIndex !== null && (
  <StoryViewer
    stories={stories}
    currentUserIndex={currentUserIndex}
    currentStoryIndex={currentStoryIndex}
    setCurrentUserIndex={setCurrentUserIndex}
    setCurrentStoryIndex={setCurrentStoryIndex}
    onClose={() => setCurrentUserIndex(null)}
  />
)}
    </>
  );
}

export default App;