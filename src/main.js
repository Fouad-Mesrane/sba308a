// import dotenv from "dotenv";
// dotenv.config();
// const API_KEY = process.env.API_KEY;
// console.log(API_KEY);

const url = "https://potterapi-fedeperin.vercel.app/en/books/";

const fetchSpells = async () => {
  const response = await fetch(url, {
    method : "GET"
  });
  const spells = await response.json();
  console.log(spells);
};

fetchSpells()
