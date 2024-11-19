// Toggle Fullscreen
function toggleFullscreen() {
    const videoContainer = document.getElementById("video-container");
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoContainer.requestFullscreen();
    }
  }
  
  // Pause Feed
  function pauseFeed() {
    const videoFeed = document.getElementById("video-feed");
    videoFeed.src = "";
  }
  
  // Refresh Feed
  function refreshFeed() {
    const videoFeed = document.getElementById("video-feed");
    videoFeed.src = videoFeed.dataset.src; // Use data-src attribute to store URL
  }
  
  // Toggle Light/Dark Theme
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }
  