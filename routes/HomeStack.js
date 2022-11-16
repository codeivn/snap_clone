import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ChatScreen from '../screens/ChatScreen';



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
    },
    ChatScreen: {
        screen: ChatScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);