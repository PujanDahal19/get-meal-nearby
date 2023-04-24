import useLocation from "@/hooks/getLocation";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "vMa6qG1_DXDDt2I1Kymk3bdt8zn4RHJ5qNRuQ6FGeEs",
});

const fetchImages = async () => {
  const photos = await unsplash.search.getPhotos({
    query: "restaurants",
    page: 1,
    perPage: 30,
  });
  const unsplashPhotos = photos.response.results;
  return unsplashPhotos.map((photo) => photo.urls["small"]);
};

export default async function fetchResData(latLong = "41.8781,-87.6298") {
  try {
    const unsplashImages = await fetchImages();
    const searchParams = new URLSearchParams({
      query: "cafe",
      ll: latLong,
      limit: 3,
    });

    const results = await fetch(
      `https://api.foursquare.com/v3/places/search?${searchParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "fsq3wZzrA8KFC3KBUruNke9j+ik/mxd6ywkNZSDZNpR7WpQ=",
        },
      }
    );
    const response = await results.json();
    return await response.results.map((result, i) => {
      return {
        ...result,
        imgUrl: unsplashImages[i],
      };
    });
  } catch (err) {
    console.log(err);
  }
}
