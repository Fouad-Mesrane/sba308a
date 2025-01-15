import { fetchData } from "./api.js";
// api url

//select
const homeBtn = document.getElementById("home-btn");
const heroWrapper = document.querySelector("#hero-wrapper");
const selectEl = document.getElementById("select-option");
const searchBtn = document.getElementById("search-btn");
const booksEl = document.getElementById("books");
const charEl = document.getElementById("characters");
const housesEl = document.getElementById("houses");
const spellsEl = document.getElementById("spells");

searchBtn.addEventListener("click", async (e) => {
  try {
    const selectValue = selectEl.value.toString();
    if (selectValue === "books") {
      // fetching the books from api
      const books = await fetchData(selectValue);
      books.map((book) => {
        //creating elements to render the books
        const div = document.createElement("div");
        const img = document.createElement("img");
        const btn = document.createElement("button");

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
        div.classList.add("text-center");
        img.style.width = "100%";

        div.appendChild(img);
        div.appendChild(btn);
        booksEl.appendChild(div);

        // showing more details when clicking on details button
        const title = document.createElement("h2");
        const description = document.createElement('p')
        title.classList.add("text-orange-300", "font-bold")
        description.classList.add('text-xs', 'text-white','font-normal')

        btn.addEventListener("click", (e) => {

          if (e.target.textContent === "details") {
            img.src = "";
            btn.textContent = "back";
            title.textContent = book.title;
            description.textContent = book.description
            div.insertBefore(title, div.firstChild);
            div.insertBefore(description, div.lastChild);
          } else {
            img.src = book.cover;
            title.textContent = ""
            btn.textContent = "details";

          
          }
        });
      });

      heroWrapper.classList.add("hidden");
    } else if (selectValue === "characters") {
    } else if (selectValue === "houses") {
    } else if (selectValue === "spells") {
    }
  } catch (error) {
    console.error(`Error fetching data`, error);
  }
});

// home page reset
function homePage() {
  heroWrapper.classList.remove("hidden");
  selectEl.value = selectEl[0].textContent;
  booksEl.textContent = "";
  charEl.textContent = "";
  housesEl.textContent = "";
  spellsEl.textContent = "";
}

homeBtn.addEventListener("click", homePage);
