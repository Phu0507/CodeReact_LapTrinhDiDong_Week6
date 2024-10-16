import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

const DATA = [
  {
      id: '1',
      name: 'Ca nấu lẩu, nấu mì mini',
      shop: 'Shop Devang',
      image: require('./assets/ca_nau_lau.png'),
    },
    {
      id: '2',
      name: '1KG KHÔ GÀ BƠ TỎI',
      shop: 'Shop LTD Food',
      image: require('./assets/ga_bo_toi.png'),
    },
    {
      id: '3',
      name: 'Xe cần cẩu đa năng',
      shop: 'Shop Thế giới đồ chơi',
      image: require('./assets/xa_can_cau.png'),
    },
    {
      id: '4',
      name: 'Đồ chơi dạng mô hình',
      shop: 'Shop Thế giới đồ chơi',
      image: require('./assets/do_choi_dang_mo_hinh.png'),
    },
    {
      id: '5',
      name: 'Lãnh đạo giản đơn',
      shop: 'Shop Minh Long Book',
      image: require('./assets/lanh_dao_gian_don.png'),
    },
    {
      id: '6',
      name: 'Hiểu lòng con trẻ',
      shop: 'Shop Minh Long Book',
      image: require('./assets/hieu_long_con_tre.png'),
    },
    {
      id: '7',
      name: 'Đồ chơi dạng mô hình',
      shop: 'Shop Thế giới đồ chơi',
      image: require('./assets/do_choi_dang_mo_hinh.png'),
    },
    {
      id: '8',
      name: 'Lãnh đạo giản đơn',
      shop: 'Shop Minh Long Book',
      image: require('./assets/lanh_dao_gian_don.png'),
    },
    {
      id: '9',
      name: 'Hiểu lòng con trẻ',
      shop: 'Shop Minh Long Book',
      image: require('./assets/hieu_long_con_tre.png'),
    },{
      id: '10',
      name: 'Đồ chơi dạng mô hình',
      shop: 'Shop Thế giới đồ chơi',
      image: require('./assets/do_choi_dang_mo_hinh.png'),
    },
    {
      id: '11',
      name: 'Lãnh đạo giản đơn',
      shop: 'Shop Minh Long Book',
      image: require('./assets/lanh_dao_gian_don.png'),
    },
];


const render = ({ item }) => {
    return (
      <TouchableOpacity  style={styles.itemContainer}>
        <View style={{ flex: 1 }}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text>{item.name}</Text>
          <Text>{item.shop}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.chatButton}>
            <Text style={styles.chatBtnTxt}>Chat</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <Image source={require('./assets/Vector.png')} />
        <Text style={{ color: 'white', fontSize: 20 }}>Chat</Text>
        <Image source={require('./assets/bi_cart-check.png')} />
      </View>
      <View  style={styles.container}>
      <Text style={styles.headerText}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop</Text>
        <FlatList
          data={DATA}
          renderItem={render}
          keyExtractor={(item) => item.id}
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
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  image: {
    width: 74,
    height: 74,
  },
  chatBtnTxt: {
    color: '#FFFFFF',
    width: 31.68,
    height: 12.16,
  },
  chatButton: {
    width: 88,
    height: 38,
    backgroundColor: '#F31111',
    alignItems: 'center',
    paddingTop: '10%',
  },
  textContainer: {
    flexDirection: 'column',
    flex: 2,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
headerText: {
    fontWeight: 500,
    padding:'5% 5% 2%',
  },
  nav: {
    backgroundColor: '#1BA9FF',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
    height: 40,
  },
});

export default App;