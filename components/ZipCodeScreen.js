import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight, StyleSheet,backgroundColor,ImageBackground,scrollit,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Suratthani', code: '84350' },
    { place: 'Bangkok', code: '10100' },
    { place: 'Chiangrai', code: '57000' },
    { place: 'BuriRam', code: '31000' },
    { place: 'Krabi', code: '81000' },
    { place: 'Lampang', code: '52000' },
]
                                


const ZipItem = ({ place, code, navigation }) => (
  <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })} underlayColor="#D28BB5">
  <View style={styles.container}>
      <Text>{place}</Text>
      <Text>{code}</Text>
  </View>
</TouchableHighlight>

)



const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
          <ImageBackground source={require('../unnamed.jpg')} style={styles.container}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 50,
      
              },
    backdrop: 
    {
    alignItems: 'center',
    backgroundColor: '#BDDAE6',
    borderBottomWidth: 20,
    width: '50%',
    height: '70%',
    fontSize: 20,
    color: '#000',
},
backdropZip: {
  // flex:1,
  alignItems: 'center',
  width: '100%',
  height: '100%',
},
  })
  

