export const postRequest = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) return await res.json();
    else throw new Error(`Request Failed - ${res.status}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};
