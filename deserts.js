import React, {useState} from 'react';

import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import styles from '../GlobalStyling';

function Deserts({navigation}) {
  const [desert, setDesert] = useState([
    {
      id: 31,
      name: 'Choco Sundae',
      price: 2,
      description: 'Choco Sundae Cup (100 ml)',
      img: 'https://www.havmor.com/sites/default/files/styles/502x375/public/gallery/Choco%20Sundae__0.webp?itok=Md5Ameuw',
      quantity: 1,
    },
    {
      id: 32,
      name: 'Cornetto Double Chocolate',
      price: 2,
      description: 'Cornetto Double Chocolate Cone (105 ml)',
      img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/cornetto-double-chocolate.acc21849ac732f2f85998ad73e532d40.1.jpg?width=522',
      quantity: 1,
    },
    {
      id: 33,
      name: 'Magnum Truffle',
      price: 4,
      description: 'Magnum Truffle (80 ml)',
      img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/450560a.jpg',
      quantity: 1,
    },
    {
      id: 34,
      name: 'Divine Chocolate(Tub)',
      price: 6,
      description: 'Divine Chocolate (700 ml)',
      img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/divine-chocolate-tub.1df6b11e6e5d510cd11ae0d6e475686d.1.jpg?width=522',
      quantity: 1,
    },
    {
      id: 35,
      name: 'Choco Volcano Cake',
      price: 6,
      description: 'Choco Delight With A Gooey Chocolate Volcano Centre',
      img: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-volcano-cake.f829dc6e30a07b83f232b4880395162f.1.jpg',
      quantity: 1,
    },
    {
      id: 36,
      name: 'McFlurry with OREO Cookies',
      price: 8,
      description: `The McDonald’s McFlurry® with OREO® Cookies is a popular combination of creamy vanilla soft serve with crunchy pieces of OREO® cookies! Available in regular and snack sizes. There are 510 calories in a regular size OREO® McFlurry® at McDonald's. Check out all the McFlurry® flavors on the McDonald's Desserts & Shakes menu.`,
      img: 'https://s7d1.scene7.com/is/image/mcdonalds/t-oreo-mcflurry-snack:product-header-mobile?wid=768&hei=441&dpr=off',
      quantity: 2,
    },
    {
      id: 37,
      name: "McFlurry with M&M'S Candies",
      price: 8,
      description: `The McDonald’s M&M ® McFlurry® is a sweet, creamy M&M’S® dessert of vanilla soft serve with M&M’S® chocolate candies swirled in. Available in Regular Size and Snack Size.`,
      img: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mm-mcflurry-snack:product-header-mobile?wid=768&hei=441&dpr=off',
      quantity: 3,
    },
    {
      id: 38,
      name: 'Vanilla Cone',
      price: 4,
      description: `Enjoy our creamy vanilla soft serve in a crispy cone! It's the perfect sweet treat in addition to any McDonald's meal or on its own! There are 200 calories in McDonald's soft serve cones!`,
      img: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Vanilla-Reduced-Fat-Ice-Cream-Cone:product-header-mobile?wid=768&hei=441&dpr=off',
      quantity: 5,
    },
    {
      id: 39,
      name: 'Chocolate Shake',
      price: 11,
      description: `Try the McDonald’s Chocolate Shake, the perfect sweet treat for any time of the day. Our chocolate shake is made with delicious soft serve, chocolate syrup and finished off with a creamy whipped topping. McDonald's Chocolate Shake is available in small, medium and large. `,
      img: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Chocolate-McCafe-Shake-Medium-1:product-header-mobile?wid=768&hei=441&dpr=off',
      quantity: 2,
    },
    {
      id: 40,
      name: 'Vanilla Shake',
      price: 6,
      description: `McDonald's vanilla shake is made with our creamy vanilla soft serve and topped with whipped topping for a cool, tasty treat. Available in small, medium, and large. There are 510 calories in a small vanilla shake at McDonald's. `,
      img: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Vanilla-McCafe-Shake-Medium-1:product-header-mobile?wid=768&hei=441&dpr=off',
      quantity: 7,
    },
    {
      id: 41,
      name: 'Strawberry Shake',
      price: 10,
      description: `McDonald's Strawberry Shake is made with creamy vanilla soft serve, blended with strawberry syrup and topped with whipped topping. There are 530 calories in a small Strawberry Shake at McDonald's. Available in small, medium, and large.  `,
      img: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Strawberry-McCafe-Shake-Medium-1:product-header-mobile?wid=768&hei=441&dpr=off',
      quantity: 3,
    },
    {
      id: 42,
      name: 'Hot Fudge Sundae',
      price: 8,
      description: `Our classic hot fudge sundae is made with creamy vanilla soft serve and smothered in chocolaty hot fudge topping. There are 330 calories in a Hot Fudge Sundae at McDonald's. `,
      img: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hot-Fudge-Sundae:product-header-mobile?wid=768&hei=441&dpr=off',
      quantity: 5,
    },
    {
      id: 43,
      name: 'Hot Caramel Sundae',
      price: 8,
      description: `Treat yourself to a Hot Caramel Sundae at McDonald's! This Caramel Sundae combines creamy vanilla soft serve and warm, buttery caramel topping. `,
      img: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hot-Caramel-Sundae-1:product-header-mobile?wid=768&hei=441&dpr=off',
      quantity: 5,
    },
    {
      id: 44,
      name: 'Baked Apple Pie',
      price: 10,
      description: `McDonald's Baked Apple Pie recipe features 100% American-grown apples, and a lattice crust baked to perfection and topped with sprinkled sugar. There are 230 calories in McDonald's apple pie. Pair it with a Hot Caramel Sundae for your own twist on Apple Pie A-La-Mode! Order a Baked Apple Pie`,
      img: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Baked-Hot-Apple-Pie-1:product-header-mobile?wid=768&hei=443&dpr=off',
      quantity: 3,
    },
    {
      id: 45,
      name: 'Chocolate Chip Cookie',
      price: 2,
      description: `McDonald's classic chocolate chip cookie, loaded with chocolate chips. It's a soft baked cookie and warmed to perfection. `,
      img: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Chocolate-Chip-Cookie-mcd:product-header-mobile?wid=768&hei=441&dpr=off',
      quantity: 20,
    },
  ]);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginVertical: 15,
        flexDirection: 'column',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        position: 'relative',
      }}>
      <ScrollView>
        <TouchableOpacity>
          {desert && desert.length > 0 ? (
            desert.map((e, i) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BookNow', e);
                }}
                key={i}
                style={[styles.card, styles.ShadowLight]}>
                <Image
                  source={{uri: `${e.img}`}}
                  style={{
                    width: '100%',
                    height: 170,
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    margin: 5,
                    marginLeft: 10,
                    fontWeight: 'bold',
                  }}>
                  {e.name}
                </Text>

                <Text
                  style={{
                    fontSize: 28,
                    color: 'black',
                    marginBottom: 4,
                    marginLeft: 10,
                    position: 'absolute',
                    top: 170,
                    left: 280,
                    zIndex: 1,
                    backgroundColor: '#FFD100',
                    paddingHorizontal: 10,

                    fontWeight: 'bold',
                    paddingRight: 20,
                  }}>
                  Rs. {e.price + 500}{' '}
                </Text>

                <Text
                  style={{color: 'black', fontWeight: 'bold', marginLeft: 20}}>
                  quantity: {e.quantity}
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    color: '#9A9A9A',
                    marginBottom: 4,
                    marginLeft: 10,
                  }}>
                  {e.description.length > 50
                    ? e.description.slice(0, 50) + '...'
                    : e.description}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styleIn.errText}>Sorry, Not Available</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Deserts;
const styleIn = StyleSheet.create({
  mainHeading: {
    color: 'white',
    fontSize: 50,
    zIndex: 2,
    alignSelf: 'center',
    fontWeight: '600',
    marginVertical: '20%',
  },

  mainContainer: {
    backgroundColor: 'white',
    margin: 20,
    zIndex: 1,
    borderRadius: 20,
    padding: '7%',
  },

  InputBox: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 15,
    overflow: 'hidden',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 25,
    marginTop: 10,
    alignSelf: 'center',
  },

  inputField: {paddingHorizontal: 15, fontSize: 15, paddingVertical: 0},

  errText: {color: 'red', alignSelf: 'center', marginTop: 40, fontSize: 20},
});
