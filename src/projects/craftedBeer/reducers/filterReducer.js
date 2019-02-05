const filterReducer = (state = '', action) => {
    switch(action.type){
        case 'onChange':
            return action.value;
        default:
            return state;
    }
}

export default filterReducer;