const reducer = (beers = [], action) => {
    switch (action.type) {
        case "toggle-panel":
            return beers.map((beer) => {
                let state = beer.expanded
                return beer.id == action.id ? { ...beer, "expanded": !state } : beer;
            });
        case "addBeer":
            return [...beers, action.beer]
        case "filter":
            let filterText = action.filter;
            return beers.map((beer) => {
                return (beer.name && beer.name.toUpperCase().indexOf(filterText.toUpperCase()) > -1) ? 
                { ...beer, visible: true }: { ...beer, visible: false }
                }
            );
        default:
            return beers;
    }
    return beers;
}

export default reducer;