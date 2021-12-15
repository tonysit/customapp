
export const actionTypes = {
    SET_COUNT : "SET_COUNT"
}
 
export const initialState = {
    count: 0
};
 
 const StateReducer = (state = initialState, action) => {
     switch (action.type) {
        case actionTypes.SET_COUNT:
            return {
                ...state,
                count: action.payload
            };
       default:
        return state;
    }
 };
 
export default StateReducer;