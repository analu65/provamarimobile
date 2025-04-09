import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Estoque from './screens/estoque';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack =  createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name='Estoque' component={Estoque}>
    </Stack.Screen>
    <Stack.Screen name='Login' component={Login}>
    </Stack.Screen>
</Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
