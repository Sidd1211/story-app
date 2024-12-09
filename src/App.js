import React, { useState, useEffect } from 'react';
import StoryList from './components/StoryList';
import StoryUploader from './components/StoryUploader';
import './App.css';

function App() {
  const [stories, setStories] = useState([]);

  // Load stories from local storage on initial render
  useEffect(() => {
    const storedStories = JSON.parse(localStorage.getItem('stories')) || [];
    const validStories = storedStories.filter(story =>
      Date.now() - story.timestamp < 2000 // 24 hours in ms
    );
    setStories(validStories);
  }, []);

  // Save stories to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('stories', JSON.stringify(stories));
  }, [stories]);

  // Add a new story
  const addStory = (base64Image) => {
    const newStory = {
      id: Date.now(),
      image: base64Image,
      timestamp: Date.now(),
    };
    setStories([...stories, newStory]);
  };

  return (
    <div className="App">
      <h1>24hr Story Feature</h1>
      <div className="story-container">
        <StoryUploader addStory={addStory} />
        <StoryList stories={stories} />
      </div>
    </div>
  );
}

export default App;
