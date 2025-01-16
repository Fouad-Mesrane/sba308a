
import renderBooks from "./books.js";
import renderCharcters from "./characters.js";
import renderSpells from "./spells.js";
import { searchBtn, homeBtn,heroWrapper,selectEl,booksEl,charEl,spellsEl } from "./elements.js";

// rendering 
searchBtn.addEventListener("click", () => {
    try {
      const selectedOption = selectEl.value; // Assuming there's a dropdown to choose between books and characters
      if (selectedOption === 'books') {
        renderBooks();
      } else if (selectedOption === 'characters') {
        renderCharcters();
      } else if (selectedOption === 'spells') {
        renderSpells()
      }
    } catch (error) {
      console.error("Error handling search action:", error);
    }
  });
  


// home page reset
function homePage() {
  heroWrapper.classList.remove("hidden");
  selectEl.value = selectEl[0].textContent;
  booksEl.textContent = "";
  charEl.textContent = "";
  spellsEl.textContent = "";
}

homeBtn.addEventListener("click", homePage);
