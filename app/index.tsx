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
            <ButtonTemplate link={'app/myCloneApp.tsx'} text={"My Clone App"} color="red"/>
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
