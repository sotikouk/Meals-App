//import { FavoritesContext } from '../store/context/favorites-context'
import { useSelector } from "react-redux";
import MealsList from "../components/mealsList/MealsList";
//import { useContext } from "react";
import { MEALS } from '../data/dummy-data';
import { View, Text } from 'react-native';

function FavoritesScreen() {
   // const FavoriteMealsCtx = useContext(FavoritesContext);
   
   const favoriteMealIds = useSelector( state => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter( meal => favoriteMealIds.includes(meal.id));

    if (favoriteMeals.length === 0)
        return (<View>
            <Text>You have no favorite meals yet.</Text>
        </View>);

   return ( <MealsList items={favoriteMeals} />);
}

export default FavoritesScreen;