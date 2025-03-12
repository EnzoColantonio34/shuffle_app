import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/accueilstyle';

const Accueil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    </View>
  );
};

export default Accueil;