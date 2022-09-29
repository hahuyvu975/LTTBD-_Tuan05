import { StyleSheet, Text, TouchableWithoutFeedback, View, Image, Button } from 'react-native';
export default function Mua() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require('./assets/vsmart-mini.png')}></Image>
                </View>
                <View style={styles.headerRight}>
                    <Text>Điện Thoại Vsmart Joy 3
                        Hàng chính hãng</Text>
                </View>
            </View>
            <View style = {styles.center}>
                <Text style = {{fontWeight:'bold'}}>Chọn 1 màu bên dưới</Text>
            </View>




        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        width: '100%',
    },
    header: {
        backgroundColor: 'white',
    },
    headerLeft:{
        padding:20,
        left:0,
        
      },
      headerRight:{
        right:0,
      },
      center:{
        flex:3,
        
      },

    footer: {
        flex: 1,
        backgroundColor: 'white',
    },

    footer1: {
        flex: 1,
        paddingLeft: 50,
        paddingRight: 20,

    },

});