import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './projects/craftedBeer/Dashboard';
import Store from './projects/craftedBeer/Store';

let store;

(function(){
  store = new Store();  
  fetch('https://api.punkapi.com/v2/beers', {
  method: 'GET',
      crossDomain: true,
      'Content-Type': 'application/x-www-form-urlencoded'
  }).then((response)=>{
      return response.json();
  })
.then((json)=>{
      return json.map((resObj)=>{
          let beer = {
              name: resObj.name,
              image: resObj.image_url,
              description: resObj.description
          }
          return beer;
      });
  })
.then(beers => store.beers = beers)
.then(()=>{
      
ReactDOM.render(
 <Dashboard store={store} />,
 document.getElementById('react-container')
);
  });
}());


