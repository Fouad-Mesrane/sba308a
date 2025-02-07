import { fetchData } from "./api.js";
import { selectEl, booksEl,heroWrapper, charEl, spellsEl, booksLink } from "./elements.js";


export default async function  renderBooks () {
    try {
        const selectValue = selectEl.value.toLowerCase();
        const booksValue = booksLink.textContent.trim().toLowerCase()
        if (selectValue === "books" || booksValue === "books" ) {

          // fetching the books from api
          const books = await fetchData("books");
          books.map((book) => {
            //creating elements to render the books
            const div = document.createElement("div");
            const img = document.createElement("img");
            const btn = document.createElement("button");

            if(booksEl.classList.contains("hidden")) {
                booksEl.classList.remove("hidden")
            }
    
            btn.textContent = "details";
            btn.classList.add(
              "bg-slate-800",
              "px-4",
              "py-2",
              "mt-4",
              "rounded-md",
              "text-white"
            );
            img.src = book.cover;
            div.style.width = "300px";
            div.classList.add("text-center" , "mx-4");
            img.style.width = "100%";
    
            div.appendChild(img);
            div.appendChild(btn);
            booksEl.appendChild(div);
    
            // showing more details when clicking on details button
            const detailsContainer = document.createElement("div");
            const title = document.createElement("h2");
            const description = document.createElement("p");
            const releaseDate = document.createElement('span')
            const pages = document.createElement('span')
    
            // see details of the book
            btn.addEventListener("click", (e) => {
              if (e.target.textContent === "details") {
                img.src = "";
                if(detailsContainer.classList.contains("hidden")) {
                    detailsContainer.classList.remove("hidden")
                }
                detailsContainer.classList.add("bg-slate-800", "p-6", "rounded-lg");
                btn.textContent = "back";
                title.textContent = book.title;
                title.classList.add("text-orange-300", "font-bold", "mb-4");
                description.classList.add(
                  "text-xs",
                  "text-white",
                  "font-extralight",
                  "leading-6"
                );
                description.textContent = book.description;
                releaseDate.textContent = `Released on ${book.releaseDate} and has a total pages of ${book.pages}`
                releaseDate.classList.add("text-xs", "text-orange-300")
                detailsContainer.append(title, description, releaseDate, pages);
              
                div.insertBefore(detailsContainer, div.firstChild);
              } else {
                img.src = book.cover;
    
                detailsContainer.textContent = "";
                detailsContainer.classList.add("hidden");
    
                title.textContent = "";
                description.textContent = "";
                btn.textContent = "details";
              }
            });
          });
    
          heroWrapper.classList.add("hidden");
          charEl.classList.add('hidden')
          spellsEl.classList.add('hidden')
        } 
      } catch (error) {
        console.error(`Error fetching data`, error);
      }
}
