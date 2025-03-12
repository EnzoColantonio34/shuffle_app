import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import Accueil from './pages/accueil';
import HeaderComponent from './components/headercomponent';
import NavbarComponent from './components/navbarcomponent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <HeaderComponent />
        <Stack.Navigator initialRouteName="Accueil" style={{ flex: 1 }}>
          <Stack.Screen 
            name="Accueil" 
            component={Accueil} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <NavbarComponent />
      </View>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
