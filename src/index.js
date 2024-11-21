console.log("starting index.js")
import "./assets/styles/index.css"

function generateHeader() {
  function navHelper() {
    const nav = document.createElement("nav");

    nav.appendChild(generateNavButton("Home"));
    nav.appendChild(generateNavButton("Menu"));
    nav.appendChild(generateNavButton("About"));

    return nav;
  }

  function generateNavButton(pageName) {
    const button = document.createElement("button");
    button.textContent = pageName;

    button.addEventListener("click", (e) => {
      e.preventDefault();
      loadPageContent(pageName); 
    });

    return button;
  }

  function loadPageContent(pageName) {
    const contentArea = document.querySelector(".content");
    contentArea.innerHTML = "";

    let pageContent;
    switch (pageName) {
      case "Home":
        pageContent = generateHomeContent();
        break;
      case "Menu":
        pageContent = generateMenuContent();
        break;
      case "About":
        pageContent = generateAboutContent();
        break;
      default:
        pageContent = generateHomeContent();
        break;
    }
    contentArea.appendChild(pageContent);
  }

  const header = document.createElement("header");
  document.body.appendChild(header);

  const nav = navHelper();
  header.appendChild(nav);
}

function generateHomeContent() {
  const content = document.createElement("div");
  content.className = "content";

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to the Felyne Kitchen!";
  content.appendChild(heading);
  
  const description = document.createElement("p");
  description.textContent = "Where hearty dishes and purrfect flavors come together, crafted by the legendary Felyne culinary master.";
  content.appendChild(description);

  const image = document.createElement("img");
  image.src = require('./assets/images/Monster-Hunter-World-food-in-real-life.png');
  image.alt = "Restaurant interior";
  content.appendChild(image);

  return content;
}

function generateMenuContent() {
  const content = document.createElement("div");
  content.className = "content";

  const image = document.createElement("img");
  image.src = require('./assets/images/monster_hunter_world___food_icon_by_chansui_dfvotob-fullview.jpg');
  image.alt = "Menu items";
  content.appendChild(image);

  return content;
}

function generateAboutContent() {
  const content = document.createElement("div");
  content.className = "content";

  const heading = document.createElement("h2");
  heading.textContent = "About the Felyne Kitchen";
  content.appendChild(heading);

  const description = document.createElement("p");
  description.textContent = "Felyne Kitchen brings the best of the Monster Hunter world to your table, featuring iconic dishes created by the skilled chefs of the Felyne tribe!";
  content.appendChild(description);

  return content;
}

generateHeader();
const content = document.createElement("div");
content.className = "content";
content.appendChild(generateHomeContent());
document.body.appendChild(content);


