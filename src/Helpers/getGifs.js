export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=t2bB3hyDvQnboHng8BF6uA388TG84CB0`;

  // fetch(url)
  //   .then((data) => data.json())
  //   .then((res) => {
  //     console.log(res);
  //   });

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
