import React from 'react';
import { View } from 'react-native';
import styles from '../styles/accueilstyle';
import CardComponent from '../components/cardcomponent';

const Accueil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CardComponent />
      </View>
    </View>
  );
};

export default Accueil;