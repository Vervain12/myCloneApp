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
        <View style={{backgroundColor:"blue"}}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => addToList(id)}>
               <Text>{id} {location} Price: {price} {isClicked.includes(id) ? "\u2705" : ""}</Text>
            </TouchableOpacity>
        </View>

    );
};

export default function Lab() {
    const [vacationList, setVacationList] = useState(vacationDestinations);
    const [isClicked, setIsClicked] = useState<number[]>([]);

    const addToList = (index: number) => {
        const newList = [...isClicked, index];
        setIsClicked(newList);
    };

    return (
        <View>
            <Text>Choose destinations you would like to quote for</Text>
            <FlatList
                data={vacationList}
                renderItem={({item, index}) =><TouchableOpacity onPress={()=>addToList(index)}><Text>{item.id} {item.location} Price: {item.price} {isClicked.includes(index) ? "\u2705" : ""}</Text></TouchableOpacity> }
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