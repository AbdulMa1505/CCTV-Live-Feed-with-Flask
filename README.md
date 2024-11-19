# CCTV Live Feed with Flask

This project provides a live CCTV video feed using Python's Flask framework and OpenCV. Users can view the video feed in real-time, toggle fullscreen, pause the feed, refresh the feed, and switch between light and dark themes.

---

## Features

- **Live Video Feed**: Streams live video from the camera.
- **Fullscreen Mode**: View the feed in fullscreen for better visibility.
- **Pause & Refresh**: Pause the video feed and refresh it when needed.
- **Light/Dark Mode**: Toggle between light and dark themes for better usability.
- **Responsive Design**: Built with Bootstrap for a clean and mobile-friendly layout.

---

## Prerequisites

Before running this project, ensure you have the following installed:

- **Python 3.8+**
- **Flask**: `pip install flask`
- **OpenCV**: `pip install opencv-python`

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AbdulMa1505/cctv-flask-feed.git
   cd cctv-flask-feed
2. Install required dependencies:
    ``pip install -r requirements.txt
    (If you don't have a requirements.txt, create one with the following content:)
    Flask
    opencv-python
3. Run the Flask app:
    ``python app.py

    ## File Structure
.
├── app.py                # Main Flask application
├── templates
│   └── index.html        # Frontend HTML with controls and video feed
├── static
│   ├── styles.css        # Custom styles for light/dark mode
│   └── script.js         # JavaScript for interactivity
└── README.md             # Project documentation


# Usage
- Buttons
- Go Fullscreen: Click to view the feed in fullscreen.
- Pause Feed: Stops the live feed.
- Refresh Feed: Reloads the feed.
- Toggle Light/Dark Mode: Switches between light and dark themes.
 # Issues
- If the video feed doesn't display:

- Check your webcam or camera connection.
- Ensure browser permissions for the camera are enabled.
- Debug by testing the /video route directly in the browser.
# Contributing
- Contributions are welcome! Feel free to fork this repository and submit a pull request.

# License
- This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgments
- Flask
- OpenCV
- Bootstrap





