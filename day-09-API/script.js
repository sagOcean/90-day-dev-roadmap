async function fetchData() {
  try {
    document.querySelector(".quote_text").textContent = "Loading quote...";
    const response = await fetch("https://dummyjson.com/quots/random");
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const data = await response.json();

    document.querySelector(".quote_text").innerHTML =
      `${data.quote}\n\n--${data.author}`;
  } catch (error) {
      document.querySelector(".quote_text").innerHTML = "Sorry, we couldn't load a quote. Please try again.";
      console.error(error);
  }
}

function playSound() {
  const audio = document.querySelector("audio");

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
}

document.querySelector(".btn_primary").addEventListener("click", () => {
  fetchData();
  playSound();
});
