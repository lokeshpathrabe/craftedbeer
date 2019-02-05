import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './projects/craftedBeer/Dashboard';
import reducers from './reducers';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import {addBeerToStore} from './projects/craftedBeer/actions'

let store;

(function () {
    store = createStore(reducers);
    const unsubscribe = store.subscribe(()=>console.log(store.getState()))
    fetch('https://api.punkapi.com/v2/beers', {
        method: 'GET',
        crossDomain: true,
        'Content-Type': 'application/x-www-form-urlencoded'
    }).then((response) => {
        return response.json();
    })
        .then((json) => {
            let cont = 0;
            return json.map((resObj) => {
                cont++;
                let beer = {
                    id: cont,
                    name: resObj.name,
                    image: resObj.image_url,
                    description: resObj.description,
                    visible: true,
                    expanded: false
                }
                store.dispatch(addBeerToStore(beer));
                return beer;
            });
        })
        .then(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <Dashboard/>
                </Provider>,
                document.getElementById('react-container')
            );
        });
}());


