import dispatch from 'react-redux';

function togglePanel(id){
    return {
        type: 'toggle-panel',
        id
    }
}

function addBeerToStore(beer){
    return {
        type: 'addBeer',
        beer
    }
}

function onFilterChange(val){
    return {
        type: 'onChange',
        value: val
    }
}

function filterBeers(val){
    return {
        type: 'filter',
        filter: val
    };
}

export {
    togglePanel,
    addBeerToStore,
    onFilterChange,
    filterBeers
}