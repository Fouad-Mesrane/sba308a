

const BASE_URL = "https://potterapi-fedeperin.vercel.app/en";

export const fetchData = async (param) => {
  try {
    const data = await axios.get(`${BASE_URL}/${param}`);
    const returnedData = data.data
    return  returnedData;
  } catch (error) {
    console.error(`Error fetching ${param}`, error);
  }
};
