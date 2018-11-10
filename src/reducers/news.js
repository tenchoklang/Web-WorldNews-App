const newsReducerDefaultState = [];

const newsReducer = (state = newsReducerDefaultState, action) => {
    switch(action.type){
        case 'GET_NEWS':
            //state of no use at this moment 
            //array object of news articles
            return [...action.payload];
        default:
            return state;
    }
}

export default newsReducer;