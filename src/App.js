import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import DetailPage from './components/DetailPage/DetailPage';

// Problem-1 --> haber linkine gidip geri gelince, site tekrar default degerlere gidiyor

function App() {

  // bunlarin hepsini App.js 'i render yapmak icin yaptik

  const [stateCategory, updateStateCategory] = useState(null) // gelen category'leri alt componente atabilmek icin state yaptik 
 
  const [stateCountry, updateStateCountry] = useState(null) 

  const [stateSearch, updateStateSearch] = useState(null) 


  const categoriesHandler = (category, country) => {
    //console.log(category)
    updateStateCategory(category)
    updateStateCountry(country)
  }

  // const countriesHandler = (country) => {
  //   updateStateCountry(country)
  // }

  const searchHandler = (search) => {
    //console.log(search)
    updateStateSearch(search)
  }

  //click2= {countriesHandler}
  return (
    <div>

      <NavBar click= {categoriesHandler} click3={searchHandler}/>

      <Switch>
        <Route exact path="/" component={ () => <HomePage category={stateCategory} country={stateCountry} search={stateSearch}/> } /> {/* route'lu componente bu sekilde props gonderiyoruz */}
        <Route path="/news-detail" component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
