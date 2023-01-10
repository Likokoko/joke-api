
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
encodedParams.append("src", "i am a girl");
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
  "https://voicerss-text-to-speech.p.rapidapi.com/?key=ac106055ad914e2da07fe33a50b25e2f",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
  //已輸入api key endpoint測試成功,為什麼還顯示script.js:48 SyntaxError: Unexpected token 'I', "ID3"... is not valid JSON