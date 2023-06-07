const searchButton = document.querySelector("#search");
const searchLabel = document.querySelector("#search-label");

const frameOpen = document.querySelector(".frame-open");
const art = document.querySelector("#art");

searchButton.addEventListener("click", () => {
  // console.log("Hello World!");
  frameOpen.classList.toggle("frame-close");
  art.classList.toggle("art");
  if (searchLabel.innerText == "Search") {
    const frameOpen = document.querySelector(".frame-open");
    searchLabel.innerText = "Close";
    console.log("Close");
  } else {
    searchLabel.innerText = "Search";
    console.log("Search");
  }
});
