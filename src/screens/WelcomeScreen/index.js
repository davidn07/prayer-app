import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';

const Index = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../../../Images/Logo2.png')} />

      <ImageBackground
        source={require('../../../Images/Rectangle.png')}
        style={{width: Dimensions.get('window').width, height: 600}}
        resizeMode="contain">
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 24, fontWeight: '700'}}>
            Continue steadfastly in prayer
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: '700',
              marginBottom: 100,
            }}>
            Colossians 4:2
          </Text>

          <TouchableOpacity
            style={{backgroundColor: '#fff', padding: 20, borderRadius: 10}}
            onPress={() => navigation.navigate('Details')}>
            <Text style={{color: '#FF5A5F'}}>Let's get started !</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Index;
