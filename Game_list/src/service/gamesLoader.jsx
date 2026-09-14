import api from "../config/api";

const API_KEY = import.meta.env.VITE_API_KEY;

export const gamesLoader = async ({ request }) => {
  try {
    // Get URL from React Router
    const url = new URL(request.url);

    // Get search and page from URL
    const search = url.searchParams.get("search") || "";
    const page = url.searchParams.get("page") || "1";

    // Base parameters
    const params = {
      key: API_KEY,
      page: page,
    };

    // Add search only when user has entered something
    if (search) {
      params.search = search;
    }

    console.log("API Params:", params);

    const res = await api.get("/games", {
      params,
    });

    return res.data;
  } catch (err) {
    console.log("Error fetching games:", err);
    throw err;
  }
};

export const gamesDetailsLoader = async ({ params }) => {
  try {
    const res = await api.get(`/games/${params.id}`, {
      params: {
        key: API_KEY,
      },
    });

    return res.data;
  } catch (err) {
    console.log("Error fetching game details:", err);
    throw err;
  }
};