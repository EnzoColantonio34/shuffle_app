import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import styles from '../styles/cardstyle';

const CardComponent = () => (
  <Card style={styles.card}>
    <Card.Title title="Nom d'artiste" subtitle="Actif il y a ..." titleStyle={styles.cardTitle} />
    <Card.Content>
      <Text 
        style={styles.cardTitle}
        numberOfLines={2}            
        adjustsFontSizeToFit       
      >
      </Text>
      <Text style={styles.cardContent}>Content</Text>
    </Card.Content>
  </Card>
);

export default CardComponent;