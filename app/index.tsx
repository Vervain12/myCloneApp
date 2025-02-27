import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import ButtonTemplate from '../components/button_template';
import FruitList from '../components/fruits';

const Home = () => {
    return(
        <View style={styles.home_style}>
            <Text>
                Welcome to our App!
            </Text>
            <ButtonTemplate link={'/myCloneApp'} text={"My Clone App"} color="red"/>
            <ButtonTemplate link={'/lab_3'} text={"Lab 3"} color="blue"/>
            <ButtonTemplate link={'/lab_4'} text={"Lab 4"} color="yellow"/>
            <ButtonTemplate link={'/lab_5'} text={"Lab 5"} color="green"/>
            <View>
                {FruitList.map((fruit, index) => (
                    <Text key={index}>{fruit}</Text>
                ))}
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({ 
    home_style: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
