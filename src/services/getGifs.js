const API_KEY = 'gpUFXO3qzly0cHNaGV8lbGzqdpxklvVH';

const getGifs = async ({ keyword = 'morty' } = {}) => {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  const res = await fetch(API_URL);
  const { data = [] } = await res.json();

  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { title, id } = image;
      const { url } = image.images.downsized_medium;
      return { id, title, url };
    });

    return gifs;
  }
};

export default getGifs;
