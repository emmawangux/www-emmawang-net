//cursor
document.addEventListener("DOMContentLoaded", () => {
  const cursorEffect = document.querySelector(".custom-cursor-effect");

  document.addEventListener("mousemove", (e) => {
    requestAnimationFrame(() => {
      cursorEffect.style.left = `${e.pageX}px`;
      cursorEffect.style.top = `${e.pageY}px`;
    });

    if (!cursorEffect.classList.contains("with-halo")) {
      setTimeout(() => {
        cursorEffect.classList.add("with-halo");
      }, 500);
    }
  });

  document.addEventListener("click", () => {
    cursorEffect.classList.add("click-effect");
    setTimeout(() => {
      cursorEffect.classList.remove("click-effect");
    }, 150);
  });
});

//Scroll effect
// Add this to your existing JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once it is visible
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll(
    ".hero-text-container-left, .hero-text-container-right, .pull-feeling"
  );

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
});

// Add this to your existing JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once it is visible
      }
    });
  }, observerOptions);

  const halfCircle = document.querySelector(".half-circle");

  if (halfCircle) {
    observer.observe(halfCircle);
  }
});

// BTN
document.addEventListener("DOMContentLoaded", () => {
  const customCursor = document.querySelector(".custom-cursor");
  const learnMoreLinks = document.querySelectorAll(".btn-learn-more");

  learnMoreLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      customCursor.style.display = "block";
      customCursor.classList.add("show");
      customCursor.style.animation = "pop-in 0.3s forwards";
    });

    link.addEventListener("mousemove", (e) => {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
    });

    link.addEventListener("mouseleave", () => {
      customCursor.style.display = "none";
      customCursor.classList.remove("show");
    });
  });
});

// Pics Zoom-in & Zoom-out
document.addEventListener("DOMContentLoaded", function () {
  // Create lightbox overlay
  const lightboxOverlay = document.createElement("div");
  lightboxOverlay.classList.add("lightbox-overlay");
  document.body.appendChild(lightboxOverlay);

  // Add an image element to the overlay
  const lightboxImage = document.createElement("img");
  lightboxOverlay.appendChild(lightboxImage);

  // Add event listeners to each zoomable image
  document.querySelectorAll(".zoomable").forEach((img) => {
    img.addEventListener("click", function () {
      lightboxImage.src = img.src;
      lightboxOverlay.style.display = "flex";
    });
  });

  // Hide the lightbox when clicked
  lightboxOverlay.addEventListener("click", function () {
    lightboxOverlay.style.display = "none";
  });
});

// Pull Animations
document.addEventListener("DOMContentLoaded", function () {
  const pullElements = document.querySelectorAll(".pull-feeling");

  const appearOptions = {
    threshold: 0.1, // Adjust the threshold value as needed
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("show");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  pullElements.forEach((element) => {
    appearOnScroll.observe(element);
  });
});

// Scrolls down smoothly
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".btn-see-projects")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default anchor click behavior
      document.querySelector("#projects").scrollIntoView({
        behavior: "smooth",
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navItems = document.getElementById("hamburger-nav-items");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const circleBackground = document.querySelector(".circle-background");
  const closeButton = document.getElementById("close-button");

  function toggleMenu() {
    navItems.classList.toggle("show");
    hamburgerIcon.classList.toggle("open");
  }

  circleBackground.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    navItems.classList.remove("show");
    hamburgerIcon.classList.remove("open");
  });

  document.addEventListener("click", (event) => {
    if (!hamburgerMenu.contains(event.target)) {
      navItems.classList.remove("show");
      hamburgerIcon.classList.remove("open");
    }
  });
});

// Update Other Works Imgs
function updateImages() {
  const ahImage = document.getElementById("ahImage");
  const jitladaImage = document.getElementById("jitladaImage");
  const iconSeriesImage = document.getElementById("iconSeriesImage");
  const crazyTankImage = document.getElementById("crazyTankImage");
  const snowflakeCatcherImage = document.getElementById(
    "snowflakeCatcherImage"
  );

  if (window.innerWidth <= 54 * 16) {
    ahImage.src = "img/otherWorks/a-h-showcase-50rem.png";
    jitladaImage.src = "img/otherWorks/jitlada-showcase-50rem.png";
    iconSeriesImage.src = "img/otherWorks/icon-series-50rem.png";
    crazyTankImage.src = "img/otherWorks/crazy-tank-game-50rem.png";
    snowflakeCatcherImage.src =
      "img/otherWorks/snowflake-catcher-game-50rem.png";
  } else {
    ahImage.src = "img/otherWorks/a-h-showcase.png";
    jitladaImage.src = "img/otherWorks/jitlada-showcase.png";
    iconSeriesImage.src = "img/otherWorks/icon-series.png";
    crazyTankImage.src = "img/otherWorks/crazy-tank-game.png";
    snowflakeCatcherImage.src = "img/otherWorks/snowflake-catcher-game.png";
  }
}

window.addEventListener("resize", updateImages);
window.addEventListener("load", updateImages);

// Change Profile Img
function updateImage() {
  const imageElement = document.getElementById("profile-image");

  if (window.innerWidth <= 38 * 16) {
    imageElement.src = "img/aboutPageImgs/profile-emma-plant.jpg";
  } else if (window.innerWidth <= 65 * 16) {
    imageElement.src = "img/aboutPageImgs/profile-emma-plant-52rem.png";
  } else {
    imageElement.src = "img/aboutPageImgs/profile-emma-plant.jpg";
  }
}

window.addEventListener("resize", updateImage);
window.addEventListener("load", updateImage);

//Right Click
// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });
