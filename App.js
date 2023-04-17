import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealScreen from './screens/MealScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
          <StatusBar style = 'dark' />
          <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="mealsCategories" component={CategoriesScreen}/>
            <Stack.Screen name="mealsOverview" component={MealsOverviewScreen}/>
            <Stack.Screen name="mealScreen" component={MealScreen}/>
          </Stack.Navigator>
          </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});