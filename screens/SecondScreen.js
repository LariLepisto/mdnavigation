import React from 'react';
import { View, Text, Button } from 'react-native';

const SecondScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Second Screen</Text>
      <Button title="Go to Home Screen" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
};

export default SecondScreen;