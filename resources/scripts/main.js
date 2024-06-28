document.addEventListener("DOMContentLoaded", () => {
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, options);

  document
    .querySelectorAll(".feature, .pricing-card, .shop-item")
    .forEach((item) => {
      observer.observe(item);
    });
});

/* Scroll to top */
document.addEventListener("DOMContentLoaded", function () {
  var buttonBack = document.querySelector(".button-back");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      // Adjust this value as needed
      buttonBack.classList.add("visible");
    } else {
      buttonBack.classList.remove("visible");
    }
  });
});

// Slide
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const container = document.querySelector(".features-container");

  let currentIndex = 0;

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
  });

  function updateSlider() {
    const newPosition = currentIndex * -1 * (16 + 20); // Calculate new position based on card width and margin
    container.style.transform = `translateX(${newPosition}em)`; // Update container position
  }
});

// Mobile menu
const hamburger = document.querySelector(".navbar-toggle");

hamburger.addEventListener("click", function () {
  const navMenu = document.querySelector(".navbar-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".navbar-menu a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      /* return hamburger to default */
      hamburger.querySelector("input").checked = false;
    });
  });
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Valorant Companion App 💕",
  "Made with ❤️ by Faheem Saleem",
  "From Players to Players 🎮",
  "A lot of features coming 🔜",
  "Click the button below 👇",
  "Stay tuned for more updates 😍",
];
const typingDelay = 60;
const erasingDelay = 40;
const newTextDelay = 1200;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

/* Year */
const year = new Date().getFullYear();
document.getElementById("year-footer").innerHTML = year;

