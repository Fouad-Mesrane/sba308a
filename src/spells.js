import { spellsEl,heroWrapper,selectEl, booksEl, charEl } from "./elements.js";
import { fetchData } from "./api.js";

export const spellsLink = document.getElementById('spells-link')
export default async function renderSpells() {
    try {
      const selectValue = selectEl.value.toLowerCase() 
      const spellsValue =  spellsLink.textContent.toLowerCase();
  
      if (selectValue === "spells" || spellsValue === "spells") {
        // fetching the spells from api
        const spells = await fetchData("spells");
        spells.map((spell) => {

            if(spellsEl.classList.contains("hidden")) {
                spellsEl.classList.remove("hidden")
            }
          //creating elements to render the spells
          const div = document.createElement("div");
            
          div.innerHTML = `<div class="flex flex-col items-center justify-center w-64 h-56 border border-orange-300 rounded-lg p-6 mt-6 shadow-lg bg-slate-800 mb-4 text-center">
          <h2 class="text-xl font-bold mb-2 text-orange-300">${spell.spell}</h2>
          <p class="text-base  text-gray-300">Use: ${spell.use}</p>
        </div>`;
  
          spellsEl.appendChild(div);
        });
  
        heroWrapper.classList.add("hidden");
        booksEl.classList.add('hidden')
        charEl.classList.add('hidden')
      }
    } catch (error) {
      console.error(`Error fetching data`, error);
    }
  }