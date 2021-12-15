
export const actionTypes = {
    CHANGE_I18N : "CHANGE_I18N"
}
 
export const initialState = {
    i18n: "en",
    posts: [],
    error: null,
    count: 0
};
 
 const StateReducer = (state = initialState, action) => {
     switch (action.type) {
       case actionTypes.CHANGE_I18N:
         return {
           ...state,
           i18n: action.payload
         };
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload
            };
        case 'ADD_POST':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            };
        case 'REMOVE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'SET_COUNT':
            return {
                ...state,
                error: action.payload
            };
       default:
         return state;
     }
 };
 
 export default StateReducer;