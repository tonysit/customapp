/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity
 } from 'react-native';
import {API_URL, API_TOKEN} from "@env";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import DispatchContext from '../../../contexts/DispatchContext';
import StateContext from '../../../contexts/StateContext';
 
const Root = ({ navigation }) => {
  // use context section
  const contextDispatch = React.useContext(DispatchContext);
  const contextState = React.useContext(StateContext);

  // use redux section
  const dispatch = useDispatch();
  const { count } = useSelector(state => {
    return {
      count: state.home.count
    };
  });

  const { t } = useTranslation();
    
  return (
    <View>
        <Text>{count}</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('login');
        // dispatch({type: 'SET_COUNT', payload: count+1})
      }}><Text>{t('Click')}</Text></TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default Root;
 