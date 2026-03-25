const starticon = document.querySelector("#starticon");
const startMenu = document.querySelector(".startMenu");
const searchBar = document.querySelector("#searchBar");
const starthicon = document.querySelector("#starticon");
const appsImg = document.querySelector(".apps img");
const menuToggole = document.querySelector("#menu-toggle");
const viewToggole = document.querySelector("#view-toggle");
const extraApps = document.querySelector(".extraApps");
const browsers = document.querySelector("#browsersSeeAll");
const developers = document.querySelector("#developerSeeAll");
const socials = document.querySelector("#socialSeeAll");
const box1 = document.querySelector(".exbrowsers");
const box2 = document.querySelector(".exdevelopers");
const box3 = document.querySelector(".exsocials");
const exits = document.querySelectorAll(".exit");
const powerOn = document.querySelector(".footer-right img");
const overlay = document.querySelector(".overlay");
const yesbtn = document.querySelector(".yes");
const nobtn = document.querySelector(".no");

// Batery bar
if (navigator.getBattery) {
  navigator.getBattery().then(function (battery) {
    const level = document.getElementById("level");
    const percentText = document.getElementById("percent");
    const chargingIcon = document.getElementById("charging");

    function updateBattery() {
      let percent = battery.level * 100;

      level.style.width = percent + "%";

      if (percent < 20) {
        level.style.background = "red";
      } else if (percent < 50) {
        level.style.background = "yellow";
      } else {
        level.style.background = "orange";
      }

      if (percent === 100) {
        percentText.textContent = `Battery status: Fully Charged ${percent}%`;
      }

      if (battery.charging) {
        chargingIcon.style.display = "block";
        level.style.background = "green";
        percentText.textContent = `Battery status: ${percent}% (Plugged in)`;
      } else {
        chargingIcon.style.display = "none";
        percentText.textContent = `Battery status: ${percent}% remaining`;
      }
    }

    updateBattery();

    battery.addEventListener("levelchange", updateBattery);
    battery.addEventListener("chargingchange", updateBattery);
  });
}

//time and date
function updateTime() {
  const dayElement = document.getElementById("day");
  const timeElement = document.getElementById("time");

  const date = new Date();
  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Array of day names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get current month and day
  const monthName = months[date.getMonth()];
  const dayName = days[date.getDay()];
  const dateNum = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  dayElement.innerText = `${dayName}, ${monthName} ${dateNum}, ${year}`;
  timeElement.innerText = `${hour}:${minute}:${second}`;
}

setInterval(updateTime, 1000);

setTimeout(() => {
  const bgVideo = document.getElementById("bg-video");
  const bgImage = document.querySelector(".bg-image");

  if (bgVideo) {
    bgVideo.style.display = "none";
  }
  if (bgImage) {
    bgImage.style.display = "block";
  }
}, 5000);

starticon.addEventListener("click", () => {
  if (startMenu.style.bottom === "9vh") {
    startMenu.style.bottom = "-87vh";
    appsImg.style.padding = "0";
    starthicon.style.backgroundColor = "white";
    appsImg.style.borderRadius = "0";
  } else {
    startMenu.style.bottom = "9vh";
    appsImg.style.padding = "var(--space-xs)";
    starthicon.style.backgroundColor = "rgba(195, 195, 195, 0.737)";
    appsImg.style.borderRadius = "5px";
  }
});

menuToggole.addEventListener("click", () => {
  if (menuToggole.innerHTML.includes("Show Less")) {
    menuToggole.innerHTML =
      '<p id="menu-toggle">Show All <i class="fa-solid fa-angle-down"></i></p>';
    extraApps.style.display = "none";
    return;
  } else {
    menuToggole.innerHTML =
      '<p id="menu-toggle">Show Less <i class="fa-solid fa-angle-up"></i></p>';
    extraApps.style.display = "block";
  }
});

browsers.addEventListener("click", () => {
  const isOpen = browsers.innerText === "Exit";

  if (!isOpen) {
    // Show box1
    box1.style.display = "flex";
    requestAnimationFrame(() => {
      box1.classList.add("active"); // scale 0.1 → 1 at fixed top/left
    });
    browsers.innerText = "Exit";
  } else {
    // Hide box1
    box1.classList.remove("active");
    setTimeout(() => {
      box1.style.display = "none";
      browsers.innerText = "See All";
    }, 300);
  }
});

developers.addEventListener("click", () => {
  const isOpen = developers.innerText === "Exit";

  if (!isOpen) {
    // Show box1
    box2.style.display = "flex";
    requestAnimationFrame(() => {
      box2.classList.add("active"); // scale 0.1 → 1 at fixed top/left
    });
    developers.innerText = "Exit";
  } else {
    // Hide box1
    box2.classList.remove("active");
    setTimeout(() => {
      box2.style.display = "none";
      developers.innerText = "See All";
    }, 300);
  }
});

socials.addEventListener("click", () => {
  const isOpen = socials.innerText === "Exit";

  if (!isOpen) {
    // Show box1
    box3.style.display = "flex";
    requestAnimationFrame(() => {
      box3.classList.add("active"); // scale 0.1 → 1 at fixed top/left
    });
    socials.innerText = "Exit";
  } else {
    // Hide box1
    box3.classList.remove("active");
    setTimeout(() => {
      box3.style.display = "none";
      socials.innerText = "See All";
    }, 300);
  }
});

exits.forEach((exit) => {
  exit.addEventListener("click", () => {
    // Check if box1 is open
    if (box1.classList.contains("active")) {
      box1.classList.remove("active");
      setTimeout(() => {
        box1.style.display = "none";
        browsers.innerText = "See All";
      }, 300);
    }
    // Check if box2 is open
    else if (box2.classList.contains("active")) {
      box2.classList.remove("active");
      setTimeout(() => {
        box2.style.display = "none";
        developers.innerText = "See All";
      }, 300);
    }
    // Check if box3 is open
    else if (box3.classList.contains("active")) {
      box3.classList.remove("active");
      setTimeout(() => {
        box3.style.display = "none";
        socials.innerText = "See All";
      }, 300);
    }
  });
});

powerOn.addEventListener("click", () => {
  overlay.style.display = "flex";
  yesbtn.addEventListener("click", () => {
    window.location.href = "shutDown.html";
  })
  
  nobtn.addEventListener("click", () => {
    overlay.style.display = "none";
  })
})
