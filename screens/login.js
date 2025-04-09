import 'react-native-gesture-handler';
import { StyleSheet, Image, View, Text, TextInput, Button} from 'react-native';
import Estoque from './estoque';

export default function Login({navigation}){       
    return (
        
        <View style={styles.container}>

            <View style={styles.textotitulo}>
                Página de Login
            </View>
            <TextInput
            placeholder='E-mail'
            style={{height: 40, padding: 5, fontSize:20, backgroundColor: 'pink'}}
           />
           <TextInput placeholder='Senha'  style={{height: 40, padding: 5, fontSize:20, backgroundColor: 'pink'}}></TextInput>
           <Button title="Entrar" color="pink" onPress={() =>
        navigation.navigate('Estoque')} /> 
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        justifyContent: 'space-evenly',
        alignItems:'center',
        fontFamily: 'Arial'
        
    },
    textotitulo: {
        fontSize:30
    },
});