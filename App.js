import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import DeliveryScreen from './screens/DeliveryScreen';
import UserScreen from './screens/UserScreen';
import CategoryScreen from './screens/CategoryScreen';
import FoodAlergyScreen from './screens/FoodAlergyScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreens}/>
            <Stack.Screen name='Restaurant' component={RestaurantScreen}/>
            <Stack.Screen name='Basket' component={BasketScreen}
            options={{presentation: 'modal', headerShown: false}} />
            <Stack.Screen name='PreparingOrderScreen' component={PreparingOrderScreen}
            options={{presentation: 'modal', headerShown: false}}/>
            <Stack.Screen name='Delivery' component={DeliveryScreen}
            options={{presentation: 'modal', headerShown: false}}/>
            <Stack.Screen name='User' component={UserScreen}
            options={{presentation: 'modal', headerShown: false}}/>
            <Stack.Screen name='Category' component={CategoryScreen}
            options={{presentation: 'modal', headerShown: false}}/>
            <Stack.Screen name='Alergy' component={FoodAlergyScreen}
            options={{presentation: 'modal', headerShown: false}}/>
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
   
  );
};
