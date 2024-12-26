import './App.css';
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';
import NewsContent from './components/NewsContent/NewsContent';
import axios from "axios";
import apiKey from './data/config';
import Footer from './components/Footer/Footer';

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadMore, setloadMore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&pageSize=${loadMore}`);
      setNewsArray(news.data.articles); 
      setnewsResults(news.data.totalResults);
    } catch (error) {
        console.log(error);
    }
  }

  console.log(newsResults);

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadMore]);

  return (
    <div className="App">
      <Navigation setCategory={setCategory}/>
      <NewsContent loadMore={loadMore} setloadMore={setloadMore} newsArray={newsArray} newsResults={newsResults}/>
      <Footer/>
    </div>
  );
}

export default App;
