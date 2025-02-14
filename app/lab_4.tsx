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
            if(!isClicked.includes(index)) {
            const newList = [...isClicked, index];
            setIsClicked(newList);
            }
        };
        
    return (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => addToList(id)}>
            <Text style={styles.itemText}>
                {id}. {location} Price: ${price} {isClicked.includes(id) ? "\u2705" : ""}
            </Text>
        </TouchableOpacity>
    );
};

export default function Lab() {
    const [vacationList, setVacationList] = useState(vacationDestinations);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Choose destinations you would like to quote for</Text>
            <FlatList
                data={vacationList}
                renderItem={({item}) => 
                    <Destination
                        id={item.id}
                        location={item.location}
                        price={item.price}
                        temp={item.average_yearly_temperature}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}


const styles = StyleSheet.create({ 
    container: {
        padding: 16,
        backgroundColor: "#fff",
        flex: 1,
      },
      headerText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
      },
      listItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      },
      itemText: {
        fontSize: 16,
      },
})