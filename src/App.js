import React, {useEffect, useState} from 'react';
import api from './services/api';
import Header from './components/header/Header';
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import './App.css';

const App = () => {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList()
      setMovieList(list)
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }
    loadAll()
  },[])
  return (
    <div className='page'>
      <Header/>
      {featuredData && 
      <FeaturedMovie item={featuredData} />
      }
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}

export default App;
