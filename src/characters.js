import { fetchData } from "./api.js";
import { selectEl, charEl, heroWrapper } from "./elements.js";

export default async function renderCharcters() {
  try {
    const selectValue = selectEl.value.toLowerCase();

    if (selectValue === "characters") {
      // fetching the characters from api
      const characters = await fetchData(selectValue);
      characters.map((char) => {
        //creating elements to render the characters
        const div = document.createElement("div");

        div.innerHTML = `<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-slate-800">
      <img class="w-full h-64" src=${char.image} alt=${char.fullName}>
      <div class="px-6 py-4">
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
    }
  } catch (error) {
    console.error(`Error fetching data`, error);
  }
}
