import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealScreen from './screens/MealScreen';
import FavoritesScreen from './screens/FavoritesScreen';
//import FavoritesContextProvider from './store/context/favorites-context';
import { Store } from './store/redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator>
            <Drawer.Screen name="Categories" component={CategoriesScreen}
              options={{drawerIcon: ({color, size}) => (<Ionicons name='list' color={color} size={size}/>), }} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen}
              options={{drawerIcon: ({color, size}) => (<Ionicons name='star' color={color} size={size}/>), }} />
          </Drawer.Navigator>
}

export default function App() {
  return (
    <>
          <StatusBar style = 'dark' />
            {/* <FavoritesContextProvider> */}
            <Provider store={Store}>
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name="Meals App" component={DrawerNavigator} options={{headerShown: false}}/>
                  <Stack.Screen name="mealsOverview" component={MealsOverviewScreen}/>
                  <Stack.Screen name="mealScreen" component={MealScreen}/>
                </Stack.Navigator>
              </NavigationContainer>
              </Provider>
            {/*</FavoritesContextProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
