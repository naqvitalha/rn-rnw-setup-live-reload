import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('AwesomeProject', () => App);

//This is what needs to be pasted
if (window.document) {
    AppRegistry.runApplication("AwesomeProject", {
        initialProps: {},
        rootTag: document.getElementById("react-root")
    });
}