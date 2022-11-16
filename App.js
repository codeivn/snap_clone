import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';

import Home from './routes/HomeStack';
import HeaderChat from './components/HeaderChat';
import ChatScreen from './screens/ChatScreen';

export default function App() {
  return (
    <ChatScreen />
  );
}
