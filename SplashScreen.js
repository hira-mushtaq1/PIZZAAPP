import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 1000);
  return (
    <View
      style={{
        backgroundColor: '#000000',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity>
        <Image
          source={require('../assets/logo.jpg')}
          style={{
            height: 400,
            width: 400,
          }}
        />
      </TouchableOpacity>
      <ActivityIndicator size={40} color="#00BA82" />
    </View>
  );
}
