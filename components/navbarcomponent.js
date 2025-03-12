import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import styles from '../styles/navbarstyle';

const NavbarComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <IconButton
        icon="home"
        size={24}
        onPress={() => navigation.navigate('Home')}
      />
      <IconButton
        icon="heart"
        size={24}
        onPress={() => navigation.navigate('Profile')}
      />
      <IconButton
        icon="magnify"
        size={24}
        onPress={() => navigation.navigate('Recherche')}
      />
      <IconButton
        icon="book"
        size={24}
        onPress={() => navigation.navigate('Annuaire')}
      />
      <IconButton
        icon="message"
        size={24}
        onPress={() => navigation.navigate('Messagerie')}
      />
    </View>
  );
};

export default NavbarComponent;