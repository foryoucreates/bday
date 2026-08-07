const welcomeScreen = document.getElementById("welcome-screen");
const surpriseScreen = document.getElementById("surprise-screen");
const loveVault = document.getElementById("love-vault");

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

const letterGift = document.getElementById("letter-gift");
const memoriesGift = document.getElementById("memories-gift");
const secretGift = document.getElementById("secret-gift");

const letterModal = document.getElementById("letter-modal");
const memoriesModal = document.getElementById("memories-modal");
const secretModal = document.getElementById("secret-modal");
const folderLetterModal = document.getElementById("folder-letter-modal");

const passcodeInput = document.getElementById("passcode-input");
const unlockBtn = document.getElementById("unlock-btn");
const errorMessage = document.getElementById("error-message");

const backgroundMusic = document.getElementById("background-music");
const musicBtn = document.getElementById("music-btn");

const folderTitle = document.getElementById("folder-title");
const folderLetterContent = document.getElementById("folder-letter-content");
const backToGifts = document.getElementById("back-to-gifts");

/* Change these letters to your own messages */
const loveLetters = {
  "why-love-you": {
    title: "Why I Love You ❤️",
    text: `
      <p>I love you because you make ordinary days feel special.</p>
      <p>I love your smile, your heart, your little habits, and the way you make my world brighter without even trying.</p>
      <p>You are not just my girlfriend. You are my safe place, my happiness, and one of the best things that ever happened to me.</p>
      <p class="letter-signature">I love you endlessly. ❤️</p>
    `
  },

  "first-memories": {
    title: "Our First Memories ✨",
    text: `
      <p>Every memory with you is precious to me, especially the first ones.</p>
      <p>I still remember the feeling of getting to know you, talking with you, and realizing that you were becoming someone very special in my heart.</p>
      <p>I hope we keep making beautiful memories together for a very long time.</p>
      <p class="letter-signature">Us, from the beginning until forever. 💕</p>
    `
  },

  "miss-me": {
    title: "Open When You Miss Me 🤍",
    text: `
      <p>If you are missing me right now, close your eyes for a second and remember this:</p>
      <p>No matter where we are, you are always in my thoughts. I am always rooting for you, caring for you, and loving you.</p>
      <p>Think of one of our happy moments, smile a little, and know that I cannot wait to create another one with you.</p>
      <p class="letter-signature">I am always with you in heart. ❤️</p>
    `
  },

  "little-things": {
    title: "Little Things I Adore 🌷",
    text: `
      <p>I adore the little things about you that probably seem normal to everyone else.</p>
      <p>Your laugh. Your voice. The way you react when you are happy. The way you care. The way you make me smile without knowing it.</p>
      <p>All those small things are the reasons you feel so big in my heart.</p>
      <p class="letter-signature">You are my favorite everything. 💗</p>
    `
  },

  "future": {
    title: "Our Future 🌙",
    text: `
      <p>I hope our future has more laughter, more adventures, more late-night talks, and more beautiful moments together.</p>
      <p>I want to keep learning you, supporting you, and loving you through every chapter of your life.</p>
      <p>Whatever comes next, I hope I get to hold your hand through it.</p>
      <p class="letter-signature">My favorite future is one with you. ❤️</p>
    `
  },

  "forever": {
    title: "Forever Us 💞",
    text: `
      <p>This is just a small birthday surprise, but my love for you is much bigger than this website could ever show.</p>
      <p>You deserve love, peace, joy, and every beautiful thing life can offer. I hope today reminds you just how special you are.</p>
      <p>Happy birthday, my love. Thank you for being my person.</p>
      <p class="letter-signature">Forever yours, Kebede ❤️</p>
    `
  }
};

/* Open the birthday surprise */
yesBtn.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  surpriseScreen.classList.remove("hidden");

  backgroundMusic.volume = 0.35;
  backgroundMusic.play().catch(() => {
    console.log("Music will play after another click.");
  });
});

/* Playful No button */
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
  const x = Math.floor(Math.random() * 180) - 90;
  const y = Math.floor(Math.random() * 100) - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  noBtn.textContent = "Are you sure? 😌";
}

/* Open each gift */
letterGift.addEventListener("click", () => {
  openModal(letterModal);
});

memoriesGift.addEventListener("click", () => {
  openModal(memoriesModal);
});

secretGift.addEventListener("click", () => {
  openModal(secretModal);
  passcodeInput.focus();
});

/* Close modals */
document.querySelectorAll(".close-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.close;
    document.getElementById(modalId).classList.add("hidden");
  });
});

/* Close when user clicks outside the popup */
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
});

function openModal(modal) {
  modal.classList.remove("hidden");
}

/* Music player */
musicBtn.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicBtn.textContent = "❚❚";
    musicBtn.setAttribute("aria-label", "Pause our song");
  } else {
    backgroundMusic.pause();
    musicBtn.textContent = "▶";
    musicBtn.setAttribute("aria-label", "Play our song");
  }
});

backgroundMusic.addEventListener("ended", () => {
  musicBtn.textContent = "▶";
});

/* Unlock secret vault: password is 143 */
unlockBtn.addEventListener("click", unlockVault);

passcodeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    unlockVault();
  }
});

function unlockVault() {
  const code = passcodeInput.value.trim();

  if (code === "143") {
    errorMessage.style.color = "#2d9c67";
    errorMessage.textContent = "Correct, my love! Unlocking your surprise... 💕";

    setTimeout(() => {
      secretModal.classList.add("hidden");
      surpriseScreen.classList.add("hidden");
      loveVault.classList.remove("hidden");

      passcodeInput.value = "";
      errorMessage.textContent = "";
    }, 900);
  } else {
    errorMessage.style.color = "#d92b55";
    errorMessage.textContent =
      "That is not it, baby. it's how u write i love you in number 💕";

    passcodeInput.value = "";
    passcodeInput.focus();
  }
}

/* Open love folders */
document.querySelectorAll(".folder").forEach((folder) => {
  folder.addEventListener("click", () => {
    const letterKey = folder.dataset.letter;
    const selectedLetter = loveLetters[letterKey];

    folderTitle.textContent = selectedLetter.title;
    folderLetterContent.innerHTML = selectedLetter.text;

    openModal(folderLetterModal);
  });
});

/* Return to the three gifts */
backToGifts.addEventListener("click", () => {
  loveVault.classList.add("hidden");
  surpriseScreen.classList.remove("hidden");
});

/* Floating heart background */
function createHeart() {
  const heart = document.createElement("span");

  heart.classList.add("heart");
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${16 + Math.random() * 24}px`;
  heart.style.animationDuration = `${5 + Math.random() * 6}s`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 11000);
}

setInterval(createHeart, 700);