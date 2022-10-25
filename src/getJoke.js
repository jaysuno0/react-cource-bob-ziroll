const requestOptions = {
  headers: {
    'X-RapidAPI-Key': '435fc2500cmshb0ae20335b88b0cp144682jsn3aaab6e097cc',
    'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
  }
}

export async function getJoke() {
  const response = await fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any', requestOptions);
  const joke = await response.json();
  return joke;
}