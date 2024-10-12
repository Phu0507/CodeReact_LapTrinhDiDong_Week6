import React, { useState } from 'react';
import Render from './components/AssetsComponents'

import {
  StyleSheet,
  FlatList,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';

const App = () => {
  const data = [
    {
      id: '1',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/giacchuyen1.png'),
    },
    {
      id: '2',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/daynguon1.png'),
    },
    {
      id: '3',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/dauchuyendoipsps21.png'),
    },
    {
      id: '4',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/daucam1.png'),
    },
    {
      id: '5',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/carbusbtops21.png'),
    },
    {
      id: '6',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/dauchuyendoi1.png'),
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.nav}>
        <Image source={require('./assets/Vector.png')} />
        <View>
          <Image
            style={styles.kinhLup}
            source={require('./assets/kinhlup.png')}
          />
          <TextInput
            style={styles.timKiem}
            placeholder="Dây cáp usb"
            placeholderTextColor="#7D5B5B"
          />
        </View>
        <Image source={require('./assets/bi_cart-check.png')} />
        <Image source={require('./assets/bacham.png')} />
      </View>

      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Render 
              item={item} 
              selected={selected} 
              setSelected={setSelected}  // Truyền state và hàm setSelected vào
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2} // Hiển thị 2 cột
        />
      </View>

      <View style={styles.nav}>
        <Image source={require('./assets/menu.png')} />
        <Image source={require('./assets/home.png')} />
        <Image source={require('./assets/back.png')} />
      </View>
    </SafeAreaView>
  );
};

  
const styles = StyleSheet.create({
  timKiem: {
    width: 200,
    height: 20,
    paddingLeft: 40,
    borderColor: 'white',
    padding: 15,
    backgroundColor: 'white',
  },
  kinhLup: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: '15%',
    left: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  
  nav: {
    backgroundColor: '#1BA9FF',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0% 5%',
  },
});

export default App;