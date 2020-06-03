const fetchImages = async () => {
  const response = await fetch(
    "https://api.unsplash.com/search/photos?page=1&per_page=10&query=rocket",
    {
      headers: {
        Authorization: "Client-ID CQtp-_AdoIpAc06bqjrhIsPNLM-tbcwY7KgP-RLHW8g",
      },
    }
  );

  return await response.json();
};

export default fetchImages;
