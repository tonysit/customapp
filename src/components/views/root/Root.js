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
import {API_URL, API_TOKEN} from "@env"
import { useTranslation } from 'react-i18next';

import DispatchContext from '../../../contexts/DispatchContext';
import StateContext from '../../../contexts/StateContext';
 
const Root = ({ navigation }) => {
    const globalDispatch = React.useContext(DispatchContext);
    const globalState = React.useContext(StateContext);
    const { t } = useTranslation();

   return (
     <View>
         <Text>{globalState.count}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text>{t('Click')}</Text></TouchableOpacity>
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
 