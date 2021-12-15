import React from 'react';
import { AppRegistry } from 'react-native';
// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

import App from './src/App';
import {name as appName} from './app.json';
import './src/i18n';
// import './src/helpers/polyfillUtils/arrayPolyfill';
// import './src/helpers/polyfillUtils/stringPolyfill';
// import './src/helpers/polyfillUtils/consolePolyfill';
// import './src/helpers/polyfillUtils/promisePolyfill';
// import './src/helpers/polyfillUtils/datePolyfill';

const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, { rootTag: document.getElementById('react-root') });