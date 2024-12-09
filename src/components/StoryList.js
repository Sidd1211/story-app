import React, { useState } from 'react';
import StoryViewer from './StoryViewer';
import './StoryList.css';

const StoryList = ({ stories }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(null);

  return (
    <div className="story-list-container">
      <div className="story-list">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className="story-thumbnail"
            onClick={() => setCurrentStoryIndex(index)}
          >
            <img src={story.image} alt="Story" />
          </div>
        ))}
      </div>
      {currentStoryIndex !== null && (
        <StoryViewer
          stories={stories}
          currentIndex={currentStoryIndex}
          onClose={() => setCurrentStoryIndex(null)}
        />
      )}
    </div>
  );
};

export default StoryList;
