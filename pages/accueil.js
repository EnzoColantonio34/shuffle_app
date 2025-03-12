import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/accueilstyle';
import CardComponent from '../components/cardcomponent';

const Accueil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CardComponent />
      </View>
    </View>
  );
};

export default Accueil;