import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem({id, title, imageUrl, duration, affordability, complexity}) {
    const navigation = useNavigation();
    function mealHandler() {
        navigation.navigate('mealScreen', {
            mealId: id,
        });
    };

    return (
        <View style={styles.mealitem}>
            <Pressable android_ripple={{color: '#ccc'}} 
                            style={({pressed}) => pressed ? styles.buttonPressed : null} onPress={mealHandler}>
            <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.image} source={{uri: imageUrl}}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
            </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealitem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,  
    },
    detailitem: {
        marginHorizontal: 4,
        fontSize: 12
    },
    buttonPressed: {
        opacity: 0.5
    },
});