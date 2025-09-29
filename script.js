// 🎧 Spotify link
const spotifyUrl = "https://open.spotify.com/track/4tkk65MyQNzYOQKgVbLCZ3";
document.getElementById("spotifyBtn").addEventListener("click", () => {
  window.open(spotifyUrl, "_blank");
});

// 🔊 Restart birthday song on click anywhere
document.body.addEventListener("click", () => {
  document.getElementById("song").play();
});

// 🎈 Score + High Score
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;

const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("highScore");
highScoreEl.textContent = highScore;

// 🎈 Balloons float + catch game
function createBalloon() {
  const balloon = document.createElement("img");
  balloon.src = "images/ballooon.png";
  balloon.style.width = "60px";
  balloon.style.position = "absolute";
  balloon.style.left = Math.random() * window.innerWidth + "px";
  balloon.style.top = window.innerHeight + "px";
  balloon.classList.add("balloon");
  document.body.appendChild(balloon);

  // Click = catch
  balloon.addEventListener("click", () => {
    score++;
    scoreEl.textContent = score;

    // Update high score
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
      localStorage.setItem("highScore", highScore);
    }

    balloon.remove();
    createBalloon(); // replace with a new one
  });

  // Float upwards
  let y = window.innerHeight;
  const speed = 1 + Math.random() * 2;
  function floatUp() {
    y -= speed;
    balloon.style.top = y + "px";
    if (y < -100) {
      balloon.remove();
      createBalloon(); // respawn if missed
    } else {
      requestAnimationFrame(floatUp);
    }
  }
  floatUp();
}
for (let i = 0; i < 15; i++) {
  setTimeout(createBalloon, i * 800);
}

// ⚽ Soccer goal
//const soccerBall = document.getElementById("soccerBall");
//const cheer = document.getElementById("cheer");
//soccerBall.addEventListener("mouseenter", () => {
 // soccerBall.classList.add("scored");
  //cheer.currentTime = 0;
  //cheer.play();
  //setTimeout(() => soccerBall.classList.remove("scored"), 1500);
});

// 🎮 Pokémon cries
const pokemonSound = document.getElementById("pokemonSound");
document.getElementById("pikachu").addEventListener("mouseenter", () => {
  pokemonSound.src = "https://play.pokemonshowdown.com/audio/cries/pikachu.mp3";
  pokemonSound.play();
});
document.getElementById("charmander").addEventListener("mouseenter", () => {
  pokemonSound.src = "https://play.pokemonshowdown.com/audio/cries/charmander.mp3";
  pokemonSound.play();
});

// 🥁 Tabla on actor hover
const tabla = document.getElementById("tabla");
document.getElementById("srk").addEventListener("mouseenter", () => {
  tabla.currentTime = 0;
  tabla.play();
});

// 🎆 Fireworks on birthday text hover
document.getElementById("birthdayText").addEventListener("mouseenter", () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => confetti(), i * 200);
  }
});

// 🎁 Gift box
const giftBox = document.getElementById("giftBox");
giftBox.addEventListener("click", () => {
  giftBox.classList.add("opened");
  setTimeout(() => {
    alert("🎉 Surprise! We love you Zakir! 🎉");
  }, 1000);
});

// 🧁 Hidden cupcake Easter egg
const cupcake = document.getElementById("cupcake");
setTimeout(() => cupcake.classList.remove("hidden"), 5000);
cupcake.addEventListener("click", () => {
  alert("🧁 You found the hidden cupcake! Happy Birthday Zakir!");
});

// 🏎️ Car racing
function raceCars() {
  const ferrari = document.getElementById("ferrari");
  const mclaren = document.getElementById("mclaren");
  ferrari.style.transform = "translateX(1200px)";
  mclaren.style.transform = "translateX(1200px)";
  setTimeout(() => {
    ferrari.style.transform = "translateX(0)";
    mclaren.style.transform = "translateX(0)";
  }, 4000);
}
setInterval(raceCars, 20000);

// 🎊 Confetti
function confetti() {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.width = "10px";
  div.style.height = "10px";
  div.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
  div.style.left = Math.random() * window.innerWidth + "px";
  div.style.top = "-10px";
  div.style.opacity = 1;
  document.body.appendChild(div);

  let y = -10;
  const fall = setInterval(() => {
    y += 5;
    div.style.top = y + "px";
    div.style.opacity -= 0.01;
    if (y > window.innerHeight) {
      clearInterval(fall);
      div.remove();
    }
  }, 30);
}
document.body.addEventListener("click", confetti);

// ⏳ Countdown timer
function updateCountdown() {
  const now = new Date();
  let nextBirthday = new Date(now.getFullYear(), 8, 29); // Sept = 8 (0-indexed)
  if (now > nextBirthday) nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  const diff = nextBirthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent =
    `🎂 Next Birthday in: ${days}d ${hours}h ${mins}m ${secs}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();
