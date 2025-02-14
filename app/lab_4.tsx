import vacationDestinations from "../constants/list_items";
import { StyleSheet, FlatList, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { useState } from "react";

type DestinationProps = {
    id: number;
    location: string;
    price: number;
    temp: string;
}

const Destination: React.FC<DestinationProps> = ({ id, location, price, temp }) => {
    const [isClicked, setIsClicked] = useState<number[]>([]);

    const addToList = (index: number) => {
        const newList = [...isClicked, index];
        setIsClicked(newList);
    };

    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={() => addToList(id)}>
            <Text>{id} {location} Price: {price} {"\u2705"}</Text>
        </TouchableOpacity>
    );
};

export default function Lab() {
    const [vacationList, setVacationList] = useState(vacationDestinations);

    return (
        <View>
            <Text>Choose destinations you would like to quote for</Text>
            <FlatList
                data={vacationList}
                renderItem={({item}) => <Text>{item.id} {item.location} Price: {item.price}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}


const styles = StyleSheet.create({ 
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})