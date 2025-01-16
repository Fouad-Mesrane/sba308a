import { fetchData } from "./api.js";
import renderBooks from "./books.js";
import renderCharcters from "./characters.js";
import { searchBtn, homeBtn,heroWrapper,selectEl,booksEl,charEl,spellsEl } from "./elements.js";

// rendering the books page
try {
  searchBtn.addEventListener("click", renderBooks);
  searchBtn.addEventListener("click", renderCharcters);
 
} catch {
  console.error("error rendering books page", error);
}

// home page reset
function homePage() {
  heroWrapper.classList.remove("hidden");
  selectEl.value = selectEl[0].textContent;
  booksEl.textContent = "";
  charEl.textContent = "";
  spellsEl.textContent = "";
}

homeBtn.addEventListener("click", homePage);
