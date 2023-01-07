
const button = document.querySelector("button");


button.addEventListener("click", () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c3b58df377msh570c59f3f682c0ep1d6a2ajsn2e0951e6da44",
      "X-RapidAPI-Host": "humor-jokes-and-memes.p.rapidapi.com",
    },
  };

  fetch(
    "https://humor-jokes-and-memes.p.rapidapi.com/jokes/search?exclude-tags=nsfw&keywords=rocket&min-rating=7&include-tags=one_liner&number=3&max-length=200",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response.jokes[0].joke))
    .catch((err) => console.error(err));
});

const encodedParams = new URLSearchParams();
encodedParams.append("src", "Hello, world!");
encodedParams.append("hl", "en-us");
encodedParams.append("r", "0");
encodedParams.append("c", "mp3");
encodedParams.append("f", "8khz_8bit_mono");

const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "c3b58df377msh570c59f3f682c0ep1d6a2ajsn2e0951e6da44",
    "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
  },
  body: encodedParams,
};

fetch(
  "https://voicerss-text-to-speech.p.rapidapi.com/?key=5a1ebb0a983d432a8ee6cc19c70dd6e8",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));