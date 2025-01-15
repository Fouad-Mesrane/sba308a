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
    } else if (selectValue === "characters") {
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
