import { fetchData } from "./api.js";
import { selectEl, charEl,heroWrapper } from "./elements.js";


export default async function  renderCharcters () {
    try {
        const selectValue = selectEl.value.toLowerCase();

        if (selectValue === "characters" ) {

          // fetching the characters from api
          const characters = await fetchData(selectValue);
          characters.map((char) => {
            //creating elements to render the characters
            const div = document.createElement("div");
            const img = document.createElement("img");
           
            img.src = char.image;

            img.style.borderRadius = "50%";

            div.classList.add("text-center");
            img.style.width = "100px";
    
            div.appendChild(img);
           
            charEl.appendChild(div);
    
           
            
    
           
           
          });
    
          heroWrapper.classList.add("hidden");
        } 
      } catch (error) {
        console.error(`Error fetching data`, error);
      }
}
