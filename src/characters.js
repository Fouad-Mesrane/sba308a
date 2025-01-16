import { fetchData } from "./api.js";
import { selectEl, charEl, heroWrapper, booksEl, spellsEl, charLink } from "./elements.js";

export default async function renderCharcters() {
  try {
    const selectValue = selectEl.value.toLowerCase();
    const charValue = charLink.textContent.trim().toLowerCase()
    if (selectValue === "characters" || charValue === "characters") {
      // fetching the characters from api
      const characters = await fetchData("characters");
      characters.map((char) => {
        //creating elements to render the characters
        const div = document.createElement("div");

        if(charEl.classList.contains("hidden")) {
            charEl.classList.remove("hidden")
        }

        div.innerHTML = `<div class="w-64 h-max rounded-lg overflow-hidden shadow-lg bg-slate-800">
      <img class="w-full h-56 " src=${char.image} alt=${char.fullName}>
      <div class="px-6 py-6">
        <div class="font-bold text-orange-300 text-lg mb-2">${char.fullName}</div>
        <p class="text-gray-300 text-sm">
          <strong>Nickname:</strong> ${char.nickname}<br>
          <strong>Hogwarts House:</strong> ${char.hogwartsHouse}<br>
          <strong>Interpreted By:</strong> ${char.interpretedBy}<br>
          <strong>Birthdate:</strong> ${char.birthdate}
        </p>
      </div>
      
    </div>`;

        charEl.appendChild(div);
      });

      heroWrapper.classList.add("hidden");
      booksEl.classList.add("hidden");
      spellsEl.classList.add("hidden");
    }
  } catch (error) {
    console.error(`Error fetching data`, error);
  }
}
