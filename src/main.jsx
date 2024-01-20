import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,  Router, Route, Routes,  } from 'react-router-dom';
import Movie from './pages/Movie.jsx';
import Search from './pages/Search.jsx';
import Home from './pages/Home.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
    <Route  element={<App />}>
      <Route path='/' element={<Home />}/>
      <Route path='/Movie:id' element={<Movie />}/>
      <Route path='/Search' element={<Search />}/>

    </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
