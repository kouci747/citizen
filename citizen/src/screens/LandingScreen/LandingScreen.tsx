import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function LandingScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>LandingScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('AuthScreenNav' as never)}>
        <Text>Go to Auth</Text>
      </TouchableOpacity>
    </View>
  );
}
