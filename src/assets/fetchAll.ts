import axios from "axios";

const fetchAll = async (type : string) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com${type}`,
    );
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export default fetchAll;