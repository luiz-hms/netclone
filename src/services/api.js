const API_KEY = '76bc280af35b969224cc38bd2d48cb17';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json()
  return json
}
// eslint-disable-next-line
export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais NetFlix',
        items: await basicFetch(`/discover/tv?whit_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'tranding',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?whit_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Em Comédia',
        items: await basicFetch(`/discover/movie?whit_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?whit_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?whit_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?whit_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  },
  getMovieInfo: async (movieId, type) => {
    let info = {}
    if(movieId) {
      switch(type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
           break;
           case 'tv':
            info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
             break;
             default:
               info = null
               break;
            }
    }
    return info
  }
}