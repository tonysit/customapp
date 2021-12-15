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
   Text
 } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { createStackNavigator } from '@react-navigation/stack';

// import Main from './components/views/Main';
import DispatchContext from './contexts/DispatchContext';
import StateReducer, { initialState } from './reducers/StateReducer';
import StateContext from './contexts/StateContext';

// all page settings
import RootScreen from './components/views/root/Root';
import LoginScreen from './components/views/login/Login';

const Stack = createStackNavigator();

 const config = {
  screens: {
    Root: '',
    Login: 'login',
  },
};

const SCREENS = {
  // Root: { title: 'Root Stack', component: RootScreen },
  // Login: { title: 'Login Stack', component: LoginScreen },
}

const linking = {
  // prefixes: ['https://mychat.com', 'mychat://'],
  config,
};

 const App = () => {
  const [state, dispatch] = React.useReducer(StateReducer, initialState);
  const { i18n } = useTranslation();

  React.useEffect(() => {
    if (i18n.language !== state.i18n) {
        i18n.changeLanguage(state.i18n);
    }
}, [state.i18n]); // eslint-disable-line react-hooks/exhaustive-deps

   return (
    <NavigationContainer 
    linking={{
      initialRouteName: 'Home',
      
    }} 
    fallback={<Text>Loading...</Text>}
    >
     <SafeAreaView style={styles.appContainer}>
        <DispatchContext.Provider value={dispatch}>
          <StateContext.Provider value={state}>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={RootScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
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
 