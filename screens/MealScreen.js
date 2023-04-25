import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
//import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from '../store/redux/favorites'

function MealScreen({route, navigation}) {
//const favoritesMealsCtx = useContext(FavoritesContext);

const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
const dispatch = useDispatch();

const mealId = route.params.mealId;

const selectedMeal = MEALS.find((meal) => meal.id === mealId);

const mealIsFavorite = favoriteMealIds.includes(mealId);

function changeFavoriteStatusHandler() {
    if(mealIsFavorite) {
        //favoritesMealsCtx.removeFavorite(mealId);
        dispatch(removeFavorite({id: mealId}));
    } else {
        //favoritesMealsCtx.addFavorite(mealId);
        dispatch(addFavorite({id: mealId}));
    }
}

useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => {
            return <IconButton icon= {mealIsFavorite ? 'star': 'star-outline'}
             color='black' onPress={changeFavoriteStatusHandler}/>
        }
    })
}, [navigation, changeFavoriteStatusHandler]);
return (
    <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails 
            duration={selectedMeal.duration} 
            affordability={selectedMeal.affordability} 
            complexity={selectedMeal.complexity}
            />
        <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Ingredients</Text>
                <List data={selectedMeal.ingredients}/>
            </View>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Steps</Text>
                <List data={selectedMeal.steps}/>
            </View>
        </View>
        </View>
    </ScrollView>
);
}

export default MealScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 6,
        textAlign: 'center'
    },
    subTitleContainer: {
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 24,
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center',
    }
});