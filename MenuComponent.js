import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function MenuComponent({navigation}) {
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
        Explore Menu
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: 20,
          marginTop: 14,
          borderRadius: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DominosPizzas');
          }}>
          <Image
            style={{width: 80, height: 80, borderRadius: 40}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-EGo_uL2gQ69jPMfofs6o-T4WFTeFIH1eg&usqp=CAU',
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              color: 'white',
              marginTop: 10,
            }}>
            Dominos Pizza
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Deserts');
          }}>
          <Image
            style={{width: 80, height: 80, borderRadius: 40}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmM0T6oJ74T0pT8CgXIBYAQuN0TwfovXeYLw&usqp=CAU',
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              color: 'white',
              marginTop: 10,
            }}>
            Desserts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Pizza');
          }}>
          <Image
            style={{width: 80, height: 80, borderRadius: 40}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFyrJlcZllJ28WI-ijmMt7DLL_9JuyJfEug&usqp=CAU',
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              color: 'white',
              marginTop: 10,
            }}>
            Pizza Mania
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

export default MenuComponent;

const styles = StyleSheet.create({});
