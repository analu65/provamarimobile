import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image, View, Text, TextInput, Button} from 'react-native';

export default function Estoque(){
    return(
    <View style={styles.container}>
        <View style={styles.textotitulo}>
        Estoque
        </View>
        <View style={{width: 50, height: 50}}>
        <View style={styles.imagens}>
        <Image source={require('../assets/maca.jpg')} />
        </View>
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    textotitulo: {
        fontSize: 30,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#003366'
    },
    imgrow: {
        flexDirection:'column',

    },
    imagens: {
        alignItems:'center'
    }
    
})
