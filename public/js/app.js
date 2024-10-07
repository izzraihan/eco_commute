// Custom JavaScript to handle interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for interactive map initialization
    console.log("Map should initialize here");

    // Example dynamic interaction: Update progress on challenges dynamically
    const progressBars = document.querySelectorAll('progress');
    progressBars.forEach(progress => {
        // Simulate a random increase in progress for demo purposes
        setInterval(() => {
            let newValue = Math.min(progress.value + 100, progress.max
