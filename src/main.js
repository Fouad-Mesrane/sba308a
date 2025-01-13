import  {fetchData}  from "./api.js";

const getData = async (param) => {
  try {
    const data = await fetchData(param)
    return data
  } catch {
    console.error("Failed getting data", error);
    
  }
};

 const books = await getData('books')
 books.map(book => {
    console.log(book)
 })

