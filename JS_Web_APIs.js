console.log("### WebAPis ###");

// Get Users location

// navigator.geolocation.getCurrentPosition
// ()

function getUserLocation() {
  let a = document.getElementById("location");

  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        a.innerHTML = position.coords.latitude;
      });
    }
  } catch (error) {
    console.log(error);
  }
}
