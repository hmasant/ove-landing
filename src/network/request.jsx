import axios from "axios";

export const postRequest = async (url, data, headers) => {
  try {
    const res = await axios.post(url, data, { headers });
    if (res.status >= 200 && res.status < 209) return res.data;
    else throw new Error(`Request Failed - ${res.status}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};
