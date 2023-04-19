import { View, Text, StyleSheet } from "react-native";

function MealDetails({duration, complexity, affordability}) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailitem}>{duration}m</Text>
            <Text style={styles.detailitem}>{complexity}</Text>
            <Text style={styles.detailitem}>{affordability}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,  
    },
    detailitem: {
        marginHorizontal: 4,
        fontSize: 16
    },
});