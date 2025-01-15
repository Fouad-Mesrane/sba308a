
import { fetchData } from "./api.js";
// api url


//select
const heroWrapper = document.querySelector('#hero-wrapper')
const selectEl = document.getElementById('select-option')
const searchBtn = document.getElementById('search-btn')
const booksEl = document.getElementById('books')
const charEl = document.getElementById('characters')
const housesEl = document.getElementById('houses')
const spellsEl = document.getElementById('spells')

searchBtn.addEventListener('click', async (e) => {
   try {
    const selectValue = selectEl.value.toString()
    if(selectValue === 'books') {
     const books = await fetchData(selectValue)
     books.map (book => {
        const div = document.createElement('div')
        const img = document.createElement('img')
        console.log(book)
        // div.classList.add()
        img.src = book.cover
        img.style.width = "200px",


        div.appendChild(img)
        booksEl.appendChild(div)
     })   


     heroWrapper.classList.add('hidden')
    
     

    } else if (selectValue === 'characters') {
        
    } else if (selectValue === 'houses') {

    }  else if (selectValue === 'spells') {
        
    }
   } catch (error) {
    console.error(`Error fetching data` , error)
   }
})




















