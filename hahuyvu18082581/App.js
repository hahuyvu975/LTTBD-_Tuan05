import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, View, Image, Button } from 'react-native';
import Counter from "react-native-counters";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/vsmart.png')}></Image>
      </View>

      <View style={styles.center}>
        <View style={styles.center1}>
        <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>
        <View style={styles.center2}>
          <Image source={require('./assets/Star 1.png')}></Image>
          <Image source={require('./assets/Star 2.png')}></Image>
          <Image source={require('./assets/Star 3.png')}></Image>
          <Image source={require('./assets/Star 4.png')}></Image>
          <Image source={require('./assets/Star 5.png')}></Image>
          <Text style = {{float:'right'}}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.center3}>
          <Text style = {{float:'left',color:'black',fontWeight:'bold'}}>1.790.000</Text>
        </View>
        <View style={styles.center4}>
          <Text style = {{float:'left',color:'red',fontWeight:'bold'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        
        <View style={styles.footer1}>
          <Button color='red' title='CHỌN MUA'></Button>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  header: {
    position: 'absolute',
    padding: 60,
    height: '100%',
    

  },
  

  center: {
    flex: 1,
    backgroundColor: 'white',
    padding: 50,
    marginTop: 400,
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