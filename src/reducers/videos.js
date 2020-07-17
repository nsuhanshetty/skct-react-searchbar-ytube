const videosReducer = (state =[], action) => {
    switch(action.type){
        case'ADD_VIDEOS':
        return [...state,...action.videos];
    }
};
export default videosReducer;