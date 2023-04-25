import { FavoritesContext } from '../store/context/favorites-context'
import MealsList from "../components/mealsList/MealsList";
import { useContext } from "react";
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
    const FavoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter( meal => FavoriteMealsCtx.ids.includes(meal.id));

   return ( <MealsList items={favoriteMeals} />);
}

export default FavoritesScreen;