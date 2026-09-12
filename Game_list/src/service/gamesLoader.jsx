import api from "../config/api";

export const gamesLoader = async () => {
  try {
    const res = await api.get("/games", {
      params: {
        key: "30d791ba69654a79a634bfe19fd3980a"
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
