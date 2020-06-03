const fetchImages = async () => {
  const response = await fetch(
    "https://api.unsplash.com/search/photos?page=1&per_page=10&query=rocket",
    {
      headers: {
        Authorization: "Client-ID YOUR_ACCESS_TOKEN",
      },
    }
  );

  console.log("Original function running ===");

  return await response.json();
};

export default fetchImages;