//. Notification System:
window.onload = function () {
  Swal.fire({
    icon: "info",
    titleText: "Website is loading...",
    html: '<center><span style="font-weight: 400">It usually takes a few seconds. <b>Please be patient.</b></span></center>',
    grow: "fullscreen",
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then(() => {
    Swal.fire({
      icon: "success",
      titleText: "Website loaded successfully 🥳",
      html: '<center>Thank you for visiting our website, it makes us happy 😊<br><i style="font-weight: 200">This message will disappear in 3 seconds</i> </center>',
      timer: 3000,
      timerProgressBar: false,
      confirmButtonText: "Awesome!",
      showConfirmButton: true,
    });
  });
};

/* Read more feature */
function readMore(titleText, bodyText, img) {
  Swal.fire({
    titleText: titleText,
    html: bodyText,
    grow: "fullscreen",
    showConfirmButton: false,
    imageUrl: img,
    showCloseButton: true,
  });
}

const Feature1 = document.getElementById("read-feature-1");

Feature1.addEventListener("click", () => {
  readMore(
    "",
    `
  <center>
  Log in with your Riot Games account to securely access your profile and enjoy a seamless connection to your games, progress, and community features offered by Riot Games. This login process guarantees both security and convenience, ensuring that you can effortlessly manage your gaming experience with peace of mind.
  </center>`,
    "./resources/images/feature-1.png"
  );
});

const Feature2 = document.getElementById("read-feature-2");

Feature2.addEventListener("click", () => {
  readMore(
    "",
    `
    <p style="text-align: left; font-weight: 400">Connect with gamers worldwide in real-time using our built-in chat system. Engage with fellow players, share strategies, seek advice, and socialize seamlessly within our integrated chat platform. Whether you're coordinating tactics for your next match or simply connecting with like-minded gamers, our chat system fosters a vibrant community where you can expand your network and enhance your gaming experience.</p>
    <center>Live preview of the application built-in chat function</center>
    <div class="chat-window">
    <div class="top-section">
        <div class="username-selected">English</div>
        <div class="username">Portugese</div>
        <div class="username">Spanish</div>
        <div class="username">Polish</div>
        <div class="username">Turkish</div>
        <div class="username">Indon</div>
    </div>
    <div class="chat-history">
        <div class="message received-message">
        <div class="avatar-container">
            <img src="http://statics.lol/resources/images/ChronoVoid_Card_Small.webp" alt="Avatar" class="avatar">
            <span class="online-icon"></span>
            </div>
            <div class="message-content">
            <span class="user-name"><img src="http://statics.lol/resources/images/Iron_3_Rank.webp" alt="Rank">DUCK#goat (EU)</span>
            <span class="text">This is a Demo message for demonstration</span>
            <span class="timestamp">14:30</span>
            </div>
        </div>
        <div class="message received-message">
        <div class="avatar-container">
            <img src="http://statics.lol/resources/images/Art_of_Greatness_The_Flame_Card_Small.webp" alt="Avatar" class="avatar">
            <span class="online-icon"></span>
            </div>
            <div class="message-content">
                <span class="user-name"><img src="http://statics.lol/resources/images/Platinum_3_Rank.webp" alt="Rank">xSaIIaN#goat (EU)</span>
                <span class="text">This is a demo response for demonstration</span>
                <span class="timestamp">14:32</span>
            </div>
        </div>
        <div class="message received-message">
        <div class="avatar-container">
            <img src="http://statics.lol/resources/images/ChronoVoid_Card_Small.webp" alt="Avatar" class="avatar">
            <span class="online-icon"></span>
            </div>
            <div class="message-content">
            <span class="user-name"><img src="http://statics.lol/resources/images/Iron_3_Rank.webp" alt="Rank">DUCK#goat (EU)</span>
            <span class="text">This is a Demo message for demonstration</span>
            <span class="timestamp">14:34</span>
            </div>
        </div>
        <div class="message received-message">
        <div class="avatar-container">
            <img src="http://statics.lol/resources/images/Art_of_Greatness_The_Flame_Card_Small.webp" alt="Avatar" class="avatar">
            <span class="online-icon"></span>
            </div>
            <div class="message-content">
                <span class="user-name"><img src="http://statics.lol/resources/images/Platinum_3_Rank.webp" alt="Rank">xSaIIaN#goat (EU)</span>
                <span class="text">This is a demo response for demonstration</span>
                <span class="timestamp">14:36</span>
            </div>
        </div>
        <div class="message received-message">
        <div class="avatar-container">
            <img src="http://statics.lol/resources/images/ChronoVoid_Card_Small.webp" alt="Avatar" class="avatar">
            <span class="online-icon"></span>
            </div>
            <div class="message-content">
            <span class="user-name"><img src="http://statics.lol/resources/images/Iron_3_Rank.webp" alt="Rank">DUCK#goat (EU)</span>
            <span class="text">This is a Demo message for demonstration</span>
            <span class="timestamp">14:37</span>
            </div>
        </div>
        <div class="message received-message">
        <div class="avatar-container">
            <img src="http://statics.lol/resources/images/Art_of_Greatness_The_Flame_Card_Small.webp" alt="Avatar" class="avatar">
            <span class="online-icon"></span>
            </div>
            <div class="message-content">
                <span class="user-name"><img src="http://statics.lol/resources/images/Platinum_3_Rank.webp" alt="Rank">xSaIIaN#goat (EU)</span>
                <span class="text">This is a demo response for demonstration</span>
                <span class="timestamp">14:43</span>
            </div>
        </div>
        <div class="message received-message">
        <div class="avatar-container">
            <img src="http://statics.lol/resources/images/ChronoVoid_Card_Small.webp" alt="Avatar" class="avatar">
            <span class="online-icon"></span>
            </div>
            <div class="message-content">
            <span class="user-name"><img src="http://statics.lol/resources/images/Iron_3_Rank.webp" alt="Rank">DUCK#goat (EU)</span>
            <span class="text">This is a Demo message for demonstration</span>
            <span class="timestamp">14:45</span>
            </div>
        </div>
    </div>
</div>

`,
    "./resources/images/feature-2.png"
  );
});

/* <div class="input-section">
        <label for="message-input" class="send-message-label">Send a message</label>
        <input type="text" id="message-input" class="input-field">
        <div class="character-limit">0/500</div>
        <button class="send-button"><i class="fa-regular fa-paper-plane"></i></button>
    </div> */

const Feature3 = document.getElementById("read-feature-3");

Feature3.addEventListener("click", () => {
  readMore(
    "",
    `
  <center>
  Access up to 100 past matches securely stored in our system to gain valuable insights into your gameplay journey. With the ability to quickly retrieve and review your gameplay history, you can track your progress over time and analyze your performance across various game modes effortlessly.
  <br><br>
  Whether you're interested in reviewing your performance in Deathmatch, Spike Rush, or Competitive mode, our platform provides easy access to detailed match data. From kill counts to objective captures, each match record offers a comprehensive overview of your strengths and areas for improvement.
  <br><br>
  Harness the power of your gameplay history to refine your skills and enhance your strategic approach. Identify patterns in your performance, understand which game modes suit your playstyle best, and pinpoint specific areas where you can excel. With our intuitive interface, staying informed about your progress has never been easier.
  <br><br>
  Empower yourself with the insights needed to elevate your gameplay in Valorant. Explore and analyze your past matches to fine-tune your strategy, adapt to different game scenarios, and achieve peak performance across every match you play.
  </center>
  `,
    "./resources/images/feature-3.png"
  );
});

const Feature4 = document.getElementById("read-feature-4");

Feature4.addEventListener("click", () => {
  readMore(
    "",
    `
  <center>
  Monitor your performance across various game modes effortlessly with our comprehensive metrics tracking feature. Gain deep insights into your gameplay statistics, including kill-death ratios, accuracy percentages, objective captures, and more. Whether you excel in Deathmatch, Spike Rush, or Competitive mode, our tool provides detailed analytics to help you understand your strengths and pinpoint areas for improvement.
<br><br>
  Identifying strengths and weaknesses becomes intuitive as you delve into our detailed metrics. Visualize your performance trends over time, analyze which aspects of your gameplay contribute most to success, and focus your efforts on refining specific skills. This data-driven approach empowers you to evolve as a player and consistently enhance your gameplay strategy.
  <br><br>
  Enhance your strategic planning and team coordination by leveraging actionable insights from our metrics. Plan rotations, coordinate pushes, and adjust tactics based on real-time performance data. Whether you're leading a team or playing as part of one, our tool equips you with the knowledge to make informed decisions that lead to victory.
  <br><br>
  Transform your Valorant experience with our powerful metrics tracking feature. Elevate your gameplay by understanding your strengths, addressing weaknesses, and optimizing your strategic approach. With detailed performance analytics at your disposal, achieving peak performance has never been more attainable.
  </center>
  `,
    "./resources/images/feature-4.png"
  );
});

const Feature5 = document.getElementById("read-feature-5");

Feature5.addEventListener("click", () => {
  readMore(
    "",
    `
  <center>
  Visualize player positions and spike plants in real-time with our cutting-edge tactical overlay tool. Designed to elevate your gameplay to the next level, this feature allows you to see the exact positions of both your teammates and opponents on the map as the action unfolds. Whether you're planning an aggressive push or coordinating a defensive stance, having real-time visibility of player movements empowers you to make informed decisions swiftly.
<br><br>
  In addition to player positions, our tool tracks spike plants dynamically, giving you crucial information to strategize effectively. Monitor when and where the spike is planted or defused, ensuring your team can react promptly and decisively. This real-time insight into objective control is invaluable for mastering game flow and adapting your tactics on the fly.
  <br><br>
  Enhance your strategic planning and team coordination with comprehensive visual data at your fingertips. Easily identify patterns in gameplay, strengths to capitalize on, and areas for improvement to refine your team's performance over time. Our intuitive interface makes it effortless to analyze match dynamics and optimize your gameplay strategy, empowering you to lead your team to victory.
  <br><br>
  Take your Valorant experience to new heights with our advanced tactical overlay tool. Maximize your strategic advantage and elevate your gameplay with enhanced visibility and insightful analysis, all in real-time. Whether you're a seasoned pro or just starting out, our tool is your key to mastering the art of tactical gameplay in Valorant.
  </center>
  `,
    "./resources/images/feature-5.png"
  );
});

const Feature6 = document.getElementById("read-feature-6");

Feature6.addEventListener("click", () => {
  readMore(
    "",
    `
    <center>
  Manage multiple Valorant accounts effortlessly with our advanced account management tool. Designed for avid players who juggle several accounts, this tool lets you switch between your Valorant profiles seamlessly, eliminating the need to constantly log in and out. With just a few clicks, you can access any of your accounts, ensuring a smooth and uninterrupted gaming experience.
<br><br>
Not only does our tool streamline account switching, but it also helps you keep track of your progress across all your Valorant accounts. Whether you're monitoring your rank, checking your match history, or managing your in-game settings, everything is conveniently organized in one place. Say goodbye to the hassle of remembering multiple passwords and the frustration of logging in and out repeatedly. Our user-friendly interface makes it easy to stay on top of your game, no matter how many accounts you have.
<br><br>
Experience the convenience of managing your Valorant accounts like never before. Focus on improving your skills and climbing the ranks without the administrative burden. Let our tool handle the account management so you can concentrate on what matters most—playing the game you love.
</center>
`,
    "./resources/images/feature-6.png"
  );
});

(async function () {
  const apiUrl =
    "https://api.github.com/repos/faheem-s27/Statics-Public/releases";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const releases = await response.json();

    // Assuming releases are sorted by latest first (GitHub API default behavior)
    const latestRelease = releases[0]; // Get the latest release
    const apkAsset = latestRelease.assets.find((asset) =>
      asset.name.endsWith(".apk")
    );
    if (!apkAsset) {
      throw new Error("No APK file found in the latest release");
    }

    const latestApkLink = apkAsset.browser_download_url;

    // Update the href attribute of the button's anchor tag
    const downloadButton = document.querySelector(".button a");
    downloadButton.href = latestApkLink;

    // console.log(`Latest APK link: ${latestApkLink}`);
  } catch (error) {
    console.error("Failed to fetch or parse releases:", error);
  }
})();
