import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';



const screens = {
    Home: { // Default obrazovka
        screen: WelcomeScreen,
        navigationOptions: {
            headerShown: false,
            title: ''
        }
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            title: ''
        }
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);