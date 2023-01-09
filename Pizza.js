// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   FlatList,
//   Touch,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useContext} from 'react';
// import PizzaComponent from '../components/PizzaComponent';

// import pizzaMania from '../data/pizzaMania';

// function Pizza({navigation}) {
//   navigation.navigate('Pizza');
//   const data = pizzaMania;
//   const {cart, setCart} = useContext(CartItems);

//   const total = cart
//     .map(item => Number(item.price * item.quantity))
//     .reduce((prev, curr) => prev + curr, 0);

//   console.log(cart, 'cart items added');
//   console.log(total, 'total price');
//   return (
//     <>
//       {total === 0 ? null : (
//         <TouchableOpacity
//           style={{
//             backgroundColor: 'green',
//             padding: 10,
//             position: 'absolute',
//             bottom: 100,
//             left: 150,
//             borderRadius: 6,
//           }}>
//           <Text
//             style={{
//               textAlign: 'center',
//               fontWeight: 'bold',
//               fontSize: 16,
//               color: 'white',
//             }}>
//             Go to Cart
//           </Text>
//         </TouchableOpacity>
//       )}
//     </>
//   );
// }

// export default Pizza;

// const styles = StyleSheet.create({});
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../GlobalStyling';
function Pizza({navigation}) {
  const [searchedData, setsearchedData] = useState([
    {
      id: '0',
      name: 'MARGHERITA',
      description:
        'A hugely popular margherita, with a deliciously tangy single cheese topping',
      image: 'https://www.dominos.co.in/files/items/Margherit.jpg',
      price: 130,
      veg: true,
    },
    {
      id: '1',
      name: 'FARM HOUSE',
      description:
        'A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes',
      image: 'https://www.dominos.co.in/files/items/Farmhouse.jpg',
      price: 170,
      veg: true,
    },
    {
      id: '2',
      name: 'MEXICAN GREEN WAVE',
      description:
        'A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.',
      image: 'https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg',
      price: 180,
      veg: true,
    },
    {
      id: '3',
      name: 'PANEER MAKHANI',
      description: 'Paneer and Capsicum on Makhani Sauce',
      image: 'https://www.dominos.co.in/files/items/Paneer_Makhni.jpg',
      price: 200,
      veg: true,
    },
    {
      id: '4',
      name: 'INDI TANDOORI PANEER',
      description:
        'It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo',
      image: 'https://www.dominos.co.in/files/items/IndianTandooriPaneer.jpg',
      price: 160,
      veg: true,
    },
    {
      id: '5',
      name: 'VEGGIE PARADISE',
      description: 'Goldern Corn, Black Olives, Capsicum & Red Paprika',
      image:
        'https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg',
      price: 220,
      veg: true,
    },
    {
      id: '6',
      name: 'CHICKEN SAUSAGE',
      description: 'Chicken Sausage ,Cheese',
      image: 'https://www.dominos.co.in/files/items/Chicken_Sausage.jpg',
      price: 250,
      veg: false,
    },
    {
      id: '7',
      name: 'CHICKEN GOLDEN DELIGHT',
      description:
        'Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!',
      image: 'https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg',
      price: 270,
      veg: false,
    },
    {
      id: '8',
      name: 'NON VEG SUPREME',
      description:
        'Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers',
      image: 'https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg',
      price: 320,
      veg: false,
    },
    {
      id: '9',
      name: 'CHICKEN DOMINATOR',
      description:
        'Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers',
      image: 'https://www.dominos.co.in/files/items/Dominator.jpg',
      price: 300,
      veg: false,
    },
    {
      id: '10',
      name: 'CHICKEN FIESTA',
      description:
        'Grilled Chicken Rashers I Peri-Peri Chicken I Onion I Capsicum',
      image: 'https://www.dominos.co.in/files/items/chunky-chicken.png',
      price: 340,
      veg: false,
    },
    {
      id: '11',
      name: 'PEPPER BARBECUE CHICKEN',
      description: 'Pepper Barbecue Chicken ,Cheese',
      image: 'https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg',
      price: 290,
      veg: false,
    },
    {
      id: '12',
      name: 'INDI CHICKEN TIKKA',
      description:
        'The wholesome flavour of tandoori masala with Chicken tikka I onion I red paprika I mint mayo',
      image: 'https://www.dominos.co.in/files/items/IndianChickenTikka.jpg',
      price: 310,
      veg: false,
    },
    {
      id: '13',
      name: 'CHICKEN PIZZA',
      description:
        'Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers',
      image: 'https://www.dominos.co.in/files/items/Dominator.jpg',
      price: 300,
      veg: false,
    },
  ]);

  return (
    <View>
      <Text style={{fontSize: 13, fontWeight: 'bold'}}> PizzaAim </Text>

      <ScrollView>
        <TouchableOpacity>
          {searchedData && searchedData.length > 0 ? (
            searchedData.map((e, i) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('BookNow', e)}
                key={i}
                style={[styles.card, styles.ShadowLight]}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  {e.name}
                </Text>
                <Text style={{color: 'black'}}>{e.veg}</Text>
                <Image
                  source={{uri: `${e.image}`}}
                  style={{
                    width: '100%',
                    height: 150,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    marginBottom: 10,
                    color: 'black',
                  }}
                />

                <Text
                  style={{fontWeight: 'bold', fontSize: 13, color: 'black'}}>
                  Rs. {e.price + 100}{' '}
                </Text>

                <Text>{e.price}</Text>

                <Text
                  style={{fontWeight: 'bold', fontSize: 12, color: 'black'}}>
                  {e.description}
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

export default Pizza;
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
