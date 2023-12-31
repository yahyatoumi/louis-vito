import axios from "axios";

const fetchAll = async (type : string) => {
  console.log(`https://fakestoreapi.com${type}`);
  try {
    const response = await axios.get(
      `https://fakestoreapi.com${type}`,
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchAll;