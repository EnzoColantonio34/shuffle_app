import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/accueilstyle';
import CardComponent from '../components/cardcomponent';

const Accueil = () => {
  return (
    <LinearGradient
      colors={['#FF1B30', 'white']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <CardComponent />
      </View>
    </LinearGradient>
  );
};

export default Accueil;