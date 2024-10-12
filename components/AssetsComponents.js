import { Text, View, StyleSheet, Image } from 'react-native';
import {
  TouchableOpacity,
} from 'react-native';


const Render = ({ item, selected, setSelected }) => {
  const isSelected = selected === item.id;  

  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        { backgroundColor: isSelected ? 'white' : '#e5e5e5' },  
      ]}
      onPress={() => setSelected(item.id)} 
    >
      <View style={{ flex: 1 }}>
        <Image source={item.image} style={styles.anh} />
      </View>
      <View style={styles.text}>
        <Text>{item.name}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 100,
            alignItems: 'center',
          }}
        >
          <Image source={item.starRV} />
          <Image source={item.starRV} />
          <Image source={item.starRV} />
          <Image source={item.starRV} />
          <Image source={item.notstarRV} />
          <Text>{item.quantityReview}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.discount}>{item.discount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Render;

const styles = StyleSheet.create({
  anh: {
    width: 150,
    height: 90,
  },
  text: {
    flexDirection: 'column',
    flex: 1,
    margin:5,
  },
  discount: {
    color: '#969DAA',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 700,
    marginTop: '5%',
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    flex: 1,
    backgroundColor: '#e5e5e5',
  },

  
  price: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 700,
    marginTop: '5%',
  },


});
