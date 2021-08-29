const esSounds = ["gallina.mp3", "molestarme.mp3", "humillaros.mp3", "brazo.mp3", "blah.mp3", "no-cansar.mp3", "no-gracia.mp3"];
const enSounds = ["arm.mp3", "blah-en.mp3", "catch.mp3", "flailing.mp3", "fun.mp3", "funny.mp3", "tired.mp3"];
const potatoGlados = document.querySelector(".glados-potato-container");
const langSounds = navigator.language.indexOf("es") === 0 ? esSounds : enSounds;
const sounds = langSounds.map(name => new Audio(name));

let currentSound = -1;

const startTalk = () => {
  currentSound = ~~(Math.random() * sounds.length);
  sounds[currentSound].play();
  shineEye();
};

const shineEye = () => {
  potatoGlados.classList.toggle("talking");
  const isPlaying = !sounds[currentSound].paused;

  if (isPlaying) {
    const time = ~~(Math.random() * 250);
    setTimeout(() => shineEye(), time);
  } else {
    stopTalk();
  }
};

const stopTalk = () => {
  potatoGlados.classList.remove("talking");
  currentSound = -1;
};

potatoGlados.addEventListener("click", () => {
  if (currentSound === -1) startTalk();
});
