import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, FlatList, Text, Alert} from 'react-native';
import PrayerBox from '../../components/PrayerBox';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';

const Index = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  const fetchRequest = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        'https://davprayerapi.herokuapp.com/all-requests',
      );
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      Alert.alert(err.response.data.error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, [isFocused]);
  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color="#FF5A5F" />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={data?.reverse()}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <PrayerBox
            first_name={item.first_name}
            last_name={item.last_name}
            date={item.created_at}
            request={item.prayer_request}
            onRefresh={() => fetchRequest()}
            refreshing={loading}
          />
        )}
      />
      <PrayerBox />
    </View>
  );
};

export default Index;
