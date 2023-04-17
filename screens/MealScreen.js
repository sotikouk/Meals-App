import { Image, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealScreen({route, imageUrl}) {
const mealId = route.params.mealId;

const selectedMeal = MEALS.find((meal) => meal.id === mealId);
return (
    <View>
        <Image source={{uri: selectedMeal.imageUrl}}/>
        <Text>{selectedMeal.title}</Text>
        <MealDetails 
            duration={selectedMeal.duration} 
            affordability={selectedMeal.affordability} 
            complexity={selectedMeal.complexity}/>
        <Text>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)}
        <Text>Steps</Text>
        {selectedMeal.steps.map((step) => <Text key={step}>{step}</Text>)}
    </View>
);
}

export default MealScreen;

const styles = StyleSheet.create({
    
});