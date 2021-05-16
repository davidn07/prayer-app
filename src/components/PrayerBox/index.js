import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import moment from 'moment';

const Index = ({first_name, last_name, date, request}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.name}>{first_name + ' ' + last_name}</Text>
      <Text style={styles.date}>{moment(date).fromNow()}</Text>
      <Text style={styles.request}>{request}</Text>
    </View>
  );
};

export default Index;
