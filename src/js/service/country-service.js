
const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
  fetchArticles(query) {
    const requestParams = `${query}`;
    return fetch(baseUrl + requestParams)
    .then(res => res.json());
  },
};

// function fetchArticles(query){
//   const url = `https://restcountries.eu/rest/v2/name/${query}`;
//   return fetch(baseUrl)
//   .then(res => res.json());
// }
// export default fetchArticles;