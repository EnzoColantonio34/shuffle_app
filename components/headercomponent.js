import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/headerstyle';

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Shuffle</Text>
    </View>
  );
};

export default HeaderComponent;