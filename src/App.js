/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   useColorScheme
 } from 'react-native';
import { 
  NavigationContainer,
  useTheme
} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import { DEBUG } from "@env";
import thunk from 'redux-thunk';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import DispatchContext from './contexts/DispatchContext';
import StateReducer, { initialState } from './reducers/StateReducer';
import StateContext from './contexts/StateContext';
import Reducers from './configs/Reducers';
import Routes from './configs/Routes';
import { DeviceSetting } from './configs/Config';
import { DefaultTheme, DarkTheme } from './configs/Styles';

const Stack = createStackNavigator();
let middleware = [thunk];

if(DEBUG === 'true'){
  middleware.push(createLogger({
    collapsed: true,
    predicate: (getState, action) => true,
  }));
}

const store = createStore(
  combineReducers(Reducers), 
  applyMiddleware(...middleware)
);

const App = () => {
  const [state, dispatch] = React.useReducer(StateReducer, initialState);
  const { i18n } = useTranslation();
  const scheme = useColorScheme();
  const { colors } = useTheme();

  const renderScreens = React.useCallback(() => {
    let screens = [];
    let linking = {
      // initialRouteName: '',
      config:{
        screens: {}
      }
    };

    if(Routes){
      for(let key in Routes){
        screens.push({
          name: key,
          component: Routes[key].component,
          options: Routes[key].options
        });
        linking.config.screens[key] = (key === 'root' ? '' : key);
      }
    }
    return [screens, linking];
  });
  
  React.useEffect(() => {
    if (i18n.language !== state.i18n) {
        i18n.changeLanguage(state.i18n);
    }
  }, [state.i18n]); // eslint-disable-line react-hooks/exhaustive-deps

  const [screens, linking] = renderScreens();
  const currentTheme = scheme === 'dark' && DeviceSetting.darkMode ? DarkTheme : DefaultTheme;
    
  return (
  <NavigationContainer 
  linking={linking} 
  fallback={<Text>Loading...</Text>}
  theme={currentTheme}
  >
    <SafeAreaView style={styles.appContainer}>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <Provider store={store}>
            <Stack.Navigator
            screenOptions={{
              headerBackImage: () => <Icon name="chevron-left" size={24} color={currentTheme.colors.text} style={{padding: 10}}/>,
              headerBackTitleVisible: false,
              headerStyle: {
                // backgroundColor: Color.headerBackground
              }
            }}
            >
              { screens.map((item) => <Stack.Screen {...item} />) }
            </Stack.Navigator>
          </Provider>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </SafeAreaView>
    </NavigationContainer>
  );
};
 
 const styles = StyleSheet.create({
   appContainer: {
     flex: 1,
   },
 });
 
 export default App;
 