import {
    Platform
} from 'react-native'

const App = Platform.OS == 'web' ? require('./index.web') : require('./index.native');

export default App;