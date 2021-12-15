/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect, useContext}  from 'react';
 import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity
 } from 'react-native';
 import {Context} from '../../hooks/Store';
 import { useTranslation } from 'react-i18next';
 
 const Main = () => {
    const [state, dispatch] = useContext(Context);
    const { t } = useTranslation();

   return (
     <View>
         <Text>{state.count}</Text>
        <TouchableOpacity onPress={() => dispatch({type: 'SET_COUNT', payload: ++state.count})}><Text>{t('Click')}</Text></TouchableOpacity>
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
 
 export default Main;
 