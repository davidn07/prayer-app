import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import axios from 'axios';

const Index = ({navigation}) => {
  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    prayer_request: '',
    created_at: new Date(),
    city: '',
    state: '',
  });

  const handleChange = name => value => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const {first_name, last_name, prayer_request, created_at, city, state} =
      values;
    if (
      !first_name ||
      !last_name ||
      !prayer_request ||
      !created_at ||
      !city ||
      !state
    ) {
      return Alert.alert('Please Fill All Fields !');
    } else {
      const res = await axios.post(
        'https://davprayerapi.herokuapp.com/add-mobile-request',
        values,
      );
      console.log(res.data);
      Alert.alert(res.data.message);
      setTimeout(() => navigation.navigate('AllRequest'), 2000);
    }
  };
  return (
    <View style={styles.box}>
      <Text>Add Prayer</Text>
      <View style={styles.twoBox}>
        <TextInput
          placeholder="First Name"
          style={[styles.input, {width: '45%'}]}
          onChangeText={handleChange('first_name')}
        />
        <TextInput
          placeholder="Last Name"
          style={[styles.input, {width: '45%'}]}
          onChangeText={handleChange('last_name')}
        />
      </View>
      <TextInput
        multiline
        numberOfLines={10}
        placeholder="Prayer Request"
        style={styles.input}
        onChangeText={handleChange('prayer_request')}
      />
      <View style={styles.twoBox}>
        <TextInput
          placeholder="City"
          style={[styles.input, {width: '45%'}]}
          onChangeText={handleChange('city')}
        />
        <TextInput
          placeholder="State"
          style={[styles.input, {width: '45%'}]}
          onChangeText={handleChange('state')}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.sendButton} onPress={() => handleSubmit()}>
          Add Request
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
