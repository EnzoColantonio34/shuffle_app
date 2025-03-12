import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/navbarstyle';

const NavbarComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.text}>Likes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Recherche')}>
        <Text style={styles.text}>Recherche</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Annuaire')}>
        <Text style={styles.text}>Annuaire</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Messagerie')}>
        <Text style={styles.text}>Messagerie</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavbarComponent;