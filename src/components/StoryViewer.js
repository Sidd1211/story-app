import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons
import './StoryViewer.css';

const StoryViewer = ({ stories, currentIndex, onClose }) => {
    const [activeIndex, setActiveIndex] = useState(currentIndex);
    const [progress, setProgress] = useState(0);

    const story = stories[activeIndex];

    useEffect(() => {
        if (!story) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    moveToNextStory();
                    return 0;
                }
                return prev + (100 / 300); // Fill in 3 seconds
            });
        }, 10);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const moveToNextStory = () => {
        if (activeIndex < stories.length - 1) {
            setActiveIndex((prev) => prev + 1);
            setProgress(0);
        } else {
            onClose(); // Close modal if no more stories
        }
    };

    const moveToPreviousStory = () => {
        if (activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
            setProgress(0);
        }
    };

    return (
        <Modal isOpen={!!story} onRequestClose={onClose} className="modal" overlayClassName="overlay">
            {story && (
                <div className="story-container">
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <div className="controls">
                        <button
                            onClick={moveToPreviousStory}
                            disabled={activeIndex === 0}
                            className="control-button"
                        >
                            <FaArrowLeft size={24} />
                        </button>
                        <img
                            src={story.image}
                            alt="Story"
                            className="story-image"
                            style={{ maxWidth: '100%', maxHeight: '100vh' }}
                        />
                        <button
                            onClick={moveToNextStory}
                            disabled={activeIndex === stories.length - 1}
                            className="control-button"
                        >
                            <FaArrowRight size={24} />
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default StoryViewer;
