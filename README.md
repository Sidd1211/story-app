
# Story App

A simple React-based web application where users can upload and view images as stories. Users can upload their stories, navigate between them, and view each story in a modal with a progress bar indicating the time left for each story. The application also supports scrolling through uploaded stories horizontally.

## Features

- **Upload Stories**: Users can upload images that will be displayed as stories.
- **Story Progress**: Each story has a progress bar that fills up over 3 seconds.
- **Navigate Through Stories**: Users can navigate through stories using next and previous buttons.
- **Responsive Design**: The modal displaying the stories adapts to the screen size, ensuring a smooth viewing experience.
- **Background Blur**: When viewing a story, the background is blurred to focus on the current story.
- **Scrollable Story List**: The list of stories is horizontally scrollable if there are more stories than can fit on the screen.

## Technologies Used

- **React**: For building the interactive UI components.
- **CSS**: For styling the components and layout.
- **FileReader API**: To handle image file uploads and render them as base64 images.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/story-app.git](https://github.com/Sidd1211/story-app/story-app.git)
    cd story-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application running.

## Usage

1. **Add Story**: Click the **+** button to upload an image. The image will be added to the story list.
2. **View Story**: Click on any story thumbnail in the list to view the image in full-screen mode.
3. **Navigate Through Stories**: Use the **Next** and **Previous** buttons to move between stories.
4. **Story Progress**: Each story will have a progress bar that fills up in 3 seconds, after which the app will automatically switch to the next story.

## Future Improvements

- **User Authentication**: Allow users to log in and save their stories.
- **Add Text Stories**: Enable users to add text-based stories alongside image-based ones.
- **Styling Enhancements**: Improve the visual design with animations or additional styling.
- **Persist Stories**: Store uploaded stories locally or in a cloud database for persistent access.

## Contributing

If you’d like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure that your code follows the coding standards of the project.

## License

This project is open-source and available under the [MIT License](LICENSE).
