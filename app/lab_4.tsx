import vacationDestinations from "../constants/list_items";
import { StyleSheet, FlatList, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { useState } from "react";

export default function Lab() {
    const [vacationList, setVacationList] = useState(vacationDestinations);
    const [isClicked, setIsClicked] = useState<number[]>([]);
    
    const toggleItemInList = (id: number) => {
        if (isClicked.includes(id)) {
            setIsClicked(isClicked.filter((idSelected) => idSelected != id));
        } else {
            setIsClicked([...isClicked, id]);
        }
    };

    return (
        <View>
            <Text>Choose destinations you would like to quote for</Text>
            <FlatList
                data={vacationList}
                keyExtractor={(index) => index.toString()}                
                renderItem={({item}) =>
                <TouchableOpacity
                    onPress={ ()=>toggleItemInList(item.id)}>
                        <Text style={styles.button}>
                            {item.location} Price: {item.price} {isClicked.includes(item.id) ? <Text>{"\u2705"}</Text> : ""}
                        </Text>
                </TouchableOpacity>}/>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f8f8f8',
        borderRadius: 5
    }
});