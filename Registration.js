import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../GlobalStyling';

function Registration() {
  return (
    <>
      <View>
        <Text style={styles.header}>Register Your Self</Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor={'gray'}
          style={styleIn.inputField}></TextInput>
        <TextInput
          placeholder="abc@gmail.com"
          placeholderTextColor={'gray'}
          style={styleIn.inputField}></TextInput>

        <TextInput
          placeholder="Vehical Name"
          placeholderTextColor={'gray'}
          style={styleIn.inputField}></TextInput>
        <TextInput
          placeholder="Vehical Type"
          placeholderTextColor={'gray'}
          style={styleIn.inputField}></TextInput>
        <TextInput
          placeholder="No of Seats"
          placeholderTextColor={'gray'}
          style={styleIn.inputField}></TextInput>
        <TextInput
          placeholder="time"
          keyboardType="time"
          placeholderTextColor={'gray'}
          style={styleIn.inputField}></TextInput>
        <TextInput
          placeholder="time"
          placeholderTextColor={'gray'}
          style={styleIn.inputField}></TextInput>
        <TextInput
          placeholder="standards"
          placeholderTextColor={'gray'}
          style={styleIn.inputField}></TextInput>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              borderRadius: 25,
              borderColor: 'black',
              color: 'black',
              textAlign: 'center',
              marginTop: 15,
              backgroundColor: 'yellow',
              width: '25%',
              height: 40,
              justifyContent: 'center',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Registration;

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
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },

  inputField: {
    paddingHorizontal: 25,
    fontSize: 20,
    paddingVertical: 10,
    shadowColor: 'gray',
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    color: 'black',
  },
});
