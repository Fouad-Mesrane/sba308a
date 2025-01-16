import { spellsEl,heroWrapper,selectEl, booksEl, charEl } from "./elements.js";
import { fetchData } from "./api.js";
export default async function renderSpells() {
    try {
      const selectValue = selectEl.value.toLowerCase();
  
      if (selectValue === "spells") {
        // fetching the spells from api
        const spells = await fetchData(selectValue);
        spells.map((char) => {

            if(spellsEl.classList.contains("hidden")) {
                spellsEl.classList.remove("hidden")
            }
          //creating elements to render the spells
          const div = document.createElement("div");
            
          div.innerHTML = `<div class="max-w-sm border border-orange-300 rounded-lg p-6 mt-6 shadow-lg bg-slate-800 mb-4 text-center">
          <h2 class="text-xl font-bold mb-2 text-orange-300">Accio</h2>
          <p class="text-base text-gray-300">Use: Summoning charm</p>
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