import { AppRegistry } from 'react-native';
import Route from './project/views/Route';
import MainScreen from './project/views/MainScreen';
import App from './src/App';
// import App from './App';

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

AppRegistry.registerComponent('InstaClone', () => MainScreen);
// AppRegistry.registerComponent('InstaClone', () => App);
