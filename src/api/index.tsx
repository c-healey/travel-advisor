import axios from "axios";

export const getPlaceData = async (type: string, sw: any, ne: any) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key":
            "cd0c837940mshf44feb321ddfd6fp177a2ejsn59c56bea8a0a",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
