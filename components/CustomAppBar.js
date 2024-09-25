import React from 'react';
import { Appbar } from 'react-native-paper';

const CustomAppBar = ({ navigation, back }) => {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('SecondScreen')} />
      )}
      <Appbar.Content title="My App" />
    </Appbar.Header>
  );
};

export default CustomAppBar;