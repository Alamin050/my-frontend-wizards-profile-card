// Function to update current time
const timeElement = document.getElementById("time");

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = now.getMilliseconds();

  // Display time in readable format + milliseconds (for test validation)
  timeElement.textContent = `${hours}:${minutes}:${seconds}.${milliseconds} (ms: ${Date.now()})`;
}

// Initial load
updateTime();
// Update every second
setInterval(updateTime, 1000);

