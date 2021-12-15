
export const actionTypes = {
    CHANGE_I18N : "CHANGE_I18N"
}
 
export const initialState = {
    i18n: "en",
};
 
 const StateReducer = (state = initialState, action) => {
     switch (action.type) {
       case actionTypes.CHANGE_I18N:
         return {
           ...state,
           i18n: action.payload
         };
       default:
         return state;
     }
 };
 
 export default StateReducer;