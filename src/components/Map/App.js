import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'

import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData, getWeatherData } from '../../api/travelAdvisorAPI';
import Header from './../Navbar/index';
import List from './List/List';
import Map from './Map/Map';
import {mapAPI} from './../../api/api'

const App = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const searchResult = useSelector(state => state.map.searchMap);


  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);
  const [airports, setAirports] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    airports?.map((item) => {
      console.log( item.location.lan)
      setCoords({lan: item.location.lat, lng: item.location.lon})
     })
  }, [airports]);



 


  const feching = () => {
  
  }

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  return (
    <>
      <CssBaseline />
      <Header  />
      
      <Grid container spacing={3} style={{ width: '100%' , paddingTop: '100px'}}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={airports}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={airports}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
      <button onClick={() => feching()}>click</button>
    </>
  );
};

export default App;
